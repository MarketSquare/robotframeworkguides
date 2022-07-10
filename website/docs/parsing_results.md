# Parsing Results

Robot Framework can create different output files after a test run.  
* `output.xml`
* `log.html`
* `report.html`
* `xunit.xml`

Sometimes you want to parse your test results, e.g. because you want to transfer them to a different system (like a test management tool).  
Don't try to parse the .xml files using some python xml module.  
Instead, use the Robot Framework API which allows you to get details about the executed tests, keywords, their data and the results much easier.  
You can find the documentation for the results model [here](https://robot-framework.readthedocs.io/en/stable/autodoc/robot.result.html?highlight=Resultvisitor#)

## Reading results using the RF API


## Getting result statistics

Simple example to read number of passed and failed tests
```python 
from robot.api import ExecutionResult
result = ExecutionResult('output.xml')
print(stats.total.failed)
print(stats.total.passed)
print(stats.tags.combined[0].total)
```
