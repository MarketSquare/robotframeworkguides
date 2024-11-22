# Azure DevOps

**Azure DevOps** is a Microsoft platform that provides an end-to-end DevOps toolchain for developing and deploying software. It integrates with most leading tools on the market and is a great option for orchestrating a CI/CD pipeline.

To run **Robot Framework** tests in your Azure DevOps pipeline, you need to have **Python** and **Robot Framework** installed on the agents that execute the pipeline. You can use either Microsoft-hosted agents or set up your own self-hosted agents.

## Setting Up the Pipeline

In Azure DevOps, pipelines are defined using YAML files that specify the steps and jobs to be executed. Below is an example of an Azure DevOps pipeline that runs Robot Framework tests.

### Example of Azure Pipelines YAML for Robot Framework

```yaml showLineNumbers
# azure-pipelines.yml

trigger: none
pr: none

pool:
  name: 'Your Agent Pool'  # Replace with your agent pool name

jobs:
- job: RunRobotTests
  displayName: 'Run Robot Framework Tests'
  steps:
  
  - task: UsePythonVersion@0
    inputs:
      versionSpec: '3.10'  # Specify the Python version you need
      addToPath: true

  - script: |
      python -m pip install --upgrade pip
      pip install -r requirements.txt
    displayName: 'Install Dependencies'

  - script: |
      echo Running Robot Framework Tests
      robot -d Results Tests/yourPathToTests..
    displayName: 'Run Robot Framework Tests'
    continueOnError: true

  - task: PublishBuildArtifacts@1
    displayName: 'Publish Robot Framework Reports'
    inputs:
      PathtoPublish: 'Results'
      ArtifactName: 'RobotFrameworkReports'
      publishLocation: 'Container'
    condition: succeededOrFailed()
```
*Line 6-7:* `pool`: Specifies the agent pool that will run the pipeline.  
*Line 10:* `job: RunRobotTests`: Defines a job called RunRobotTests.  
*Line 14-17:* `task: UsePythonVersion@0`: Uses a specific version of Python on the agent.  
*Line 19-22:* Installs necessary Python packages from requirements.txt.  
*Line 24-28:* Executes the Robot Framework tests located in the specified test suite and outputs results to the Results directory.  
*Line 30-36:* Publishes the test results as build artifacts, making them available for download.  