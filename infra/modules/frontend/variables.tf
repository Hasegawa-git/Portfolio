# infra/modules/frontend/variables.tf

variable "app_name" { type = string }
variable "subdomain" { type = string }
variable "domain_name" { type = string }
variable "acm_certificate_arn" { type = string }
variable "zone_id" { type = string }
