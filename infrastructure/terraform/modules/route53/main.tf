resource "aws_route53_zone" "primary" {
  for_each = { for zone in var.zones : zone.name => zone }
  name     = each.value.name
  comment  = each.value.description

  dynamic "vpc" {
    for_each = each.value.is_private ? each.value.vpc_ids : []
    content {
      vpc_id = vpc.value
    }
  }

  tags = {
    Environment = var.environment
    ManagedBy   = "Terraform"
  }
}

output "zone_ids" {
  value = { for k, v in aws_route53_zone.primary : k => v.zone_id }
}
