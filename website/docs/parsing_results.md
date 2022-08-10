# Parsing Results

Robot Framework can create different output files after a test run.  
* `output.xml`
* `log.html`
* `report.html`
* `xunit.xml`

Sometimes you want to parse your test results, e.g. because you want to transfer them to a different system (like a test management tool).
:::warning  
Don't try to parse the .xml files using some python xml module.
:::
Instead, use the **Robot Framework API** which allows you to get details about the executed tests, keywords, their data and the results much easier.  
You can find the documentation for the results model [here](https://robot-framework.readthedocs.io/en/stable/autodoc/robot.result.html?highlight=Resultvisitor#). 
Especially the [ResultVisitor](https://robot-framework.readthedocs.io/en/stable/autodoc/robot.result.html?highlight=Resultvisitor%20#module-robot.result.visitor) will allow you to access and modify your results at different points in time, e.g. when 
* a test suite starts/ends
* a test case starts/ends
* a keyword starts/ends
* ...  

Check the [documentation](https://robot-framework.readthedocs.io/en/stable/autodoc/robot.result.html?highlight=Resultvisitor%20#module-robot.result.visitor) for more possible entry points.  
While visiting the results, you will have full access to the Robot Framework [Model](https://robot-framework.readthedocs.io/en/stable/autodoc/robot.model.html#module-robot.model) and its objects.
You can easily read the status of a test or keyword, read its arguments or the elapsed execution time. Basically all data which is written into the `output.xml` can be accessed via the model.  

## Reading results using the RF API
Example which reads the execution time per test and sets the test status to failed,  in case the execution took longer than a defined value `max_seconds`.

`ExecutionTimeChecker.py`  
```python 
import sys
from robot.api import ExecutionResult, ResultVisitor


class ExecutionTimeChecker(ResultVisitor):

    def __init__(self, max_seconds):
        self.max_milliseconds = max_seconds * 1000

    def visit_test(self, test):
        if test.status == 'PASS' and test.elapsedtime > self.max_milliseconds:
            test.status = 'FAIL'
            test.message = 'Test execution took too long.'


def check_tests(seconds, inpath, outpath=None):
    result = ExecutionResult(inpath)
    result.visit(ExecutionTimeChecker(float(seconds)))
    result.save(outpath)


if __name__ == '__main__':
    try:
        check_tests(*sys.argv[1:])
    except TypeError:
        print(__doc__)
```
You can run the script from the terminal as shown below:
```shell
python ExecutionTimeChecker.py 10 output.xml checked_output.xml
```  

## Getting result statistics

Simple example to read number of passed and failed tests
```python 
from robot.api import ExecutionResult
result = ExecutionResult('output.xml')
stats = result.statistics
print(f"Number of Failed Tests: {stats.failed}")
print(f"Total number of Tests: {stats.passed}")
```

You can also create a table in a markdown file `report.md`with the results.

```python
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

That's how the result will look like:

### Robot Framework Report
|Test|Status|
|---|---|
|My First Test Case|PASS|
|My Second Test Case As Keyword|PASS|
|Some Other Test Case|PASS|
|A Failed Test Case|FAIL|

### More information
Check the [documentation](https://robot-framework.readthedocs.io/en/stable/autodoc/robot.result.html?highlight=Resultvisitor%20#module-robot.result.visitor)