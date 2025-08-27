# infra/QuizHub/provider.tf

terraform {
  backend "s3" {
    bucket         = "hasegawa-portfolio-terraform"
    key            = "QuizHub/terraform.tfstate"
    region         = "ap-northeast-1"
    dynamodb_table = "hasegawa-terraform-locks"
    encrypt        = true
  }

  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 5.0"
    }
  }
}

# 通常リージョン（東京など）
provider "aws" {
  region = var.aws_region
}

# CloudFront / ACM 用 (バージニア北部 us-east-1)
provider "aws" {
  alias  = "virginia"
  region = "us-east-1"
}