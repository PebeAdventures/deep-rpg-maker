pipeline {
    agent 'any'
    environment {
        VERSION = 'v1.0.0'
        IMAGE = "deep-rpg:${VERSION}"
    }
    stages {
        stage('Test frontend'){
            agent {
                dockerfile { 
                    filename 'node-test.Dockerfile'
                    dir 'frontend' 
                }
            }
            steps {
                script {
                    def npm = 'npm --prefix frontend/'
                    sh "${npm} install"
                    // TODO: Enable node tests with  headless chrome 
                    // sh "${npm} run test --sourceMap=false --browsers=ChromeHeadless --watch=false"
                    sh "${npm} run build"
                }
            }
        }
        stage('Build frontend'){
            when {
                expression {
                    currentBranchIsMain()
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
                    currentBranchIsMain()
                }
            }
            steps {
                sh 'docker run --name front -p 80:80 -d $IMAGE'
            }
        }
    }
}

def currentBranchIsMain(){
    return BRANCH_NAME == 'main'
}
