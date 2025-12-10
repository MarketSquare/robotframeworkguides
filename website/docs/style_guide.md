---
sidebar_position: 5
---

# Style Guide

Version 0.10b

## Introduction

### Purpose

This style guide is a community-driven set of sensible rules to write your Robot Framework code.

As a starting point, use the existing standards from
[Robot Framework](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#getting-started) user guide and [Robocop](https://robocop.dev).

### Robocon 2022 Presentation

<iframe width="560"
        height="315"
        src="https://www.youtube.com/embed/Mpt_4MItha0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
</iframe>

### Contributors

Guido Demmenie, Manana Koberidze, Kelby Stine

#### Special Thanks To

Václav Fuksa, Many Kasiriha, Bartłomiej Hirsz, Mateusz Nojek, René Rohner, Miikka Solmela

#### We are always looking for contributors

- If you have feedback, please:
  - Reach out to any one of us on the RobotFramework Slack channel: `#style-guide`
  - Create an issue on [robotframework-style-guide](https://github.com/MarketSquare/robotframework-style-guide)
- We meet up once every two weeks to talk about style guide topics

For more info go to our repository: [MarketSquare/robotframework-style-guide](https://github.com/MarketSquare/robotframework-style-guide)

---

## Vertical Order

Recommended approaches to ordering `.robot` and `.resource` files.

Vertical order refers to the recommended order of settings, sections, variables, keywords.

---

### Sections

User Guide Reference: [Test Data Section](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-data-sections)

<Tabs>
  <TabItem  value="tests" label="Tests">

```robot
*** Comments ***


*** Settings ***


*** Variables ***


*** Test Cases ***


*** Keywords ***
```

  </TabItem>
  <TabItem  value="tasks" label="RPA">

```robot
*** Comments ***


*** Settings ***


*** Variables ***


*** Tasks ***


*** Keywords ***
```

  </TabItem>
</Tabs>

---

### Settings

User Guide Reference: [Settings Section](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#setting-section-1)

<Tabs>
  <TabItem  value="tests" label="Tests">

```robot
*** Settings ***
Documentation
Metadata

Library    BuiltIn
Library    3rd Party
Library    Custom
Resource
Variables

Suite Setup
Suite Teardown
Test Setup
Test Teardown
Test Template
Test Timeout

Test Tags
```

  </TabItem>
  <TabItem  value="tasks" label="RPA">

```robot
*** Settings ***
Documentation
Metadata

Library    BuiltIn
Library    3rd Party
Library    Custom
Resource
Variables

Suite Setup
Suite Teardown
Task Setup
Task Teardown
Task Template
Task Timeout

Task Tags
```

  </TabItem>
</Tabs>

For easier navigation, libraries in each group can be sorted alphabetically.
Additionally, extra new lines can be used to separate the builtin, 3rd party and custom libraries.

```robot
*** Settings ***
...
Library    BuiltIn
Library    Collections
Library    DateTime
Library    OperatingSystem

Library    Browser
Library    JSONLibrary
Library    SSHLibrary

Library    Acustom
Library    Bcustom
Library    Ccustom
Library    Dcustom
...
```

---

### Variables

Simple variables (scalar, list, dictionary) variables should be listed first.
Composite variables (variables composed of other variables) should be listed after simple variables.

```robot
*** Variables ***
${VARIABLE}  This is a Variable
${COMPOSITE VARIABLES}  ${VARIABLE} with other variables.

```

---

### Test Cases Or Tasks

User Guide Reference: [Test Case Section](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-case-section)

```robot
Test Case
    [Documentation]
    [Tags]
    [Timeout]
    [Setup]
    [Template]
    Static Variable Assignments
    Keyword Calls
    Verification Keyword Call
    [Teardown]
```

---

### Keyword

User Guide Reference: [Keyword Section](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#keyword-section-1)

```robot
Keyword
    [Documentation]
    [Tags]
    [Arguments]
    [Timeout]
    [Setup]
    Static Variable Assignments
    Keyword Calls
    [Teardown]
```

#### Keywords - Best Practices

It is a good idea to put static variable assignments before keyword calls.

```robot
Keyword With Static Variables
    [Arguments]    ${argument}
    ${static variable}             Set Variable               This is a static variable.
    Set Local Variable             ${other static variable}   Another way to set a static variable.
    ${dynamic variable}            Catenate                   SEPARATOR=${SPACE}    ${static variable}                             ${other static variable}    ${argument}
    ${another dynamic variable}    Evaluate                   $static variable.upper()
    Log To Console                 ${dynamic variable}
    Should Not Be Equal            ${static variable}         ${other static variable}
```

#### Keyword Organization

To make keyword search within a resource file easier, alphabetize your keywords. Some IDEs have an outline sidebar
(i.e. VSCode) and by alphabetizing the keywords they appear in the side menu in the same way.

## Vertical Spacing

These are the recommended vertical space guidelines for `.robot` and `.resource` files.

:::note

- The guidelines of larger sections will supersede the guidelines of the subsections.
- Vertical White Space
: Any line that contains no characters.
- Commented lines are not considered white space.

:::

---

### Sections

#### Spacing After The Section Header Line

> There should be no space immediately after each section header line.

#### Spacing After Sections

> There should be 2 lines of white space after the last line of each section, except the last section of the file.
> The last section of a file should have 1 line of white space.

##### Example Of Section Header And Section Spacing

<Tabs>
  <TabItem  value="tests" label="Tests">

```robot
    *** Comments ***
    Comments


    *** Settings ***
    Documentation


    *** Variables ***
    ${VARIABLE}    a variable


    *** Test Cases ***
    Test Case


    *** Keywords ***
    Keyword
```

  </TabItem>
  <TabItem  value="tasks" label="RPA">

```robot
    *** Comments ***
    Comments


    *** Settings ***
    Documentation


    *** Variables ***
    ${VARIABLE}    a variable


    *** Tasks ***
    Tasks


    *** Keywords ***
    Keyword
```

  </TabItem>
</Tabs>

---

### Settings

#### Spacing Between Settings Within The Settings Section

> It is recommended to allow 1 line of white space between common lines of settings.

##### Example Of Settings Section Vertical Spacing

<Tabs>
  <TabItem  value="tests" label="Tests">

```robot
    *** Settings ***
    Documentation
    Metadata

    Library
    Resource
    Variables

    Suite Setup
    Suite Teardown
    Test Setup
    Test Teardown
    Test Template
    Test Timeout

    Default Tags
    Test Tags
```

  </TabItem>
  <TabItem  value="tasks" label="RPA">

```robot
    *** Settings ***
    Documentation
    Metadata

    Library
    Resource
    Variables

    Suite Setup
    Suite Teardown
    Task Setup
    Task Teardown
    Task Template
    Task Timeout

    Default Tags
    Task Tags
```

  </TabItem>
</Tabs>

#### Spacing Between Settings Within A Test Case, Task Or Keyword

> No lines of white space should exist between the settings of a Test Case or Task or Keyword.

---

### Variables

#### Spacing Between Variables In The Variables Section

There should be no lines of white space between variables within the Variables section.

---

### Test Cases Or Tasks

#### Spacing After Test Cases Or Tasks

> There should be 1 line of white space after each Test Case or Task.

#### Spacing Between Code Blocks Within Test Cases Or Tasks

> Occasionally Test Cases or Tasks can be grouped in subsections of logical code blocks. In these instances it is acceptable to have 1 space between these code blocks.

#### Spacing After Templated Test Cases

> There should be 1 line of white space after each Templated Test Case.

#### Spacing Between Templated Test Case Data

> No lines of white space should exist between lines of test data in Templated Tests.

---

### Keywords

#### Spacing After Keywords

> There should be 1 line of white space after the last line in a keyword code block.

#### Spacing Between Keyword Calls

> In most cases there should be no white space between keyword calls.

#### Spacing Between Code Blocks Within Keyword Calls

> Occasionally keywords can be grouped in subsections of logical code blocks. In these instances it is acceptable to have 1 space between these code blocks, but no more than 1 space.

#### Spacing Of Line Continuations

> No lines of white space should exist between lines of code using line continuation (...) syntax.

#### Examples

Key to examples:

> ① Two spaces between sections\
② One space between Tests/Tasks\
③ No space in the settings section of Tests/Tasks or Keywords\
④ No space after the settings section of Tests/Tasks or Keywords\
⑤ No spaces between template Test/Task data lines\
⑥ One space Between Keywords\
⑦ No space between continuation lines\
⑧ One space for separating code blocks\
⑨ One space at the very end of the file

##### Example Robot File Vertical White Spacing

<Tabs>
  <TabItem  value="tests" label="Tests">

```robot
*** Comments ***
This is the comments section
①

*** Settings ***
Documentation       This is documentation
⑦ ...               robot -d Results -i example-tag Tests

Library             Collections
Resource            ../Resources/ExampleResource.resource

Suite Setup         Suite Setup Keywords
Suite Teardown      Suite Teardown Keywords
Test Setup          Test Setup Keywords
Test Teardown       Test Teardown Keywords

Test Tags           example-tag


*** Variables ***
${EXAMPLE SCALAR VARIABLE}          This is a suite scope scalar variable
@{EXAMPLE LIST VARIABLE}            This    is    a    suite    scope    list    variable
&{EXAMPLE DICTIONARY VARIABLE}      This=is a
⑦ ...                               suite=scope
...                                 dictionary=variable
①

*** Test Cases ***
An Example Test Case
③   [Documentation]    Test documentation
    [Tags]    standard-example-tag
④   ${RESULT LIST}    This Is A Complex Keyword With Sections    ${EXAMPLE SCALAR VARIABLE}
    Log To Console    ${RESULT LIST}
②
A More Complex Test Case
③   [Documentation]    Test documentation
    [Tags]    standard-example-tag
    [Setup]    Set Test Variable    ${EXPECTED LENGTH}    2
    ${IS LARGER THAN FOUR}    Create List
⑧
    ## Adding vertical white space can be used to separate test code blocks
    FOR    ${item}    IN    @{EXAMPLE LIST VARIABLE}
        IF    len($item)> 4
            This Is A Complex Keyword With Sections    ${item}
            Append To List    ${IS LARGER THAN FOUR}    ${item}
        END
    END
    Length Should Be    ${IS LARGER THAN FOUR}    ${EXPECTED LENGTH}
②
An Example Templated Test
③   [Documentation]    Templated test documentation.
    [Tags]    templated-example-tag
    [Template]    This Is A Complex Keyword With Sections
⑤   ${EXAMPLE DICTIONARY VARIABLE}[This]
    ${EXAMPLE DICTIONARY VARIABLE}[suite]
    ${EXAMPLE DICTIONARY VARIABLE}[dictionary]
①

*** Keywords ***
Suite Setup Keywords
    [Documentation]    A keyword for setting up a suite
    Log To Console    Setting up ${SUITE NAME} keywords
⑥
Suite Teardown Keywords
    [Documentation]    A keyword for tearing down a suite
    Log To Console    Tearing down suite keywords
⑥
Test Setup Keywords
    [Documentation]    A keyword for setting up a test
    Log To Console    Setting up ${TEST NAME} keywords
⑥
Test Teardown Keywords
    [Documentation]    A keyword for tearing down a test
    Log To Console    Tearing down test keywords
⑨
```

  </TabItem>
  <TabItem  value="tasks" label="RPA">

```robot
*** Comments ***
This is the comments section
①

*** Settings ***
Documentation       This is documentation
⑦ ...               robot -d Results -i example-tag Tasks

Library             Collections
Resource            ../Resources/ExampleResource.resource

Suite Setup         Suite Setup Keywords
Suite Teardown      Suite Teardown Keywords
Task Setup          Task Setup Keywords
Task Teardown       Task Teardown Keywords

Task Tags           example-tag


*** Variables ***
${EXAMPLE SCALAR VARIABLE}          This is a suite scope scalar variable
@{EXAMPLE LIST VARIABLE}            This    is    a    suite    scope    list    variable
&{EXAMPLE DICTIONARY VARIABLE}      This=is a
⑦ ...                               suite=scope
...                                 dictionary=variable
①

*** Tasks ***
An Example Task
③   [Documentation]    Task documentation
    [Tags]    standard-example-tag
④   ${RESULT LIST}    This Is A Complex Keyword With Sections    ${EXAMPLE SCALAR VARIABLE}
    Log To Console    ${RESULT LIST}
②
A More Complex Task
③   [Documentation]    Task documentation
    [Tags]    standard-example-tag
    [Setup]    Set Task Variable    ${EXPECTED LENGTH}    2
    ${IS LARGER THAN FOUR}    Create List
⑧
    ## Adding vertical white space can be used to separate task code blocks
    FOR    ${item}    IN    @{EXAMPLE LIST VARIABLE}
        IF    len($item)> 4
            This Is A Complex Keyword With Sections    ${item}
            Append To List    ${IS LARGER THAN FOUR}    ${item}
        END
    END
    Length Should Be    ${IS LARGER THAN FOUR}    ${EXPECTED LENGTH}
②
An Example Templated Task
③   [Documentation]    Templated task documentation.
    [Tags]    templated-example-tag
    [Template]    This Is A Complex Keyword With Sections
⑤   ${EXAMPLE DICTIONARY VARIABLE}[This]
    ${EXAMPLE DICTIONARY VARIABLE}[suite]
    ${EXAMPLE DICTIONARY VARIABLE}[dictionary]
①

*** Keywords ***
Suite Setup Keywords
    [Documentation]    A keyword for setting up a suite
    Log To Console    Setting up ${SUITE NAME} keywords
⑥
Suite Teardown Keywords
    [Documentation]    A keyword for tearing down a suite
    Log To Console    Tearing down suite keywords
⑥
Task Setup Keywords
    [Documentation]    A keyword for setting up a task
    Log To Console    Setting up ${TASK NAME} keywords
⑥
Task Teardown Keywords
    [Documentation]    A keyword for tearing down a task
    Log To Console    Tearing down task keywords
⑨
```

  </TabItem>
</Tabs>

##### Example Resource File Vertical Spacing

```robot
*** Settings ***
Documentation       Resources follow the same rules as test cases and tasks

Library             String
Library             Collections
①

*** Variables ***
${EXAMPLE RESOURCE SCALAR}      This is a really really really really really really really
⑦ ...                          really really really really really really really long string.
①

*** Keywords ***
A Small Keyword
    [Documentation]    Small keyword documentation.
    ${small variable}    Catenate    SEPARATOR=    Such    a    small    keyword
    RETURN    ${small variable}
⑥
This Is A Complex Keyword With Sections
③   [Documentation]    Complex keyword documentation.
    [Arguments]    ${an argument}
    ${local list}    Create List
    ${get small value}    A Small Keyword
    ${words}    Split String    ${get small value}
    FOR    ${word}    IN    @{words}
        ${characters}    Split String To Characters    ${word}
⑧
        ## Insert a vertical whitespace here to separate logical sections within a keyword.
        FOR    ${character}    IN    @{characters}
            IF    $character in 'aeiou'
                Append To List    ${local list}    ${character} ${an argument}
            END
        END
    END
    RETURN    ${local list}
⑨
```

---

## Horizontal Spacing

Separation of tokens should be **4 spaces** as described in the recommended file format: [space separated format](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#space-separated-format).

#### Separation

- **Separator** >= 4 spaces represented by `····` in the following examples.

Separation thus is the vertical space between tokens, where tokens are any keywords, variables, constructs.

<Tabs>
  <TabItem  value="tests" label="Tests">

```robot
*** Test Cases ***
My Test
    Keyword One····argument1····argument2
```

  </TabItem>
  <TabItem  value="tasks" label="RPA">

```robot
*** Tasks ***
My Task
    Keyword One····argument1····argument2
```

  </TabItem>
</Tabs>

#### Indentation

- **Indentation** n time 4 spaces (where n is the level of indentation) and n never exceeds 5, hence nesting depth cannot exceed 4 steps in a keyword.

*Example with additional vertical lines for visual clarification: where n == 4 because the keyword also counts in the nesting.*

```robot
*** Keywords ***
My Nested Keyword
|····FOR    ${i}    IN RANGE    10
|····|····IF    $i % 2
|····|····|····IF   $i > 5
|····|····|····|····Log    Odd number over 5: ${i}
|····|····|····END  |
|····|····END  |    |
|····END  |    |    |
|    |    |    |    |
0    1    2    3    4
```

---

### Generic

#### Line Length

> A line length of 120 characters is recommended. [Robocop: #line-too-long](https://robocop.dev/stable/rules_list/#len08-line-too-long)

#### Trailing Whitespaces

> Trailing whitespaces should be avoided. [Robocop: #trailing-whitespace](https://robocop.dev/stable/rules_list/#spc01-trailing-whitespace)

---

### Settings

#### Indentation Within Settings Section

Indentations should only be added when needed.

The `*** Settings ***` section should always be left aligned without any indentation [Robocop: #suite-setting-not-left-aligned](https://robocop.dev/stable/rules_list/#spc16-suite-setting-not-left-aligned)

```robot
*** Settings ***
Library      Collections
Resource     data.resource
Variables    vars.robot
```

#### Separation Within Settings Section

Arguments to settings should be aligned according to the longest setting added with 4 spaces. [Robocop format: #alignsettingssection](https://robocop.dev/stable/formatter/formatters/AlignSettingsSection/)

Arguments to Libraries should be aligned if there are multiple libraries that have arguments on importing.
After the first argument to libraries, all other arguments should either:

- be separated with 4 spaces
- be aligned in columns

##### Separated With 4 Spaces

```robot
*** Settings ***
Library       String
Library       DataDriver    my_data_file.csv    dialect=UserDefined    delimiter=.
Library       Telnet    timeout=3s    newline=CLRF    encoding=UTF-8
Resource      ${resourcedir}/mykeywords.resource
Resource      ${resourcedir}/myotherkeywords.resource
Test Tags     mytag
```

##### Aligned In Columns

```robot
*** Settings ***
Library       String
Library       DataDriver    my_data_file.csv    dialect=UserDefined    delimiter=.
Library       Telnet        timeout=3s          newline=CLRF           encoding=UTF-8
Resource      ${resourcedir}/mykeywords.resource
Resource      ${resourcedir}/myotherkeywords.resource
Test Tags     mytag
```

---

### Variables

#### Indentation Within Variables Section

The `*** Variables ***` section should always be left aligned without any indentation [Robocop: #variable-not-left-aligned](https://robocop.dev/stable/rules_list/#spc14-variable-not-left-aligned)

```robot
*** Variables ***
${VAR}     my variable
${VAR2}    2
```

---

### Test Cases, Tasks And Keywords

#### Indentation Within Test Cases, Tasks And Keywords Section

The test case, task and keyword names should always start at the first character on a line. Test steps, task steps and
keywords called from within keyword should be indented.

<Tabs>
  <TabItem  value="tests" label="Tests">

```robot
*** Test Cases ***
My First Test Case
    Test Step One
    ${myvar}    Test Step Two That Returns A Value
```

  </TabItem>
  <TabItem  value="tasks" label="RPA">

```robot
*** Tasks ***
My First Task
    Task Step One
    ${myvar}    Task Step Two That Returns A Value
```

  </TabItem>
</Tabs>

``` robot
*** Keywords ***
Test Step One
    Some Keywords Being Called
    Log    Some Message

Test Step Two That Returns A Value
    RETURN  some string
```

#### Block Indentation

Blocks like `IF`, `WHILE`, `FOR` and `TRY/EXCEPT` should always be indented such that the keywords that are run within
the loop have to be indented from the lines that start and end the block. [Robocop: #bad-indent](https://robocop.dev/stable/rules_list/#spc08-bad-indent)

#### Examples From The User Guide

[IF/ELSE](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#if-else-syntax)

```robot
*** Test Cases ***
Example
    IF    $rc > 0
        Positive keyword
    ELSE IF    $rc < 0
        Negative keyword
    ELSE IF    $rc == 0
        Zero keyword
    ELSE
        Fail    Unexpected rc: ${rc}
    END
```

[WHILE](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#while-loops)

```robot
*** Test Cases ***
Limit as iteration count
    WHILE    True    limit=100
        Log    This is run 100 times.
    END
```

[FOR](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#for-loops)

```robot
*** Test Cases ***
Example
    FOR    ${animal}    IN    cat    dog
        Log    ${animal}
        Log    2nd keyword
    END
    Log    Outside loop

Second Example
    FOR    ${var}    IN    one    two    ${3}    four    ${five}
    ...    kuusi    7    eight    nine    ${last}
        Log    ${var}
    END
```

[TRY/EXCEPT](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#try-except-syntax)

```robot
*** Test Cases ***
First example
    TRY
        Some Keyword
    EXCEPT    Error message
        Error Handler Keyword
    END
    Keyword Outside
```

---

### Comments

In comments there should be a space between the `#` and the actual comment. [Robocop: #missing-space-after-comment](https://robocop.dev/stable/rules_list/#com02-missing-space-after-comment)

Avoid using comments; instead, make your code self-explanatory or use the `[Documentation]`.
The only valid use of comments is for TODO's that should be fixed soon.

If you use comments:

- Comments should be aligned with the block they belong to.
- Inline comments have one indentation before the `#`

```robot
*** Keywords ***
## Comment about Some Keyword here
Some Keyword
    Called Keyword One
    ## Comment about Called Keyword Two here
    Called Keyword Two    ## TODO fix weird behaviour.
```

## Line Continuation

---

### Arguments

Recommended use of line continuation when having more than one argument as described in the Robot Framework User Guide:
[User keyword arguments](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#user-keyword-arguments).

General guidelines:

- Try limiting the number of arguments to 5 ([Robocop: #too-many-arguments](https://robocop.dev/stable/rules_list/#len07-too-many-arguments)).
- One argument per continuation line.
- Continuation line should not be indented ([Robocop: #misaligned-continuation](https://robocop.dev/stable/rules_list/#spc11-misaligned-continuation)).
- Line continuation character (`...`) should be placed at the beginning of the new row ([Robocop: #misaligned-continuation-row](https://robocop.dev/stable/rules_list/#spc11-misaligned-continuation-row)).
- No empty lines between arguments ([Robocop: #empty-lines-in-statement](https://robocop.dev/stable/rules_list/#spc13-empty-lines-in-statement)).
- No empty continuation lines between arguments (i.e. lines containing only `'...'`) ([Robocop: #too-many-arguments](https://robocop.dev/stable/rules_list/#len07-too-many-arguments)).
- If many arguments are required, consider representing them as a list or a dictionary.

#### Line Continuation For Arguments In Keyword Definition

> In Keywords, the very first argument should be placed on the same line as `[Arguments]` setting. Every other argument
should be placed on a new continuation line and aligned with the argument on the previous line.

#### Required Arguments

Required arguments are placed on the continuation lines:

```robot
*** Keywords ***
Custom Keyword With Five Required Arguments
    [Arguments]    ${name}
    ...            ${surname}
    ...            ${street}
    ...            ${block}
    ...            ${apartment}
    Do Something
```

#### Optional Arguments

Optional arguments, due to having a default value, follow the same line continuation rules as required arguments:

```robot
*** Keywords ***
Custom Keyword With Various Optional Arguments
    [Arguments]    ${first arg}=the first argument
    ...            ${second arg}=${123}
    ...            ${third arg}=${some list}
    ...            ${fourth arg}=${some dict}
    ...            ${fifth arg}=the last argument
    Do Something
```

#### Required And Optional Arguments Together

Here, all required arguments are listed first, and optional arguments with default values afterwards (please note that
this is a requirement within Robot Framework).

Each argument is placed on a single continuation line, as before:

```robot
*** Keywords ***
Custom Keyword With Required And Optional Arguments
    [Arguments]    ${argument1}
    ...            ${argument2}
    ...            ${argument3}=this is a default value
    ...            ${argument4}=9999
    ...            ${argument5}=${EMPTY}
    Do Something
```

#### Embedded Arguments

Unlike required and optional arguments, embedded arguments cannot be split over lines, since
in this case, arguments become part of the Keyword name.

In the below example, the Keyword contains two embedded arguments, `${country}` and `${number}`.
The entire Keyword has to be on a single line:

```robot
*** Keywords ***
Get Capital Of "${country}" And First "${number}" Cities With Biggest Population
    Do Something
```

#### Line Continuation For Arguments In Test Cases Or Tasks

In Test Cases, the first argument should be placed on the same line as the Keyword to which it belongs.
Every other argument should be placed on a new continuation line and separated from the continuation character
by exactly four spaces. The following arguments should be aligned with the argument on the previous line.
This is different from the argument formatting in the Keywords definition.
The reason is that test cases might include several Keywords with arguments, and overly sparse
formatting may result in difficult to read test cases.

EXAMPLES

```robot
*** Test Cases ***
Test Case With Many Keywords And Arguments
    Do Something
    Use Keyword With Five Arguments    name=Name
    ...    surname=Surname
    ...    street=Somestreet 123
    ...    block=45
    ...    apartment=6
    Do Something Else
    Use Another Keyword With Arguments    123
    ...    abcdef
    ...    ${True}
    ...    @{mylist}
    Do A Lot Of Stuff
    More Stuff
    Use One More Keyword With Various Arguments    abc
    ...    123
    ...    optional arg=12345
    ...    another optional arg=Hello
    Use Keyword With "two" Embedded Arguments And "three" Required Arguments    first arg
    ...    second arg
    ...    third arg
    Do Final Steps
```

If Test Cases include Keywords with relatively short names and with only a few arguments,
then arguments can be accommodated on a single line if the maximum length of the line is not
exceeded. Mixing single-line and vertical listing should be avoided within the same test case,
and either one or the other should be chosen:

```robot
*** Test Cases ***
Test Case With Compact Contents
    Log To Console    message=Hello    stream=STDERR
    Sleep    10s    reason=Wait
    Catenate    SEPARATOR=    Robot    Framework
```

---

### Variables

It is reasonable to split a variable definition across multiple lines when it exceeds the recommended line length,
or for the better readability of the code.

Below are examples for the different variable types in different sections of the test and resources files.

#### Variables Section Line Continuation

General guidelines:

- Line continuation character (`...`) should be placed at the beginning of the new row,
that is, not at the end of the previous row.
- No empty continuation lines (lines containing only `'...'`)
- Every new continuation line should be aligned with the previous line
- Continuation line should not be indented

##### Scalars

Scalar variable in `Variables` section on a single line:

```robot
*** Variables ***
${STRING}    This string has multiple sentences. They are all on the same line. It may not look nice in the code because the line is too long.
```

Scalar variable in `Variables` section split into several lines:

```robot
*** Variables ***
${STRING}    This string has multiple sentences.
...          They were all on the same line.
...          It did not look nice in the code
...          because the line was too long.
...          Now it is split in rows.
```

Mix of line continuation and a new line (note use of newline character `\n`):

```robot
*** Variables ***
${STRING}    This string has multiple sentences.
...          This sentence will be printed on the same row
...          in the HTML test log.
...          And this line too.
...          Next line will be printed \n
...          on a new row.
```

###### Lists

List variable in `Variables` section on a single line:

```robot
*** Variables ***
@{LONG LIST}       apple    banana    peach    grape    avocado    kiwi    some very long name of the fruit which exceeds the recommended line length
```

It is recommended to either accommodate all items on a single line or to list each item on a new line:

```robot
*** Variables ***
@{SHORT LIST}    apple    banana    peach    grape

@{SHORT LIST}    apple
...              banana
...              peach
...              grape

@{LONG LIST}     apple
...              banana
...              peach
...              grape
...              avocado
...              kiwi
...              some very long name of the fruit which exceeds the recommended line length
```

Please note that the item values of the iterable cannot be split using line continuation character. Therefore,
it is not possible to divide the last item in the above example with the ellipses (`...`).

In this case, it is recommended to define the item separately:

```robot
*** Variables ***
${LONG ITEM}    some very long name of the
...             fruit which exceeds
...             the recommended line length

@{LIST}         apple
...             banana
...             peach
...             grape
...             avocado
...             kiwi
...             ${LONG ITEM}
```

###### Dictionaries

Dictionary variable in `Variables` section on a single line:

```robot
*** Variables ***
&{LONG DICT}     name=robot    age=14    occupation=framework    version=latest    address=https://robotframework.org/    documentation=This text is so long that it does not fit on one line
```

It is recommended to place all key-value pairs of a dictionary
either on a single line or each on a new line:

```robot
*** Variables ***
&{SHORT DICT}    name=robot    age=14    occupation=framework

&{SHORT DICT}    name=robot
...              age=14
...              occupation=framework

&{LONG DICT}     name=robot
...              age=14
...              occupation=framework
...              version=latest
...              address=https://robotframework.org/
...              documentation=This text is so long that it does not fit on one line
```

Similarly to the list items, a key-value pair of the dictionary cannot be split using the line continuation character.
In this case, it is recommended to define the value separately:

```robot
*** Variables ***
${LONG VALUE}    This text is so long
...              it cannot be fit on one line

&{DICT}          name=robot
...              age=14
...              occupation=framework
...              version=latest
...              address=https://robotframework.org/
...              documentation=${LONG VALUE}
```

#### Keywords Section

General guidelines:

- Line continuation character (`...`) should be placed at the beginning of the new row,
that is, not at the end of the previous row.
- No empty continuation lines (lines containing only `...`).
- For every variable definition containing keywords (e.g., `Set Variable`, `Catenate`, `Create Dictionary`),
continuation line should be aligned with the beginning of the first item for the iterables, and with the value
definition for scalars.
- Continuation line should not be indented

##### Scalar Variable Creation

Definition on a single line:

```robot
*** Keywords ***
My Keyword
    ${SCALAR}    Set Variable    This sentence is really, really, really, really, really, really, really long
```

Definition split across multiple lines (note use of built-in keyword [Catenate](http://robotframework.org/robotframework/latest/libraries/BuiltIn.html#Catenate.).
This is exception for scalars in the `Keywords` and `Test Cases` sections):

```robot
*** Keywords ***
My Keyword
    ${SCALAR}    Catenate    This sentence is really,
    ...                      really, really, really, really,
    ...                      really, really long
```

##### List Variable Creation

Definition on a single line:

```robot
*** Keywords ***
My Keyword
    ${LIST}    Create List    Mercury    Venus    Earth    Mars    Jupiter    Saturn    Uranus    Neptune
```

Definition on multiple lines:

```robot
*** Keywords ***
My Keyword
    ${LIST}    Create List    Mercury
    ...                       Venus
    ...                       Earth
    ...                       Mars
    ...                       Jupiter
    ...                       Saturn
    ...                       Uranus
    ...                       Neptune
```

##### Dictionary Variable Creation

Definition on a single line:

```robot
*** Keywords ***
My Keyword
    &{DICTIONARY}    Create Dictionary    a=1    b=${2}    c=${3}    d=some long string    e=${SOME LIST}    f=pwoirpworuwruopwuroiewr
```

Definition split across multiple lines:

```robot
*** Keywords ***
My Keyword
    &{DICTIONARY}    Create Dictionary    a=1
    ...                                   b=${2}
    ...                                   c=${3}
    ...                                   d=some long string
    ...                                   e=${SOME LIST}
    ...                                   f=pwoirpworuwruopwuroiewr
```

##### Assigning Multiple Variables

Definition on a single line:

```robot
*** Keywords ***
My Keyword With Multiple Variable Assignment
    ${SCALAR1}    ${SCALAR2}    ${SCALAR3}=    Set Variable    First long item    Second long item    Third long item
```

Definition split on multiple lines:

```robot
*** Keywords ***
My Keyword With Multiple Variable Assignment
    ${SCALAR1}    ${SCALAR2}    ${SCALAR3}    Set Variable    First long item
    ...                                                       Second long item
    ...                                                       Third long item
```

#### Test Cases Or Tasks Section

In test cases, line continuation follows the same guidelines, as in the `Keywords` section.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Variables

Recommended methods of using and naming variables

Variables are the life blood of Robot Framework's flexibility.

Understanding variable scope and proper naming are important for managing them in a project.

This is also an area where you will need to understand the stakeholders involved in the project.

If your project participants are less technical, more syntactic sugar may be necessary than if a project is managed
mostly by more technical roles (developers, devops, etc...) then more code-like syntax might be better.

***In either case choose the style that best fits your project and keep to that decision.***

---

### Variable Scope And Casing

Adhering to casing rules provides a convenient way of identifying the scope of a variable.

- Variable Syntax from the user guide [variable-priorities-and-scopes](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#variable-priorities-and-scopes)

| Variable Scope                               | Syntax                               |
|----------------------------------------------|:------------------------------------:|
|**GLOBAL** variables use upper-case letters.  | `${UPPER CASED}` or `${UPPER_CASED}` |
|**SUITE** variables use upper-case letters.   | `${UPPER CASED}` or `${UPPER_CASED}` |
|**TEST** variables use upper-case letters.    | `${UPPER CASED}` or `${UPPER_CASED}` |
|**LOCAL** variables use lower-case letters.   | `${lower cased}` or `${lower_cased}` |
|Keyword arguments use lower-case letters.     | `${lower cased}` or `${lower_cased}` |

#### Declaring Variable Scope Properly

It is advised to not reuse GLOBAL or SUITE variable names in lower scoped contexts.

*Example:*

Robot Framework ignores casing therefore `${I AM A VARIABLE}` is the same as `${i am a variable}`.

```robot
*** Variables ***
${I AM A VARIABLE}    This is a SUITE scoped variables


*** Test Cases ***
Variable Casing Test
    [Documentation]    Robot Framework ignores casing.
    Log To Console    ${I AM A VARIABLE}
    Should Be Equal     ${I AM A VARIABLE}    ${i am a variable}

Same Variable Different Scope Test
    [Documentation]    The SUITE variable is overwritten by an argument then TEST scoped variable of same name.
    A Keyword With Arguments    This will be printed.
    Should Not Be Equal     ${I AM A VARIABLE}    This is a SUITE scoped variables


*** Keywords ***
A Keyword With Arguments
    [Documentation]    The argument will take precedence then the SUITE level variable will be overwritten by a TEST scope variable.
    [Arguments]    ${i am a variable}
    Log To Console    ${i am a variable}
    Set Test Variable    ${i am a variable}
```

---

### Variable Assignment Syntax

There are two favored syntaxes for assigning a value to a variable:

<Tabs>
  <TabItem value="By Spacing Only" label="Style 1">

```robot
*** Variables ***
${VARIABLE}    value


*** Keywords ***
Variable Keyword
  ${variable}    Set Variable    value
  Log To Console    ${variable}
```

  </TabItem>
  <TabItem value="By '=' sign (syntactic sugar method)" label="Style 2">

```robot
*** Variables ***
${VARIABLE} =    Value


*** Keywords ***
Variable Keyword
  ${variable} =    Set Variable    Value
  Log To Console    ${variable}
```

  </TabItem>
</Tabs>

If you prefer using equals ('=') signs, then be sure that it is formatted `${var}·=····` where each `·` is a space.
The reason for a space immediately after a variable is to make the variable more readable.

```robot
*** Keywords ***
Setting Variables
    ${var}·=····Set Variable    good
    ${var}=····Set Variable    not great, but seen commonly
```

```robot
*** Keywords ***
Never Like This Ever
    [Documentation]    You will throw a syntax error!
    ${var}··=····Set Variable    do not do this
```

---

### Spaces Or Underscores Variables

Referring back to who will be involved with reading and understanding test cases, it may be best to use spaces instead of underscores.

In the user guide there are existing examples of this syntax [built-in-variables](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#built-in-variables)

Since Robot Framework treats spaces and underscores the same and in most cases not even necessary, each of these variable names is the same:

```robot
*** Variables ***
${VARIABLE_ONE}    same
${VARIABLE ONE}    same
${VARIABLEONE}     same
```

#### Using Variables With Spaces Within Python Code Blocks

If you are using variables containing spaces within python code blocks (Inline script, Evaluate keyword, python module, etc...) replace the space with an underscore.

  ```robot
  *** Keywords ***
  Python Syntax With Underscores
      [Argument]    ${argument variable}
      ${upper value}    Evaluate    $argument_variable.upper()
      RETURN    ${upper value}
  ```

  ```robot
  *** Keywords ***
  Python Inline Syntax With Underscores
      [Argument]    ${argument variable}
      RETURN    ${{$argument_variable.upper()}}
  ```

---

### Variables Within Settings Section

Variables can be used within the settings section.

They are useful for dynamic file paths and other values.

Typically, they are Suite or Global scoped variables [#section-variable-not-uppercase](https://robocop.dev/stable/rules_list/#name08-section-variable-not-uppercase) (i.e. Always UPPER CASED, UPPER_CASED).

These variables may come from the Command Line, Resource Files, Variable Files, or the current `*** Variables ***` section

It is a good idea to set a default value for a variable used in the `*** Settings ***` section to prevent import errors.

*Example:*

<Tabs>
  <TabItem value="With Spaces" label="style 1">

```robot
*** Settings ***
Resource     ${RESOURCE PATH}/Resource.resource
Variables    ${VARIABLES PATH}/Variables.yaml


*** Variables ***
${RELATIVE PATH}     ../../..
${RESOURCE PATH}     ${RELATIVE PATH}/Resources
${VARIABLES PATH}    ${RESOURCE PATH}/Variables
```

  </TabItem>
  <TabItem value="With Underscores" label="style 2">

```robot
*** Settings ***
Resource     ${RESOURCE_PATH}/Resource.resource
Variables    ${VARIABLES_PATH}/Variables.yaml


*** Variables ***
${RELATIVE_PATH}     ../../..
${RESOURCE_PATH}     ${RELATIVE_PATH}/Resources
${VARIABLES_PATH}    ${RESOURCE_PATH}/Variables
```

  </TabItem>
</Tabs>

---

### Variables Section

Variables declared within the `*** Variables ***` section are Suite level in scope. (i.e. Always UPPER CASED, UPPER_CASED)

Be sure to use the correct indicators of type of Variables:

- Scalar ($)
- List (@)
- Dictionary (&)

Consult the Style Guide Line Continuation Section in regard to how to handle the values of these types.

:::note

You can build variables in the  `*** Variables ***` section by combining previously assigned variables.

The order of the variable assignments is important.

:::

*Example:*

<Tabs>
  <TabItem value="Incorrect Order" label="style 1">

```robot
*** Variables ***
${RESOURCE PATH}     ${RELATIVE PATH}/Resources  # This line calls ${RELATIVE PATH} that has not been declared yet.
${VARIABLES PATH}    ${RESOURCE PATH}/Variables  # This line calls ${VARIABLES PATH} that has not been declared yet.
${RELATIVE PATH}     ../../..
```

  </TabItem>
   <TabItem value="Correct Order" label="style 2">

```robot
*** Variables ***
${RELATIVE PATH}     ../../..
${RESOURCE PATH}     ${RELATIVE PATH}/Resources
${VARIABLES PATH}    ${RESOURCE PATH}/Variables
```

  </TabItem>
</Tabs>

---

### Test Cases Or Tasks

Variables assigned within a test/task should be treated as Test Variables in scope. (i.e. Always UPPER CASED, UPPER_CASED)

The occasional exception would be if there are FOR LOOP or WHILE LOOP structures, then in those cases it would be acceptable.

*FOR LOOP and WHILE LOOP structures should be avoided in test cases.*

---

### Keywords

A majority of Keyword level variables will be local variables (i.e. lower cased, lower_cased).
But other scopes can be assigned using `BuiltIn keywords`, make sure you case variables according to how they are assigned.

<Tabs>
  <TabItem value="With Spaces" label="style 1">

```robot
*** Keywords ***
A Keyword of Variables
    [Documentation]     This keyword will create these variables:
    ...    ${TEST VARIABLE}
    ...    ${SUITE VARIABLE}
    ...    ${GLOBAL VARIABLE}
    [Arguments]    ${this is an argument}
    Set Local Variable            ${local variable}    use lower case
    ${assigned local variable}    Set Variable         use lower case also
    Set Test Variable             ${TEST VARIABLE}     USE UPPER CASE
    Set Suite Variable            ${SUITE VARIABLE}    USE UPPER CASE
    ${GLOBAL VARIABLE}            Create List          BETTER    USE    UPPER    CASE
    Set Global Variable           ${GLOBAL VARIABLE}
```

  </TabItem>
    <TabItem value="With Underscores" label="style 2">

```robot
*** Keywords ***
A Keyword of Variables
    [Documentation]     This keyword will create these variables:
    ...    ${TEST_VARIABLE}
    ...    ${SUITE_VARIABLE}
    ...    ${GLOBAL_VARIABLE}
    [Arguments]    ${this_is_an_argument}
    Set Local Variable            ${local_variable}    use lower case
    ${assigned_local_variable}    Set Variable         use lower case also
    Set Test Variable             ${TEST_VARIABLE}     USE UPPER CASE
    Set Suite Variable            ${SUITE_VARIABLE}    USE UPPER CASE
    ${GLOBAL_VARIABLE}            Create List          BETTER    USE    UPPER    CASE
    Set Global Variable           ${GLOBAL_VARIABLE}
```

  </TabItem>
</Tabs>

Treat keyword arguments as local variables for naming purposes.

If setting Suite and Global Variables within keywords from resource files.
Setting Test Variables should be reserved to test cases if at all possible.
In either case document non-local scoped variables.

---

### Special Cases

#### Variable Files

Assume variables declared within variable files to be at minimum SUITE in scope. (i.e. Always UPPER CASED, UPPER_CASED)

The examples given are using variables with spaces.

##### .resource Variable Files

Assume variables declared within the Variable section of a resource file to be at minimum SUITE in scope. (i.e. Always UPPER CASED, UPPER_CASED)

```robot
*** Variables ***
${STRING VARIABLE}    Hello I am a resource variable.
${INT VARIABLE}       ${42}
@{LIST VARIABLE}      one    two
&{DICT VARIABLE}      one=yksi    two=kaksi    with spaces=kolme
```

##### Python Variable Files

Assume variables declared within python variable files to be at minimum SUITE in scope. (i.e. Always UPPER CASED, UPPER_CASED)

Note that syntactically you cannot declare python variables with a space, but when you use them in Robot Framework, you can use a space.

Python libraries that declare variables are handled according to a use case.

```python
STRING_VARIABLE = "Hello I am a python variable."
INT_VARIABLE = 42
LIST_VARIABLE = ["one", "two"]
DICT_VARIABLE = {"one": "yksi", "two": "kaksi", "with spaces": "kolme"}
```

##### Yaml Variable Files

Assume variables declared within YAML variable files to be at minimum SUITE in scope. (i.e. Always UPPER CASED, UPPER_CASED)

When using a YAML file, you should follow YAML Specifications for the key and value formatting.

As with python variables, when you use them in Robot Framework, you can use a space.

```yaml
STRING VARIABLE: Hello I am a yaml variable.
INT VARIABLE: 42
LIST VARIABLE:
  - one
  - two
DICT VARIABLE:
  one: yksi
  two: kaksi
  with spaces: kolme
```

#### Json Variable Files

Assume variables declared within JSON variable files to be at minimum SUITE in scope. (i.e. Always UPPER CASED, UPPER_CASED)

```json
{
    "STRING VARIABLE": "Hello I am a json variable.",
    "INTEGER VARIABLE": 42,
    "LIST VARIABLE": [
        "one",
        "two"
    ],
    "DICT VARIABLE": {
        "one": "yksi",
        "two": "kaksi",
        "with spaces": "kolme"
    }
}
```

#### Commandline Variables

Commandline Variables and by extension variable files should be treated as Global Variables. (i.e. Always UPPER CASED, UPPER_CASED)

#### Environment Variables

https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#environment-variables

Environment Variables should be treated as Global Variables. (i.e. Always UPPER CASED, UPPER_CASED)

It is also possible that the variable casing needs to match how the variable has been declared outside of Robot Framework's context.

#### Deviation When Context Is More Important

Sometimes variables should mimic the parameters of an API. This is especially true when interacting with REST API json bodies.

You have a couple of choices:

*Given this example body:*

```json
{
  "firstName": "value",
  "lastName": "value"
}
```

*Then choose either:*
<Tabs>
  <TabItem value="Using normal variable syntax" label="style 1">

```robot
*** Keywords ***
Create Json Body Option One
  [Documentation]    This one is an 'OK' example.
  [Arguments]    ${first name}    ${last name}
  ${json body}    Create Dictionary    firstName=${first name}    lastName=${last name}
  RETURN    ${json body}
```

  </TabItem>
  <TabItem value="Matching variables to Json keys" label="style 2">

```robot
*** Keywords ***
Create Json Body Option Two
  [Documentation]   This is also an 'OK' example.
  [Arguments]    ${firstName}    ${lastName}
  ${json body}    Create Dictionary    firstName=${firstName}    lastName=${lastName}
  RETURN    ${json body}
```

  </TabItem>
</Tabs>

#### Embedded Variables

[variables-inside-variables](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#variables-inside-variables)

Be careful to not embed more than one variable within a variable.

Keep it simple.

Readability becomes an issue with more than one embedded variable.

<Tabs>
  <TabItem  value="With Spaces" label="style 1">

```robot
*** Keywords ***
Set Suite Variables
    Set Suite Variable    ${EMBED VAR}   embedded
    Set Suite Variable    ${VARIABLE ${EMBED VAR}}    good embedded variable
    Set Suite Variable    ${FOO}    eggs
    Set Suite Variable    ${BAR}    spam
    Set Suite Variable    ${VARIABLE ${FOO} ${BAR}}    questionable variable
    Set Suite Variable    ${VAR}    one
    Set Suite Variable    ${WITHIN ${VAR}}  two
    Set Suite Variable    ${VARIABLES ${WITHIN ${VAR}}}  three
    Set Suite Variable    ${INCEPTION ${VARIABLES ${WITHIN ${VAR}}}}  do not do this
```

  </TabItem>
  <TabItem  value="With Underscores" label="style 2">

```robot
*** Keywords ***
Set Suite Variables
    Set Suite Variable    ${EMBED_VAR}   embedded
    Set Suite Variable    ${VARIABLE_${EMBED_VAR}}    good embedded variable
    Set Suite Variable    ${FOO}    eggs
    Set Suite Variable    ${BAR}    spam
    Set Suite Variable    ${VARIABLE_${FOO}_${BAR}}    questionable variable
    Set Suite Variable    ${VAR}    one
    Set Suite Variable    ${WITHIN_${VAR}}  two
    Set Suite Variable    ${VARIABLES_${WITHIN_${VAR}}}  three
    Set Suite Variable    ${INCEPTION_${VARIABLES_${WITHIN_${VAR}}}}  do not do this
```

  </TabItem>
</Tabs>

#### Variables with Attributes

[extended-variable-assignment](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#extended-variable-assignment)

Attributes to variables can be any casing and usually follow the use case.
The variable itself should follow the casing rules of its scope.

```robot
Attribute Variables
    ${local variable.name}    Set Variable              this is a variable
    ${local variable.foo}     Set Variable              this is a local attribute
    Set Suite Variable        ${SUITE VARIABLE.name}    this is a suite variable
    ${SUITE VARIABLE.bar}     Set Variable              this is a suite attribute
```

## Test Templates

User Guide Reference:
[Test Templates](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-templates)

General rules

- Any two columns should be separated by 4 spaces from each other.
- Each column should be left-aligned.
- Data columns should have titles.
- The titles should be capitalised.
- The titles should be left-aligned with respect to the data columns.

The Template Keyword follows the same common rules as any other Keyword.

---

### Test Cases Or Tasks

Templated test cases and tasks share the same guidelines. Below are examples for the
different cases, depending on how templates are used.

<Tabs>
  <TabItem value="One test" label="Example 1">

```robot
*** Settings ***
Documentation    Templated test case.
Test Template    Template Keyword


*** Test Cases ***    COLUMN1       COLUMN2    COLUMN3
Test Case             00000         aaaaa      AAAAAAAAAA
                      1111111111    bbb        BBBBBBBBBBBBBB
                      ${EMPTY}      aaaa       AAAAAAA
                      ${EMPTY}      bbbbbbb    BBB
                      ${NONE}       a          AAAAAAAAAA
                      ${NONE}       bbb        BBBBBBBBBBBBBB


*** Keywords ***
Template Keyword
    [Arguments]    ${arg1}    ${arg2}    ${arg3}
    Log Many    ${arg1}    ${arg2}    ${arg3}
```

  </TabItem>
  <TabItem value="Two tests" label="Example 2">

```robot
*** Settings ***
Documentation    Two templated tasks.
Task Template    Template Keyword


*** Tasks ***                    COLUMN1       COLUMN2        COLUMN3
First Task                       00000         aaaaa          AAAAAAAAAA
                                 1111111111    bbb            BBBBBBBBBBBBBB
                                 ${EMPTY}      aaaa           AAAAAAA
                                 ${EMPTY}      bbbbbbb        BBB
                                 ${NONE}       a              AAAAAAAAAA
                                 ${NONE}       bbb            BBBBBBBBBBBBBB

Another Task With Longer Name    00000         a              AAAAAAAAAA
                                 1111111111    bbbbbbbbbbb    BBBBBBBBBBBBBB
                                 ${EMPTY}      aa             AAAAAAA
                                 ${EMPTY}      bbbb           BBB
                                 ${NONE}       aaaaaaaaaa     AAAAAAAAAA
                                 ${NONE}       bb             BBBBBBBBBBBBBB


*** Keywords ***
Template Keyword
    [Arguments]    ${arg1}    ${arg2}    ${arg3}
    Log Many    ${arg1}    ${arg2}    ${arg3}
```

  </TabItem>
  <TabItem value="Each test named" label="Example 3">

```robot
*** Settings ***
Documentation    Individually named test cases.
...              Tests sorted according to ARG values.
Test Template    Template Keyword


*** Test Cases ***              ARG           SECOND ARG    ANOTHER ARG
Test                            abc123        aaaa          AAAAAAAAAA
Another Test                    1111111111    bbb           BBBBBBBBBBBBBB
One More Test With Long Name    222           cc            CCCCCCCCCCCCCCC

Test With Empty                 ${EMPTY}      aaaa          AAAAAAAAAA
Another Test With Empty         ${EMPTY}      bbb           BBBBBBBBBBBBBB
One More Test With Empty        ${EMPTY}      cc            CCCCCCCCCCCCCCC

Test With None                  ${NONE}       aaaa          AAAAAAAAAA
Another Test With None          ${NONE}       bbb           BBBBBBBBBBBBBB
One More Test With None         ${NONE}       cc            CCCCCCCCCCCCCCC


*** Keywords ***
Template Keyword
    [Arguments]    ${arg1}    ${arg2}    ${arg3}
    Log Many    ${arg1}    ${arg2}    ${arg3}
```

  </TabItem>
    <TabItem value="Two tests two templates" label="Example 4">

```robot
*** Settings ***
Documentation    Eeach test case using different template.


*** Test Cases ***
Test Case With Template A
    [Template]    Template A
    aa        123
    a         Hello Word!
    aaaaaa    ${5}
    aaa       ${NONE}

Test Case With Template B
    [Template]    Template B
    bbbbbbbbbbbbb    456          ${1.5}
    bbbbbbbb         ${EMPTY}     anything
    bbb              something    7899999999999
    bbbbbbbbbbb      ${2}         ${EMPTY}


*** Keywords ***
Template A
    [Documentation]    This is first template.
    [Tags]    A
    [Arguments]    ${arg1}    ${arg2}
    Log Many    ${arg1}    ${arg2}

Template B
    [Documentation]    This is second template.
    [Tags]    B
    [Arguments]    ${arg_one}    ${arg_two}    ${arg_three}
    Log Many    ${arg_one}    ${arg_two}    ${arg_three}
```

  </TabItem>
</Tabs>

In **Example 1**, section name `*** Test Cases ***` and `COLUMN1` are separated by 4 spaces, as well as the following
columns. The distance is measured between the longest item in the given column and the start of the following column.
For example, the longest item in the first column is `1111111111`, therefore, corresponding item in the next
column, `bbb` is separated by 4 spaces from it.

In **Example 2**, there are two tasks in one file, and the
data in all tasks are aligned with respect to each other.  In each task, for easier navigation, data rows with constant
values are listed first, next with `${EMPTY}` and `${NONE}`.

If the number of iterations or the number of test cases/tasks grow, it is a good idea to sort rows in certain logical
order if applicable. This will ease finding the relevant raws when adding or removing data. Empty lines can be used to
separate tests into logical groups as in **Example 3**. When dealing with large data, consider using
[DataDriver library](https://docs.robotframework.org/docs/testcase_styles/datadriven#using-datadriver-library).

In **Example 4**, there are different templates set for different test cases. The data is aligned within *each* test
case. This is because they are using different templates and, therefore, are independent. Note that the columns are not
titled - this is an exception in the per-test case templates because title placement on the same line as test names, and
`[Template]` setting between the column titles and the data, would make the tests unreadable.

### Note On Documentation And Tags

In special cases, there might be a need to specify Documentation and Tags for each test case.
To achieve consistent formatting, they can be represented in columns just like test data,
by passing them as arguments to the Template Keyword:

```robot
*** Settings ***
Documentation    Different Tags and Documentation for each test case.
Test Template    Template Keyword


*** Test Cases ***    ARG1    ARG2    [Documentation]           [Tags]
TestA                 aaa     AAA     Prints some message       tagA
TestB                 bbb     BBB     Prints another message    tagB


*** Keywords ***
Template Keyword
    [Arguments]    ${arg1}    ${arg2}    ${documentation}    ${tag}
    [Setup]    Set Tags And Documentation    ${documentation}    ${tag}
    Log Many   ${arg1}    ${arg2}

Set Tags And Documentation
   [Arguments]    ${documentation}    ${tag}
   Set Test Documentation    ${documentation}
   Set Tags    ${tag}
```

Square brackets around the column titles, `[Documentation]` and `[Tags]`, are merely to resemble the Settings
syntax. This is to distinguish them from the test data.
