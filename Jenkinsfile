pipeline {
  agent any

  stages {
    stage('Terraform') {
      steps {
        sh 'cd terraform && terraform init && terraform apply -auto-approve'
      }
    }

    stage('Build') {
      steps {
        sh 'mvn clean package'
      }
    }

    stage('Deploy') {
      steps {
        sh 'ansible-playbook ansible/deploy.yml'
      }
    }
  }

  post {
    failure {
      sh 'ansible-playbook ansible/rollback.yml'
    }
  }
}
