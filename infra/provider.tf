# infra/provider.tf

terraform {
  backend "s3" {
    bucket         = "hasegawa-portfolio-terraform"
    key            = "infra/terraform.tfstate"
    region         = "ap-northeast-1"
    dynamodb_table = "hasegawa-terraform-locks"
    encrypt        = true
  }
}
