variable "zones" {
  type = list(object({
    name        = string
    description = string
    is_private  = bool
    vpc_ids     = list(string)
  }))
}

variable "environment" {
  type    = string
  default = "dev"
}
