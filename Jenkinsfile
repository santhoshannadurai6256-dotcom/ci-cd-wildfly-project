pipeline {
    agent any

    tools {
        maven 'maven-3'
    }

    options {
        skipDefaultCheckout(true)
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/santhoshannadurai6256-dotcom/ci-cd-wildfly-project.git'
            }
        }

        stage('Build WAR') {
            steps {
                sh 'mvn clean package'
            }
        }

        stage('Deploy using Ansible') {
            steps {
                sh 'ansible-playbook -i ansible/inventory.ini ansible/deploy.yml'
            }
        }
    }

    post {
        failure {
            echo "Deployment failed, running rollback..."
            sh 'ansible-playbook -i ansible/inventory.ini ansible/rollback.yml'
        }
    }
}
