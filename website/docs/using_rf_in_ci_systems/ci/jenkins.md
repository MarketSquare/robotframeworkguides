# Jenkins       

Jenkins is an open source automation server, which allows you to integrate into
multiple different tools and platforms with various plugins.

In order to run **jobs**, you need a **Jenkinsfile** written in Groovy. Each Jenkinsfile has some
**stages**, which contain one or more **steps**. Each job is run one some **node**
(or **agent**), which contains all the necessary software to run your job.

If you want to run Robot Framework in your Jenkins job, you need to have `robotframework` installed
on the executing node. If you then want to publish your results, so that they are viewable
in Jenkins, use the [Robot Framework plugin](https://plugins.jenkins.io/robot/). To get the most
out of the plugin, please refer to the official plugin documentation.

By default, Jenkins won't allow you to open log files in the Jenkins UI. To allow this, you need
to [change your CSP settings](https://plugins.jenkins.io/robot/#plugin-content-log-file-not-showing-properly).
However, please note that **changing your CSP settings will potentially expose your Jenkins instance
for security vulnerabilities.**

## Examples

### Jenkinsfile with a stage **Run Robot**

```groovy
pipeline {
    agent { label "robot" } // run on an agent, which has Robot Framework installed

    stages {
        stage("Run Robot") {
            steps {
                // --nostatusrc prevents your job from failing automatically if any
                // tests fail. This is then later handled with the RF plugin with
                // pass thresholds
                sh script: "robot --nostatusrc my_tests.robot", returnStatus: true
            }
        }
    }

    post {
        always {
            // `onlyCritical: false` is for RF 3.x compatibility. This will be deprecated
            // and removed in the future.
            robot outputPath: '.', passThreshold: 80.0, unstableThreshold: 70.0, onlyCritical: false
        }
    }
}
```

###  Jenkinsfile with parameters and multiple stages 

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
