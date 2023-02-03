# Robot Framework API

## What is the Robot Framework API?

The Robot Framework API allows us to do two main things.  

- Run commands like `robot` and `rebot` from Python scripts
- Access and modify all kinds of Robot Framework objects , e.g.
    - Execution Results
    - Test Suites
    - Parsers
    - Logger
    - Result Writer
    - ...

Check out the [Public API](https://robot-framework.readthedocs.io/en/master/index.html#module-robot.api) and [Entry Points](https://robot-framework.readthedocs.io/en/master/index.html#entry-points) for more information.

You can use the API to build your own tools or integrate Robot Framework with other tools.  
Examples are

- Integrating Robot Framework with (Test Management) Tools like Jira or TestRail
- Building your own Test Runner in Python
- Create tools for analyzing and refactoring Robot Framework Tests (like `robotidy` or `robocop`)
- Create UIs for Robot Framework
- Create Tools to distribute Robot Framework Tests
- Create Web Services for Robot Framework
- ...

Use your imagination 🦄

## Run Robot Framework from Python

Usually, we run Robot Framework from the command line.

```bash	
robot tests.robot
```

We often pass some arguments to the command, like `--variable` or `--outputdir`.

```bash
robot --variable BROWSER:chrome --outputdir results tests.robot
```

But we can also run Robot Framework from Python scripts.

```python
from robot import run

run('tests.robot', variable=['BROWSER:chrome'], outputdir='results')
```

The `run` function takes the same arguments as the `robot` command.

Check out the command-line options in the [Robot Framework User Guide](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#command-line-options) for more information.  

The only difference when using the `run` function is

- we don't need to prefix the arguments with `--`
    - e.g. `--variable` becomes `variable`
- boolean arguments like `--dryrun` or `--exitonfailure` need to be set to `True`(or `False`)
    - e.g. `--dryrun` becomes `dryrun=True`
- options which can be specified multiple times (like `--variable`) need to be passed as a list
    - e.g. `--variable BROWSER:chrome --variable URL:https://www.google.com` becomes `variable=['BROWSER:chrome', 'URL:https://www.google.com']`

If you prefer the command line syntax, you can use the `robot.run_cli` function.

```python
from robot import run_cli

rc = run_cli(['--variable', 'BROWSER:chrome', '--outputdir', 'results', 'tests.robot'])
```

## Access and Modify Robot Framework Objects

### Execution Results

#### Access Execution Results after a Test Run

After a test run, we can access the execution results with the `ExecutionResult` object.

The `ExecutionResult` object is returned by the `run` function or can be created from an `output.xml` file.

##### Print the number of passed and failed tests

The example below shows how to print the number of passed and failed tests.

```python
from robot.api import ExecutionResult
result = ExecutionResult('output.xml')
stats = result.statistics
print(f"Number of Failed Tests: {stats.failed}")
print(f"Total number of Tests: {stats.passed}")
```	

##### Write the test name and status to a markdown file

You can combine the `ExecutionResult` object with the [ResultVisitor](https://robot-framework.readthedocs.io/en/stable/autodoc/robot.result.html?highlight=Resultvisitor%20#module-robot.result.visitor) class to access the results in a structured way.  

The `ResultVisitor` class will allow you to "walk" through the results and react to certain events (similar to the [Listener](/docs/extending_robot_framework/listeners_prerun_api/listeners.md))

The example below will visit all tests and write the test name and status to a markdown file.

```python title="report.py"
from robot.api import ExecutionResult, ResultVisitor
import sys

class MyResultVisitor(ResultVisitor):
    def __init__(self, markdown_file='report.md'):
        self.failed_tests = []
        self.passed_tests = []
        self.markdown_file = markdown_file

    def visit_test(self, test):
        if test.status == 'FAIL':
            self.failed_tests.append(test.name)
        elif test.status == 'PASS':
            self.passed_tests.append(test.name)

    def end_result(self, result):
        # Create a new markdown file
        with open(self.markdown_file, "w") as f:
            f.write("# Robot Framework Report\n")
            f.write("|Test|Status|\n")
            f.write("|---|---|\n")
            for test in self.passed_tests:
                f.write(f"|{test}|PASS|\n")
            for test in self.failed_tests:
                f.write(f"|{test}|FAIL|\n")
                
if __name__ == '__main__':
    try:
        output_file = sys.argv[1]
    except IndexError:
        output_file = "output.xml"
    try:
        markdown_file = sys.argv[2]
    except IndexError:
        markdown_file = "report.md"
    result = ExecutionResult(output_file)
    result.visit(MyResultVisitor())
```

```bash	
python report.py output.xml report.md
```

That's how the result will look like:

###### Robot Framework Report
|Test|Status|
|---|---|
|My First Test Case|PASS|
|My Second Test Case As Keyword|PASS|
|Some Other Test Case|PASS|
|A Failed Test Case|FAIL|

####  Access Execution Results returned by the `run` function

The `run` function returns an `ExecutionResult` object.

```python
from robot import run

result = run('tests.robot', variable=['BROWSER:chrome'], outputdir='results')

print(result.suite.name)
stats = result.statistics
print(f"Number of Failed Tests: {stats.failed}")
print(f"Total number of Tests: {stats.passed}")
```