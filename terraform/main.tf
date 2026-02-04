resource "aws_instance" "devops" {
  ami           = var.ami
  instance_type = "c7i-flex.large"
  key_name      = var.key_name

  tags = {
    Name = "devops-server"
  }
}

resource "aws_instance" "wildfly" {
  count         = 2
  ami           = var.ami
  instance_type = "t3.small"
  key_name      = var.key_name

  tags = {
    Name = "wildfly-${count.index}"
  }
}
