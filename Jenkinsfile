pipeline {
    agent 'any'
    environment {
        VERSION = 'v1.0.0'
        IMAGE = "deep-rpg:${VERSION}"
    }
    stages {
        stage('Test frontend'){
            agent {
                docker { image 'node:16.10.0-alpine' }
            }
            steps {
                sh 'npm run --prefix frontend/ test'
                sh 'npm run --prefix frontend/ build'
            }
        }
        stage('Build frontend'){
            when {
                expression {
                    BRANCH_NAME == 'main'
                }
            }
            steps {
                checkout scm
                sh 'docker stop front || true'
                sh 'docker rm front || true'
                sh 'docker image rm $IMAGE || true'
                sh 'docker builder prune -a -f'
                sh '(cd frontend && docker build -t $IMAGE .)'
                cleanWs();
            }
        }
        stage('Deploy frontend'){
            when {
                expression {
                    BRANCH_NAME == 'main'
                }
            }
            steps {
                sh 'docker run --name front -p 80:80 -d $IMAGE'
            }
        }
    }
}
