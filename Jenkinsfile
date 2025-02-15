pipeline {
    agent any

    environment {
        API_IMAGE = "jiocinema-api"
        FRONTEND_IMAGE = "jiocinema-frontend"
    }

    stages {
        stage('Checkout Code') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Build API Docker Image') {
            steps {
                script {
                    sh """
                    cd JIOCINEMA/api
                    docker build -t $API_IMAGE .
                    """
                }
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                script {
                    sh """
                    cd JIOCINEMA
                    docker build -t $FRONTEND_IMAGE .
                    """
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    sh "docker-compose -f JIOCINEMA/docker-compose.yml up -d"
                }
            }
        }
    }

    post {
        always {
            script {
                sh "docker ps -a"
            }
        }
        success {
            echo "Deployment Successful!"
        }
        failure {
            echo "Deployment Failed!"
        }
    }
}
