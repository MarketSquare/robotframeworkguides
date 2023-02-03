# Listener Interface

`Listeners` can  *listen* 👂 to the events that are fired during the execution of a test suite and react to them.  
They are like a *hook* 🪝 into the test run, allowing us to execute code at a specific point in time during the execution.  
You can use them to e.g. notify other systems about the progress of your test suite in real time.  
Examples of events that can be listened to are:

- `Test Suite Started`
- `Test Suite Ended`
- `Test Started`
- `Test Ended`
- `Keyword Started`
- `Keyword Ended`
- `Message`
- ...

One advantage of using a Listener instead of a Custom Library is that you are very flexible. You can enable/disable the Listener for every test execution without modifying your tests. Listeners will just run in the background and do their job.  

Check out the [Robot Framework User Guide](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#listener-interface) for more information.


## Interface Versions - v2 and v3

There are two versions of the Listener Interface - v2 and v3.

[Listener Interface Versions](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#listener-interface-methods)

Inside the Listener file, you need to define a variable called `ROBOT_LISTENER_API_VERSION` and set it to either `2` or `3`.

Examples:  

```python
ROBOT_LISTENER_API_VERSION = 2

def end_test(name, attrs):
    if attrs['status'] == 'FAIL':
        print('Test "%s" failed: %s' % (name, attrs['message']))
        input('Press enter to continue.')
```

```python
ROBOT_LISTENER_API_VERSION = 3

def end_test(data, result):
    if not result.passed:
        print('Test "%s" failed: %s' % (result.name, result.message))
        input('Press enter to continue.')
```

One main difference between both versions is:

- v2 allows you to **read** the attributes of the test case, keyword, etc.
    - main purpose is reporting and monitoring the execution of the test suite
- v3 also allows you to **read** and **modify** the attributes of the test case, keyword, etc.
    - changes will have a direct effect on the execution of the test suite
    - beside reporting and monitoring, you can use it to e.g. skip tests, modify test data, etc.

However, some methods like `start_keyword` and `end_keyword` are only available in the v2.



[Listener v2 methods](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#listener-version-2)

[Listener v3 methods](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#listener-version-3)

## Using Listeners

Start your test suite with the `--listener` option and the path to the listener file.
    
```bash
robot --listener path/to/listener.py tests
```

### Class or Module

You can use a Listener as a class or as a module.  
When using a class, I recommend to use the same name for the class and the file.   

```python title="ListenerClass.py"

Class ListenerClass:

    ROBOT_LISTENER_API_VERSION = 3

    def __init__(self):
        pass

    def start_suite(self, data, result):
        pass
```


```python title="ListenerModule.py"

def start_suite(data, result):
    pass
```

## Listener Templates

You can use the following templates to create your own Listener.  
Just copy the code and paste it into a new file.  
Add your own code to the methods you want to use.  
Remove the methods you don't need.

<details>
<summary>Listener Template v2</summary>

```python title="RobotListenerV2.py"
from robot.libraries.BuiltIn import BuiltIn

b = BuiltIn()

class RobotListenerV2:

    ROBOT_LISTENER_API_VERSION = 2
    ROBOT_LIBRARY_SCOPE = "GLOBAL"

    def __init__(self):
        self.ROBOT_LIBRARY_LISTENER = self
        pass

    def start_suite(self, name, attrs):
        print(name)
        print(attrs)
        pass

    def start_test(self, name, attrs):
        print(name)
        print(attrs)
        pass

    def start_keyword(self, name, attrs):
        print(name)
        print(attrs)
        pass

    def end_keyword(self, name, attrs):
        print(name)
        print(attrs)
        pass

    def end_test(self, name, attrs):
        print(name)
        print(attrs)
        pass

    def end_suite(self, name, attrs):
        print(name)
        print(attrs)
        pass

    def log_message(self, message):
        print(message)
        pass

    def message(self, message):
        print(message)

        pass

    def library_import(self, name, attrs):
        print(name)
        print(attrs)
        pass

    def resource_import(self, name, attrs):
        print(name)
        print(attrs)
        pass

    def variables_import(self, name, attrs):
        print(name)
        print(attrs)
        pass

    def output_file(self, path):
        print(path)
        pass

    def log_file(self, path):
        print(path)
        pass

    def report_file(self, path):
        print(path)
        pass

    def xunit_file(self, path):
        print(path)
        pass

    def debug_file(self, path):
        print(path)
        pass

    def close(self):
        pass
```
</details>

<details>
<summary>Listener Template v3</summary>

```python title="RobotListenerV3.py"
from robot.libraries.BuiltIn import BuiltIn


class RobotListenerV3:

    ROBOT_LIBRARY_SCOPE = "GLOBAL"
    ROBOT_LISTENER_API_VERSION = 3

    def __init__(self):
        pass

    def start_suite(self, suite, result):
        pass

    def start_test(self, test, result):
        pass

    def end_test(self, test, result):
        pass

    def end_suite(self, suite, result):
        pass

    def log_message(self, message):
        pass

    def message(self, message):
        pass

    def debug_file(self, path):
        pass

    def output_file(self, path):
        pass

    def xunit_file(self, path):
        pass

    def log_file(self, path):
        pass

    def report_file(self, path):
        pass

    def close(self):
        pass
```	
</details>

## Example Listeners

### Stop on Failure Listener

A Listener which stops the execution of the test suite if a test fails.

```python title="listener.py"
"""Listener that stops execution if a test fails."""

ROBOT_LISTENER_API_VERSION = 3

def end_test(data, result):
    if not result.passed:
        print('Test "%s" failed: %s' % (result.name, result.message))
        input('Press enter to continue.')
```

### Report Listener

A Listener which writes the name and status of each test to a file.

```python title="ReportListener.py"
class ReportListener:
    ROBOT_LISTENER_API_VERSION = 3

    def __init__(self, filename='report.md'):
        self.filename = filename
        self.fh = open(self.filename, 'w')
        self.fh.write("# Robot Framework Report\n")
        self.fh.write("|Test|Status|\n")
        self.fh.write("|---|---|\n")

    def close(self):
        self.fh.close()

    def end_test(self, data, result):
        self.fh.write(f"|{result.name}|{result.status}|\n")
```

```bash
robot --listener ReportListener.py tests
```