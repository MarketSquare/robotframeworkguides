# GitHub Actions

This guide explains how to set up GitHub Actions to run Robot Framework web tests in a CI/CD pipeline. 
## Overview

GitHub Actions is a CI/CD and automation platform integrated into GitHub that allows you to define and manage your build, test, and deployment pipelines. It uses a YAML-based configuration to specify workflows, which are automated processes that are triggered by events in your GitHub repository.

To set up a CI/CD pipeline with GitHub Actions, you need to create a workflow file in the .github/workflows directory of your repository. This file contains the configuration for your workflows.

A workflow is a set of jobs that are executed in a specific order. Jobs are defined as steps that run commands or actions. Jobs can be grouped into different workflows, and their execution can be controlled through dependencies and conditions.

### Key Concepts:

- **Workflows**: Define the automated processes and are triggered by events such as code pushes or pull requests.

- **Jobs**: A set of steps that run on the same runner. Jobs can run in parallel or sequentially based on dependencies.

- **Steps**: Individual tasks within a job. Steps can include commands, scripts, or actions.

- **Actions**: Reusable components that can be used within steps to perform common tasks.

For more details on configuring GitHub Actions workflows, refer to the [GitHub Actions documentation](https://docs.github.com/en/actions).

## Workflow Configuration

```yaml
name: Run Robot Framework Tests

on:
  workflow_dispatch:
  schedule:
    - cron: '0 17 * * *'

jobs:
  test:
    runs-on: macos-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          # Install additional dependencies if needed
          pip install -r requirements.txt

      - name: Run Robot Framework tests
        env:
          WORK_TOKEN: ${{ secrets.GIT_TOKEN }}
          TZ: Asia/Ho_Chi_Minh
        run: |
          if ! robot --outputdir results --exclude skip tests/; then
              echo "Robot Framework tests failed. Rerunning failed tests..."
              if [ -f results/output.xml ]; then
                  robot --rerunfailed results/output.xml --outputdir results_rerun tests/ || true
                  if [ -f results_rerun/output.xml ]; then
                      rebot --output results/output.xml --log results/log.html --report results/report.html --merge results/output.xml results_rerun/output.xml
                  else
                      echo "No output.xml file found from rerun. Skipping merge."
                  fi
              else
                  echo "No output.xml file found. Cannot rerun failed tests."
              fi
          fi

          echo "Script execution completed"
        continue-on-error: true

      - name: Upload artifact
        uses: actions/upload-artifact@v4
        with:
          path: ./results
          name: robot-test-results
          retention-days: 3
```

## Explanation of Workflow Steps

1. **Checkout Repository**:
   - This step uses `actions/checkout` to check out the repository code.

2. **Set Up Python**:
   - This step sets up Python version 3.10 using `actions/setup-python`.

3. **Install Dependencies**:
   - Upgrades pip and installs the dependencies specified in `requirements.txt` and a local package.

    ```requirements.txt
    requests==2.32.3
    robotframework==4.1.3
    robotframework-appiumlibrary==2.1.0
    robotframework-jsonlibrary==0.5
    robotframework-pythonlibcore==4.4.1
    robotframework-seleniumlibrary==6.3.0
    robotframework-tidy==4.0
    rpaframework-core==11.3.3
    rpaframework-recognition==5.2.4
    selenium==4.12
    ```

4. **Run Robot Framework Tests**:
   - Executes Robot Framework tests and handles test results. If tests fail, it reruns the failed tests and merges results if necessary.

5. **Upload Artifact**:
   - Uses `actions/upload-artifact` to upload test results for further analysis or archival. The results are retained for 3 days.

## Triggering the Workflow

- **Manual Trigger**: You can manually trigger this workflow using the GitHub Actions interface.
- **Scheduled Trigger**: The workflow is also scheduled to run daily at 17:00 (UTC).

## Secrets

Ensure that the following secrets are set in your GitHub repository settings for the workflow to function properly:
- `GIT_TOKEN`

