# Jenkins

## Installing Jenkins

Do you have experience with installing **Jenkins** and want to share your expertise?  
Here is how to [contribute](/docs/about/contribute).  
You can also [raise an issue](https://github.com/MarketSquare/robotframeworkguides/issues/new) and describe the content you would like to see here.

## Jenkins configuration

Using a Jenkins configuration file would be preferred as that way you can put the configuration to version control.
Basic structure could be something like:

```groovy
pipeline {
    properties([
            parameters([
                    choice(choices: ['test','staging'], description: 'Environment to run the tests against', name: 'environment'),
                    string(name: 'INCLUDE', defaultValue: 'valid_loginORinvalid_login', description: 'Specify which tags you want to run (e.g. valid_login)'),
                    string(name: 'EXCLUDE', description: 'Specify if you want to exclude tests by category tags'),
                    string(name: 'FOLDER', defaultValue: 'tests', description: 'Specify the folder for tests (e.g. . for current dir'),
                    string(name: 'BRANCH', defaultValue: 'main', description: 'Specify the branch for tests (e.g. main')
    ])

    // -- Script arguments --------------------------------
    def include = "${params.INCLUDE}"
    def exclude = "${params.EXCLUDE}"
    def folder = "${params.FOLDER}"
    def branch = "${params.BRANCH}"
    def args = ""
    // ----------------------------------------------------

    agent { label 'robot'} // how is your Jenkins agent labeled, so that right kind of agent is used for execution

    stages {
        stage('Checkout') {
            steps {
                script {
                    // checkout your code here 
                }
            }
        }
        stage('Define args') {
            steps {
                script {
                    if (!include.isEmpty()) {
                        args += " -i $include"
                    }
                    if (!exclude.isEmpty()) {
                        args += " -e $exclude"
                    }
                    if (!folder.isEmpty()) {
                        args += " $folder"
                    } else {
                        args += " ."
                    }
                }
            }
        }
        stage('Run Robot tests') {
            steps {
                sh """
                    // command to run your tests
                """
            }
            post {
                always {
                    step([
                            $class              : 'RobotPublisher',
                            outputPath          : 'test_results',
                            outputFileName      : "output.xml",
                            reportFileName      : 'report.html',
                            logFileName         : 'log.html',
                            disableArchiveOutput: false,
                            passThreshold       : 95.0,
                            unstableThreshold   : 95.0,
                            otherFiles          : "**/*.png",
                    ])
                }
            }
        }
    }
}
```

## Special notes about running tests with Browser library behind firewall

This is related especially to the use of Browser library which requires installations and initialisation to be done before the tests can be executed.

### Preparing the Jenkins agent

These are steps that needs to be done by the person administrating the Jenkins agents.
- Install all the tools that are needed for running the tests: nodejs, python 3.x, Robot Framework, Browser library
- Execute ```rfbrowser init``` to get the base setup for Browser library. Note that you still need to execute it with Jenkins user as well, see below.

### Preparing the Jenkins configuration file

These are steps you need to have in your Jenkins configuration. I recommend putting those as commands in the same shell command set together with test execution ("command to run your tests")
- ```npm config set registry https://local-site-for-node-modules``` <-- here you need a server that is providing all required node modules; if it doesn't exist proxy config might work as well
- Additional commands that might be needed could be ```npm config set strict-ssl false``` or ```npm config set always-auth true```depending how the server is configured
- Then run ```rfbrowser init --skip-browsers``` to avoid the installation of browsers that may appear hard over the firewall
- ... and use instead the ones installed by root when the agent was initialised: ```export PLAYWRIGHT_BROWSERS_PATH=/home/jenkins/.cache/ms-playwright````

Now you should be ready to execute tests.


