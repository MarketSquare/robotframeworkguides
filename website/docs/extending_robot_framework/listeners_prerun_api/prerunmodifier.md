# PreRunModifier

A PreRunModifier can modify the test suite before it is executed.  
It is like a "dry run" of the test suite with the possibility to modify the test suite before the actual execution.  
It can be enabled by using the `--prerunmodifier` option when running the test suite.  

Things you can do with a PreRunModifier:

- Skip or filter tests
- Read or modify test data (e.g. variables, tags, ...)
- Read or modify tests
- Read or modify keywords
- ...

Check out the [Robot Framework User Guide](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#programmatic-modification-of-test-data) for more information.  


## Visitor

Pre-run modifiers should be implemented as **visitors** that can traverse through the executable test suite structure and modify it as needed. The visitor interface is explained as part of the [Robot Framework API documentation](https://robot-framework.readthedocs.io/en/master/autodoc/robot.model.html#module-robot.model.visitor), and it possible to modify executed test suites, test cases and keywords using it

The visitor interface can execute code on the following events:

- `visit_suite`
- `start_suite`
- `end_suite`
- `visit_test`
- `start_test`
- `end_test`
- `visit_keyword`
- `start_keyword`
- `end_keyword`

This is only a subset of the events that are available, but it is the most common ones.  
Check out the [Robot Framework API documentation](https://robot-framework.readthedocs.io/en/master/autodoc/robot.model.html#module-robot.model.visitor) for more information.

## Robot Model

The Robot Framework API provides different objects that represent Robot Framework data.  
Depending on the event, the visitor will receive a different object.  
The following table shows the different objects that are available for each event.

| Event | Object |
| --- | --- |
| `visit_suite`/`start_suite`/`end_suite` | [Testsuite](https://robot-framework.readthedocs.io/en/master/autodoc/robot.model.html#module-robot.model.testsuite) |
| `visit_test`/`start_test`/`end_test` | [Testcase](https://robot-framework.readthedocs.io/en/master/autodoc/robot.model.html#module-robot.model.testcase) |
| `visit_keyword`/`start_keyword`/`end_keyword` | [Keyword](https://robot-framework.readthedocs.io/en/master/autodoc/robot.model.html#module-robot.model.keyword) |

Again, this is only a subset of the objects that are available, but it is the most common ones.

### Test Suite

The [Testsuite](https://robot-framework.readthedocs.io/en/master/autodoc/robot.model.html#module-robot.model.testsuite) object represents a test suite.

The following properties are available:

| Property | Description |
| --- | --- |
| `id` | Unique ID of the test suite |
| `name` | Name of the test suite |
| `source` | Path to the test suite file |
| `doc` | Documentation of the test suite |
| `metadata` | Metadata of the test suite |
| `tests` | List of tests in the test suite |
| `suites` | List of child test suites |
| `setup` | Setup of the test suite |
| `teardown` | Teardown of the test suite |
| `test_count` | Number of tests in the test suite |
| `parent` | Parent test suite |
| `keywords` | List of keywords in the test suite |

As the test suite is a container for `tests`  and other test `suites`, it is possible to access and modify the tests and suites objects from a top level test suite directly.

#### Read Test Names from Test Suite

The following example shows how to read the names of all tests in a test suite.

```python title="ReadTestNames.py" showLineNumbers
"""Pre-run modifier that reads the names of all tests in a test suite."""

from robot.api import SuiteVisitor

def start_suite(self, suite):
    """Read the names of all tests in the test suite."""
    for test in suite.tests:
        print(test.name)
```



## Example

### Select every Xth test

This example shows how to select every Xth test in a test suite.  
It could be used to distribute tests across multiple test runners, where each test runner only executes a subset of the tests.

```python title="SelectEveryXthTest.py" showLineNumbers
"""Pre-run modifier that selects only every Xth test for execution.

Starts from the first test by default. Tests are selected per suite.
"""

from robot.api import SuiteVisitor


class SelectEveryXthTest(SuiteVisitor):

    def __init__(self, x: int, start: int = 0):
        self.x = x
        self.start = start

    def start_suite(self, suite):
        """Modify suite's tests to contain only every Xth."""
        suite.tests = suite.tests[self.start::self.x]

    def end_suite(self, suite):
        """Remove suites that are empty after removing tests."""
        suite.suites = [s for s in suite.suites if s.test_count > 0]

    def visit_test(self, test):
        """Avoid visiting tests and their keywords to save a little time."""
        pass
```

The command below will select every third test in the test suite, starting from the first test.

```bash
robot --prerunmodifier SelectEveryXthTest:3:0 tests
```

To distribute the tests across three test runners, you would need to run

```bash
# Test Runner 1
robot --prerunmodifier SelectEveryXthTest:3:0 tests
# Test Runner 2
robot --prerunmodifier SelectEveryXthTest:3:1 tests
# Test Runner 3
robot --prerunmodifier SelectEveryXthTest:3:2 tests
```

### Copy and Modify Tests

The following example shows how to copy and modify tests in a test suite.

```python title="CopyTest.py" showLineNumbers
from robot.api import SuiteVisitor

class CopyTest(SuiteVisitor):
    def start_suite(self, suite):
        """Copy and modify tests in the test suite."""
        for test in suite.tests:
            if "copy" not in test.tags:
                test_case = suite.tests.append(test.deepcopy())
                test_case.tags.add("copy")
                test_case.name = f"{test_case.name} (copy)"
```

6: Loop over all tests in the test suite  
7: Check if the test does not have the tag "copy"  
8: Copy the test and add it to the end of the test suite  
9: Add the tag "copy" to the copied test  
10: Modify the name of the copied test  

```bash
robot --prerunmodifier CopyTest.py tests
```


