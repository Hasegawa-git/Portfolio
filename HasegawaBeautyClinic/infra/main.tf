# infra/HasegawaBeautyClinic/main.tf

locals {
  fqdn = "${var.subdomain}.${var.domain_name}"
}

# 既存の Hosted Zone を参照（公開ゾーン）
data "aws_route53_zone" "this" {
  name         = var.domain_name
  private_zone = false
}

# === Lightsail WordPress インスタンス ===
resource "aws_lightsail_instance" "wp" {
  name              = "hbc-wp"
  availability_zone = "${var.aws_region}a"
  bundle_id         = var.lightsail_bundle_id
  blueprint_id      = var.lightsail_blueprint_id
  tags              = var.tags

  # 初回の軽いセットアップ（必要に応じて調整・追記OK）
  user_data = <<-EOS
    #!/bin/bash
    # ここに必要な初期化処理（タイムゾーン設定、wp-cli導入 等）を書けます
    # 例: timedatectl set-timezone Asia/Tokyo
  EOS
}

# 静的IP を確保してインスタンスにアタッチ
resource "aws_lightsail_static_ip" "ip" {
  name = "hbc-ip"
}

resource "aws_lightsail_static_ip_attachment" "attach" {
  static_ip_name = aws_lightsail_static_ip.ip.name
  instance_name  = aws_lightsail_instance.wp.name
}

# Route53 A レコード（Lightsail の静的IPへ）
resource "aws_route53_record" "a" {
  zone_id = data.aws_route53_zone.this.zone_id
  name    = local.fqdn
  type    = "A"
  ttl     = 300
  records = [aws_lightsail_static_ip.ip.ip_address]


  # すでに手動で同名レコードがある場合でも上書きできるように
  allow_overwrite = true
}

