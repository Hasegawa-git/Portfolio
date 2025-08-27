# infra/HasegawaBeautyClinic/provider.tf

terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 5.0"
    }
  }

  backend "s3" {
    bucket         = "hasegawa-portfolio-terraform"
    key            = "HasegawaBeautyClinic/terraform.tfstate"
    region         = "ap-northeast-1"
    dynamodb_table = "hasegawa-terraform-locks"
    encrypt        = true
  }
}

# 通常操作リージョン（Lightsail/Route53の操作）
provider "aws" {
  region = var.aws_region
}