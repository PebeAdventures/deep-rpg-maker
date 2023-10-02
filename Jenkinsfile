pipeline {
    agent 'any'
    environment { 
        VERSION = 'v1.0.0'
        IMAGE = "deep-rpg:${VERSION}"
    }
    stages {
        stage('Build frontend'){
            steps {
                cleanWs()
                sh 'docker stop front || docker rm front || true'
                sh 'docker image rm $IMAGE || true'
                sh 'docker builder prune -a -f'
                sh '(cd frontend && docker build -t $IMAGE .)'
            }   
        }
        stage('Deploy frontend'){
            steps {
                sh 'docker run --name front -p 80:80 -d $IMAGE'
            }   
        }
    }
}
