output "s3_bucket_name" { value = aws_s3_bucket.site.id }
output "cloudfront_distribution_id" { value = aws_cloudfront_distribution.cdn.id }
output "fqdn" { value = "${var.subdomain}.${var.domain_name}" }