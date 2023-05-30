# Robot Framework Style Guide

## Purpose

This style guide is a community driven set of sensible rules to write your Robot Framework code.

As a starting point the existing standards from [Robot Framework](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#getting-started) user guide, [Robocop](https://github.com/MarketSquare/robotframework-robocop) and [Robotidy](https://robotidy.readthedocs.io/en/stable/).

## Robocon 2022 Presentation

[Robot Framework is not ...](https://youtu.be/Mpt_4MItha0)

## Contributors

Guido Demmenie, Mannana Koberidze, Kelby Stine

### Special Thanks To

Václav Fuksa, Many Kasiriha, Bartlomiej Hirz, Mateusz Nojek, René Rohner, Miikka Solmela

### We are always looking for contributors

- We meet up once every two weeks to talk about style guide topics
- Reach out to any one of us on the Slack channels

---

## Basic Rules and Guidelines

Here are some good basic guidelines for formatting your Robot Framework codes. As these are guidelines, use your best judgment in cases not covered by these recommendations.

- Separate pieces of the data, such as keywords and their arguments, with four (4) spaces.

- Robot and Resource file section order:

```robot
*** Comments ***

*** Settings ***

*** Variables ***

*** Test Cases / Tasks ***
(not available in resource files)

*** Keywords ***
```

- Keywords within resource files should be alphabetized.
- The recommended minimum line length is 120.
- It is reasonable to split a variable definition across multiple lines when it exceeds the recommended line length, or for the better readability of the code. See [Dividing data to several rows](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-data-syntax)
- Variable Syntax from the user guide [variable-priorities-and-scopes](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#variable-priorities-and-scopes)

  - It is recommended to use capital letters with all global variables.
  - Variable Syntax caps for global, suite, test; lower for everything args and local
  - Since these variables can be considered global in the test suite where they are used, it is recommended to use capital letters also with them.
  - Also variables in the test case scope are to some extend global. It is thus generally recommended to use capital letters with them too.
  - It is recommended to use lower-case letters with local variables.
- Keyword syntax should be capital cased. (i.e. `This Keyword Is Capital Cased`)

---

Version 0.1a

---
