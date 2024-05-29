---
sidebar_label: Re-Execute failed tests
title: Re-Execute failed tests
---

[HOW TO! Rerun failed testcases in Robot Framework](https://youtu.be/537Os9GVXLk?si=nskKyTmLr0OEfXjJ)

<iframe width="560" height="315" src="https://www.youtube.com/embed/537Os9GVXLk?si=nskKyTmLr0OEfXjJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Re-Execute Failed Tests and merge results

It is possible to run the same test suite(s) multiple times - but only re-run the failed tests. Afterwards the results can be merged into a single results file using `rebot`.
You can find the required steps in the [Robot Framework User Guide](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#merging-outputs)

```shell
robot --output original.xml tests                          # first execute all tests
robot --rerunfailed original.xml --output rerun.xml tests  # then re-execute failing
rebot --merge original.xml rerun.xml                       # finally merge results
```

## RetryFailed Listener

The [RetryFailed Listener](https://github.com/MarketSquare/robotframework-retryfailed) can automatically retry tests or tasks based on tags.

### Installation

Install with pip:

```shell
pip install robotframework-retryfailed
```

### Usage

Add the listener to your robot execution, via command line arguments.
When your tests do fail and you have tagged them with `test:retry(2)`, it will retry the test 2 times.
Retry can be also set globally as a parameter to the listener.

#### Attaching Listener

Example:
```shell
robot --listener RetryFailed <your robot suite>

robot --listener RetryFailed:1 <robot suite>
```

Second one will by default retry once every failing test.

#### Tagging Tests

Example:
```robotframework
*** Test Cases ***
Test Case
    [Tags]    test:retry(2)
    Log    This test will be retried 2 times if it fails
```
Tagging tasks by `task:retry(3)` should also work.

## Wait Until Keyword Succeeds

Runs the specified keyword and retries if it fails.

Check out the [Wait Until Keyword Succeeds](https://robotframework.org/robotframework/latest/libraries/BuiltIn.html#Wait%20Until%20Keyword%20Succeeds) keyword in the Robot Framework BuiltIn library.

Example:
```robotframework
*** Test Cases ***
Test Case
    Wait Until Keyword Succeeds    2 min    5 sec    My keyword    argument
    ${result}    Wait Until Keyword Succeeds    3x    200ms    My keyword
    ${result}    Wait Until Keyword Succeeds	3x    strict: 200ms    My keyword
```
