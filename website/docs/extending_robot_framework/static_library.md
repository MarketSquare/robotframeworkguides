---
sidebar_position: 0
sidebar_label: Static Library
title: Static Library
---

A static library has all of its robot framework keywords defined as python functions.

### Static Library With a Class

```python	
class DemoLibrary:
    def __init__(self, *args, **kwargs):
        print(f"Sample Library initialized with args: {args} and kwargs: {kwargs}")
 
    def my_keyword(self, *args, **kwargs):
        print(f"Keyword got args: {args} and kwargs: {kwargs}")
        return "Hello World"
```

```robotframework
*** Settings ***
Library    DemoLibrary.py

*** Test Cases ***
Use a Keyword with multiple arguments
    My Keyword    Argument 1    Argument 2    Named Argument=One Value
```

<iframe src="https://robotframework.org/embed/?code-gh-url=https://github.com/MarketSquare/robotframeworkguides/tree/main/code-examples/extending_robot_framework/static_library/Static_Library_With_Class" width="100%" height="250"></iframe>

### Static Library withouth a Class

```python
import base64

def encode_as_base64(string):
    """
    Encode string as base64.
    """
    return base64.b64encode(string.encode())

def decode_from_base64(string):
    """
    Decode string from base64.
    """
    return base64.b64decode(string).decode()
```

```robotframework
*** Settings ***
Library    LibraryWithoutClass.py

*** Test Cases ***
Use Custom Keywords
    ${base64}    Encode As Base64    This is a Test String
    Log    ${base64}
    ${decoded}    Decode From Base64    ${base64}
    Log    ${decoded}
```	

<iframe src="https://robotframework.org/embed/?code-gh-url=https://github.com/MarketSquare/robotframeworkguides/tree/main/code-examples/extending_robot_framework/static_library/Static_Library_Without_Class" width="100%" height="350"></iframe>


## Decorators
You can add decorators like `@keyword` `@not_keyword` to mark your functions as keywords and e.g. provide another name for the keyword.

```python
from robot.api.deco import keyword, not_keyword


@keyword('Login via user panel')
def login(username, password):
      # ...

@not_keyword
def this_is_not_keyword():
    pass
```	

It can even be used to add tags or change the argument conversion.

```python
from robot.api.deco import keyword


@keyword(tags=['tag1', 'tag2'])
def login(username, password):
    # ...

@keyword('Custom name', ['tags', 'here'])
def another_example():
    # ...

@keyword(types={'count': int, 'case_insensitive': bool})
def example_keyword(count, case_insensitive=True):
    if case_insensitive:
        # ...

@keyword(types=[int, bool])
def example_keyword(count, case_insensitive=True):
    if case_insensitive:
        # ...
```

A simple `Calculate.py` library with a single keyword that calculates a mathematical expression.

```python
def calculate(term):
    if term == "":
        return 0
    else:
        return eval(term)
```	
```robotframework	
*** Settings ***
Library    Calculate.py

*** Test Cases ***
Perform Calculations
    ${result}    Calculate    1 + 2
    Should Be Equal As Numbers    ${result}    3
    ${result}    Calculate    10 * 5
    Should Be Equal As Numbers    ${result}    50
    ${result}    Calculate    8 / 4
    Should Be Equal As Numbers    ${result}    2
    ${result}    Calculate    2 - 1
    Should Be Equal As Numbers    ${result}    1
```	

## Examples

<iframe src="https://robotframework.org/embed/?codeProject=N4IgdghgtgpiBcIDCBXAzgFwPZRAGhABMY0BjAJwEsAHDSrMBEfEAM0oBsSEBtUdrgDlocRABUSGAMopKGGADpyWAEZYMLUg3lgNiAFSGABFJgY6YAOZojh-QB0wAGUoryEcgE8jPowAVPDAALBgBpGE8AdyxyQjRHRzsjCUwjJAg0EltDRwBVTLT0bCgjcKiYuMdfI0EsIwBBcksUWF14sGqAeTAYBqaWmF1qlIw+5taMKt8xIPIYXsbxwYwbX27e6ejh2fmpn3WjABEYVggUDlHfPaMAWXO6ai4jk7OL1Z9FgaGARmqPSwAzABeT4TIwA643bxlaKxaqg5ZGX6+BFDABM1WEsEIYy+GCBBwAahAOCg4ABfPD8TgwLGiEAAawisLiShIWBQ5FIcAIWl0yyYRhAlOpQhETAAbh5KBAVFw0Gy0ByuTyQHydHoQEKRWwaXSmAFgmFmRUFdRPJptALEKQOBkbIaQmAYab4NdiKwjAB9L2UMByH0ACkyHFYeFs-zQ4cMDMikYAlG6OtVfNQqLpA6x7CApNBHr0XG4PN4-XIZRxKAAvGA4yJyIJGSPwIzASPkxtgHGxpst7tNNDk7Pxqruk5GMBYL3-PFoYMwUOJ67VNN+jCB7MuuGWdTjurTiYKocJZM+D1GBgwKf9CZz0Ph-6Lk8plcZjcmrc7i+N6+IgDkAFI0F-BRsyMf9v0sYcwFHT1gjmS992WWcQzDRtvnvNF7wBR8U1TdM1zfcoP1GOD5ggmcjAAoDwyo38OxxWiQK1cDAwgdDG0wxtsKgmDzx6L0PVeNcUPvJogV-QT7l-HDcKMF8CJAVFRiCDIjClUlekA0DwIfY9qjPKB7hoLgBJee5kPnVD-nY-40XEySLiRX9RMBeyzMctFpKTWS5Pw9cQAAcR3RC2jAqMwvosLtKMVimhsppOP+bil14qBPC9JkiMIW9UP0SNo30PtrBk3D5MzQiWSMbdRh7Vt+3bCBOyMIq0GbYAWsHEAoJ8uYME5DpswACXnDg6gAdRiDhCGzYUqV1MVYANQInWJKhZXlBRzUtfldEFYUAF0CGIKgJRrPxlAAKxgUg9AwcgyQIZQ1AwQkYHINB6EYRAAFYFAABgUb5hSAA" width="100%" height="600"></iframe>