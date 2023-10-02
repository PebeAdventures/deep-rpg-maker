terraform {
  required_providers {
    linode = {
      source  = "linode/linode"
      version = "2.8.0"
    }
  }
}

variable "token" {}

variable "root_pass" {}

provider "linode" {
  token = var.token
}

data "local_file" "docker_file" {
  filename = "${path.module}/docker-compose.yml"
}


resource "linode_stackscript" "prod_init" {
  label = "docker"
  description = "Installs docker"
  script = <<EOF
#!/bin/bash
      sudo apt update
      sudo apt install docker.io -y
      sudo apt install docker-compose -y
      echo -e "${data.local_file.docker_file.content}" >> docker-compose.yml
      sudo chmod 666 /var/run/docker.sock
      systemctl restart docker.service
      
      docker-compose up -d
  EOF
  images = ["linode/ubuntu22.04"]
  rev_note = "initial version"
}


resource "linode_instance" "production" {
    label = "rpg_production"
    image = "linode/ubuntu22.04"
    region = "eu-central"
    type = "g6-nanode-1"
    root_pass = var.root_pass
    stackscript_id = linode_stackscript.prod_init.id
}


