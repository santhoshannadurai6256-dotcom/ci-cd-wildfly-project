pipeline {
    agent any

    tools {
        maven 'Maven-3'
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/yourusername/wildfly-cicd-project.git'
            }
        }

        stage('Build WAR') {
            steps {
                sh 'mvn clean package'
            }
        }

        stage('Deploy using Ansible') {
            steps {
                sh '''
                ansible-playbook -i ansible/inventory.ini ansible/deploy.yml
                '''
            }
        }
    }

    post {
        failure {
            sh 'ansible-playbook -i ansible/inventory.ini ansible/rollback.yml'
        }
    }
}
