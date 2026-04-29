terraform {
  required_version = ">= 1.0.0"
  backend "s3" {
    bucket = "hybrid-dns-terraform-state"
    key    = "global/s3/terraform.tfstate"
    region = "us-east-1"
    encrypt = true
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

module "route53" {
  source = "./modules/route53"
  zones  = var.dns_zones
}
