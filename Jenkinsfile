pipeline {
    agent any

    tools {
        maven 'maven-3'
    }

    options {
        skipDefaultCheckout(true)
        timestamps()
    }

    environment {
        APP_URL = "http://13.203.196.11:8080/company-webapp/  & http://15.207.55.122:8080/company-webapp/"
        EMAIL_TO = "santhoshannadurai255@gmail.com"
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

        success {
            mail to: "${EMAIL_TO}",
                 subject: "✅ SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: """Hello Team,

Deployment completed successfully.

Job: ${env.JOB_NAME}
Build Number: ${env.BUILD_NUMBER}
Status: SUCCESS

Application URL:
${APP_URL}

Regards,
Jenkins
"""
        }

        failure {
            sh 'ansible-playbook -i ansible/inventory.ini ansible/rollback.yml'

            mail to: "${EMAIL_TO}",
                 subject: "❌ FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: """Hello Team,

Deployment FAILED.

Job: ${env.JOB_NAME}
Build Number: ${env.BUILD_NUMBER}
Status: FAILED

Rollback has been executed.
Please check Jenkins logs.

Regards,
Jenkins
"""
        }
    }
}
