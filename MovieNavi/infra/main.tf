# infra/MovieNavi/main.tf

locals {
  fqdn = "${var.subdomain}.${var.domain_name}"
}

# 既存の Hosted Zone を参照
data "aws_route53_zone" "this" {
  name         = var.domain_name
  private_zone = false
}

# us-east-1 の Issued 証明書を自動検出（指定があればそれを優先）
data "aws_acm_certificate" "wildcard" {
  provider    = aws.virginia
  domain      = var.domain_name
  types       = ["AMAZON_ISSUED"]
  most_recent = true
  statuses    = ["ISSUED"]
}

locals {
  cert_arn = length(var.acm_certificate_arn) > 0 ? var.acm_certificate_arn : data.aws_acm_certificate.wildcard.arn
}

# --- S3（静的ホスティング/Origin 用） ---
resource "aws_s3_bucket" "site" {
  bucket = "hasegawa-${var.app_name}-bucket"
  tags   = var.tags
}

resource "aws_s3_bucket_public_access_block" "site" {
  bucket                  = aws_s3_bucket.site.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_website_configuration" "site" {
  bucket = aws_s3_bucket.site.id

  index_document { suffix = "index.html" }
  error_document { key    = "index.html" }
}

# --- CloudFront（OAC で S3 へプライベート配信） ---
resource "aws_cloudfront_origin_access_control" "oac" {
  name                              = "${var.app_name}-oac"
  description                       = "OAC for ${var.app_name}"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "cdn" {
  enabled             = true
  comment             = "hasegawa ${var.app_name}"
  default_root_object = "index.html"
  aliases             = [local.fqdn] # ★ カスタムドメイン

  origin {
    domain_name              = aws_s3_bucket.site.bucket_regional_domain_name
    origin_id                = "${var.app_name}-s3"
    origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
  }

  default_cache_behavior {
    target_origin_id       = "${var.app_name}-s3"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]

    forwarded_values {
      query_string = false
      cookies { forward = "none" }
    }
  }

  restrictions {
    geo_restriction { restriction_type = "none" }
  }

  viewer_certificate {
    acm_certificate_arn      = local.cert_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  tags = var.tags
}

# CloudFront からのアクセスのみ許可
resource "aws_s3_bucket_policy" "allow_cf_only" {
  bucket = aws_s3_bucket.site.id
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid       = "AllowCloudFrontServicePrincipalReadOnly"
        Effect    = "Allow"
        Principal = { Service = "cloudfront.amazonaws.com" }
        Action    = [ "s3:GetObject" ]
        Resource  = "${aws_s3_bucket.site.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.cdn.arn
          }
        }
      }
    ]
  })
}

# Route53: A レコードで CloudFront へ ALIAS
resource "aws_route53_record" "app" {
  zone_id = data.aws_route53_zone.this.zone_id
  name    = local.fqdn
  type    = "A"
  allow_overwrite = true 
  
  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = false
  }
}