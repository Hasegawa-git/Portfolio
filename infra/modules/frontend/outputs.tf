# infra/modules/frontend/outputs.tf

output "cloudfront_domain" {
  value = aws_cloudfront_distribution.this.domain_name
}
