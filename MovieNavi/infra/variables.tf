# infra/MovieNavi/variables.tf

variable "app_name" {
  type        = string
  description = "アプリ名（バケット名やリソース名の接頭語）"
  default     = "movienavi"
}

variable "subdomain" {
  type        = string
  description = "サブドメイン（例: XXX.takahiro-hasegawa.netの「XXX」）"
  default     = "movie"
}

variable "domain_name" {
  type        = string
  description = "親ドメイン"
  default     = "takahiro-hasegawa.net"
}

variable "acm_certificate_arn" {
  type        = string
  description = "us-east-1 の ACM 証明書 ARN（省略可・未指定なら自動検出）"
  default     = ""
}

# 既存 Hosted Zone の ID。未指定なら domain_name から自動検出。
variable "route53_zone_id" {
  type        = string
  description = "Route53 Hosted Zone ID（省略可・未指定なら自動検出）"
  default     = ""
}

variable "aws_region" {
  type        = string
  description = "操作リージョン（S3/Route53 はどこでも可）"
  default     = "ap-northeast-1"
}

variable "tags" {
  type        = map(string)
  description = "共通タグ"
  default = {
    project = "Portfolio"
    app     = "MovieNavi"
  }
}
