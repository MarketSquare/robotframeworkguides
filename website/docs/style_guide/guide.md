# Style Guide

Version 0.4b

## Vertical Order

Recommended approaches to ordering `.robot` and `.resource` files.

Vertical order refers to the recommended order of settings, sections, variables, keywords.

---

### Sections

User Guide Reference: [Test Data Section](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-data-sections)

```robot
*** Comments ***


*** Settings ***


*** Variables ***


*** Test Cases *** 
*** Tasks ***


*** Keywords ***


```

---

### Settings

User Guide Reference [Settings Section](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#setting-section-1)

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
Test/Task Setup
Test/Task Teardown
Test/Task Timeout
Test/Task Template

Test/Task Tags
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

User Guide Reference [Test Case Section](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-case-section)

```robot
Test Case
    [Documentation]
    [Tags]
    [Setup]
    [Template]
    [Timeout]
    Static Variable Assignments
    Keyword Calls
    Verification Keyword Call
    [Teardown]
```

---

### Keyword

User Guide Reference [Keyword Section](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#keyword-section-1)

```robot
Keyword
    [Documentation]
    [Tags]
    [Arguments]
    [Timeout]
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

In order to make keyword search within a resource file easier alphabetize your keywords. Some IDEs have an outline side bar (i.e. VSCode) and by alphabetizing the keywords they appear in the side menu in the same way.

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

```robot
    *** Comments ***
    Comments


    *** Settings ***
    Documentation


    *** Variables ***
    ${VARIABLE}    a variable


    *** Test Cases ***
    Test Case


    *** Tasks ***
    Task


    *** Keywords ***
    Keyword 

```

---

### Settings

#### Spacing Between Settings Within The Settings Section

> It is recommended to allow 1 line of white space between common lines of settings.

##### Example Of Settings Section Vertical Spacing

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
    Test/Task Teardown  
    Test/Task Template  
    Test/Task Timeout  

    Default Tags  
    Test Tags
```  

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

> ① Two spaces between sections  
② One space between Tests/Tasks  
③ No space in the settings section of Tests/Tasks or Keywords  
④ No space after settings section of Tests/Tasks or Keywords  
⑤ No spaces between template Test/Task data lines  
⑥ One space Between Keywords  
⑦ No space between continuation lines  
⑧ One space for separating code blocks  
⑨ One space at the very end of the file

##### Example Robot File Vertical White Spacing

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

Separation of tokens should be **4 spaces** as described in the the recommended file format: [space separated format](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#space-separated-format).

#### Separation

- **Separator** >= 4 spaces represented by `····` in the following examples.

Separation thus is the vertical space between tokens, where tokens are any keywords, variables, constructs.

```robot
*** Test Cases ***
My Test
    Keyword One····argument1····argument2
```

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

> A line length of 120 characters is recommended. [Robocop: #line-too-long](https://robocop.readthedocs.io/en/stable/rules.html#line-too-long)

#### Trailing Whitespaces

> Trailing whitespaces should be avoided. [Robocop: #trailing-whitespace](https://robocop.readthedocs.io/en/stable/rules.html#trailing-whitespace)

---

### Settings

#### Indentation Within Settings Section

Indentations should only be added when needed.

The `*** Settings ***` section should always be left aligned without any indentation [Robocop: #suite-setting-should-be-left-aligned](https://robocop.readthedocs.io/en/stable/rules.html#suite-setting-should-be-left-aligned)

```robot
*** Settings ***
Library      Collections
Resource     data.resource
Variables    vars.robot
```

#### Separation Within Settings Section

Arguments to settings should be aligned according to the longest setting added with 4 spaces. [Robotidy: #alignsettingssection](https://robotidy.readthedocs.io/en/stable/transformers/AlignSettingsSection.html#alignsettingssection)

Arguments to Libraries should be aligned if there are multiple libraries that have arguments on importing.
After the first argument to libraries all other arguments should either:

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

The `*** Variables ***` section should always be left aligned without any indentation [Robocop: #variable-should-be-left-aligned](https://robocop.readthedocs.io/en/stable/rules.html#variable-should-be-left-aligned)

```robot
*** Variables ***
${VAR}     my variable
${VAR2}    2
```

---

### Test Cases, Tasks And Keywords

#### Indentation Within Test Cases, Tasks And Keywords Section

The test case, task and keyword names should always start at the first character on a line. Test steps, task steps and keywords called from within keyword should be indented.

``` robot
*** Test Cases ***
My First Test Case
    Test Step One
    ${myvar}    Test Step Two That Returns A Value
```

``` robot
*** Tasks ***
My First Task
    Task Step One
    ${myvar}    Task Step Two That Returns A Value
```

``` robot
*** Keywords ***
Test Step One
    Some Keywords Being Called
    Log    Some Message

Test Step Two That Returns A Value
    RETURN  some string
```

#### Block Indentation

Blocks like `IF`, `WHILE`, `FOR` and `TRY/EXCEPT` should always be indented such that the keywords that are run within the loop have to be indented from the lines that start and end the block. [Robocop: #bad-indent](https://robocop.readthedocs.io/en/stable/rules.html#bad-indent)

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

In comments there should be a space between the `#` and the actual comment. [Robocop: #missing-space-after-comment](https://robocop.readthedocs.io/en/stable/rules.html#missing-space-after-comment)

Comments should be avoided, write your code readable or use the `[Documentation]`.
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

Recommended use of line continuation when having more than one arguments as described in the Robot Framework User Guide:
[User keyword arguments](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#user-keyword-arguments).

General guidelines:

- Try limiting the number of arguments to 5 ([Robocop: #too-many-arguments](https://robocop.readthedocs.io/en/stable/rules_list.html#too-many-arguments-w0507)).
- One argument per continuation line.
- Continuation line should not be indented.
- Line continuation character (`...`) should be placed at the beginning of the new row.
- No empty lines between arguments.
- No empty continuation lines between arguments (i.e., lines containing only `'...'`)
- If many arguments are required, consider representing them as a list or a dictionary.

#### Line Continuation For Arguments In Keyword Definition

> In Keywords, the very first argument should be placed on the same line as `[Arguments]` setting. Every other argument
should be placed on a new continuation line and aligned with the argument on the previous line.

#### Required Arguments

Required arguments placed on continuation lines:

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

Here, all required arguments are listed first, and optional arguments with default values afterwards (please note that this is a requirement within Robot Framework).
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
by exactly four spaces. Following arguments should be aligned with the argument on the previous line.
This is different from the argument formatting in the Keywords definition.
The reason is that test cases might include several Keywords with arguments and overly sparse
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
    Use One More Keyword With Various Arguments
    ...    abc
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
...             $(LONG ITEM)
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

Similarly to the list items, a key-value pair of the dictionary cannot be split using the line continuation character. In this case, it is recommended to define the value separately:

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
