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
        sh 'cd app && mvn clean package'
      }
    }

    stage('Deploy') {
      steps {
        sh 'ansible-playbook ansible/deploy.yml'
      }
    }
  }

  post {
    success {
      emailext(
        subject: "SUCCESS: WildFly Deployment",
        body: "Deployment completed successfully.",
        to: "yourmail@gmail.com"
      )
    }

    failure {
      sh 'ansible-playbook ansible/rollback.yml'
      emailext(
        subject: "FAILED: Deployment Rolled Back",
        body: "Deployment failed. Rollback executed.",
        to: "yourmail@gmail.com"
      )
    }
  }
}
