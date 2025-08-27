# infra/HasegawaBeautyClinic/variables.tf

variable "aws_region" {
  type        = string
  description = "Lightsail を作成するリージョン"
  default     = "ap-northeast-1"
}

variable "domain_name" {
  type        = string
  description = "親ドメイン（例: takahiro-hasegawa.net）"
  default     = "takahiro-hasegawa.net"
}

variable "subdomain" {
  type        = string
  description = "サブドメイン（例: clinic）"
  default     = "clinic"
}

# Lightsail のプラン。必要に応じて変更可
# 有効な bundle_id は `aws lightsail get-bundles` で確認可能
variable "lightsail_bundle_id" {
  type        = string
  description = "Lightsail のプラン（例: medium_2_0）"
  default     = "medium_2_0"
}

# WordPress のブループリント。`wordpress` で動作しますが、必要なら CLI で実値確認可
# `aws lightsail get-blueprints` で確認
variable "lightsail_blueprint_id" {
  type        = string
  description = "Lightsail のブループリントID（例: wordpress）"
  default     = "wordpress"
}

variable "tags" {
  type        = map(string)
  description = "共通タグ"
  default = {
    project = "Portfolio"
    app     = "HasegawaBeautyClinic"
  }
}