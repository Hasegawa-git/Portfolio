# infra/main.tf 

module "base" {
  source      = "./modules/base"
  domain_name = "takahiro-hasegawa.net"
}

module "quizhub" {
  source              = "./modules/frontend"
  app_name            = "quizhub"
  subdomain           = "quiz"
  domain_name         = module.base.domain_name
  acm_certificate_arn = module.base.acm_certificate_arn
  zone_id             = module.base.zone_id
}

module "movienavi" {
  source              = "./modules/frontend"
  app_name            = "movienavi"
  subdomain           = "movie"
  domain_name         = module.base.domain_name
  acm_certificate_arn = module.base.acm_certificate_arn
  zone_id             = module.base.zone_id
}

# backendモジュールは空で置いておく
module "quizhub_backend" {
  source   = "./modules/backend"
  app_name = "quizhub"
}
