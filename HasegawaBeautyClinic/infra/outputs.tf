# infra/HasegawaBeautyClinic/outputs.tf

output "server_ip" {
  value       = aws_lightsail_static_ip.ip.ip_address
  description = "Lightsail の静的IP"
}

output "site_url_http" {
  value       = "http://${local.fqdn}"
  description = "HTTP のサイトURL（初回接続用）"
}

output "fqdn" {
  value       = local.fqdn
  description = "公開FQDN"
}