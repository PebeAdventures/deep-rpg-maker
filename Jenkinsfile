pipeline {
    agent any
    environment {
        VERSION = 'v1.0.0'
        IMAGE = "deep-rpg:${VERSION}"
    }
    stages {
        stage('Build and Deploy frontend') {
            when {
                expression {
                    def changeSets = currentBuild.changeSets
                    def mainBranchChangeSet = changeSets.find { it.branch == 'origin/main' }
                    return mainBranchChangeSet != null
                }
            }
            steps {
                checkout scm
                sh 'docker stop front || true'
                sh 'docker rm front || true'
                sh 'docker image rm $IMAGE || true'
                sh 'docker builder prune -a -f'
                sh '(cd frontend && docker build -t $IMAGE .)'
                sh 'docker run --name front -p 80:80 -d $IMAGE'
                cleanWs()
            }
        }
    }
}
