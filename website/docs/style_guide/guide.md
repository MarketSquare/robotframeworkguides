# Style Guide

## Vertical Order

Recommended approaches to ordering `.robot` and `.resource` files.

Vertical order refers to the recommended order of settings, sections, variables, keywords.

---

### Section Order

User Guide Reference: <https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-data-sections>

```robot
*** Comments ***


*** Settings ***


*** Variables ***


*** Test Cases *** 
*** Tasks ***


*** Keywords ***


```

---

### Settings Section Order

User Guide Reference: <https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#setting-section-1>

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

### Variables Section Order

Simple variables (scalar, list, dictionary) variables should be listed first.
Composite variables (variables composed of other variables) should be listed after simple variables.

```robot
*** Variables ***
${VARIABLE}  This is a Variable
${COMPOSITE_VARIABLES}  ${VARIABLE} with other variables.

```

---

### Test Case / Task Section Order

User Guide Reference: <https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-case-section>

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

### Keyword Section Order

User Guide Reference: <https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#keyword-section-1>

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

#### Keyword Order - Best Practices

It is a good idea to put static variable assignments before keyword calls.

```robot
Keyword With Static Variables
    [Arguments]    ${argument}
    ${static_variable}             Set Variable               This is a static variable.
    Set Local Variable             ${other_static_variable}   Another way to set a static variable.
    ${dynamic_variable}            Catenate                   SEPARATOR=${SPACE}    ${static_variable}                             ${other_static_variable}    ${argument}
    ${another_dynamic_variable}    Evaluate                   $static_variable.upper()
    Log To Console                 ${dynamic_variable}
    Should Not Be Equal            ${static_variable}         ${other_static_variable} 
```

#### Keyword Organization

In order to make keyword search within a resource file easier alphabetize your keywords. Some IDEs have an outline side bar (i.e. VSCode) and by alphabetizing the keywords they appear in the side menu in the same way.

## Vertical White Space

These are the recommended vertical space guidelines for `.robot` and `.resource` files.

- The guidelines of larger sections will supercede the guidelines of the subsections.
- Vertical White Space
: Any line that contains no characters.
- Commented lines are not considered white space.

---

### Sections

####  Spacing after the Section Header line

> There should be no space immediately after each section header line.

####  Spacing After Sections

> There should be 2 lines of white space after the last line of each section, except the last section of the file.

> The last section of a file should have 1 line of white space.

#####  Example of Section Header and Section Spacing

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

####  Spacing Between Settings Within The Settings Section

> It is recommended to allow 1 line of white space between common lines of settings.

#####  Example of Settings Section Vertical Spacing

```robot
    *** Settings ***
    Documentation  
    Metadata 

    Library  
    Resource  
    Variables  

    Suite Setup  
    Suite Teardown  
    Test/Task Setup  
    Test/Task Teardown  
    Test/Task Template  
    Test/Task Timeout  

    Default Tags  
    Test Tags
```  

####  Spacing Between Settings Within A Test Case or Task or Keyword

> No lines of white space should exist between the settings of a Test Case or Task or Keyword.

---

### Variables

####  Spacing Between Variables In The Variables Section

There should be no lines of white space between variables within the Variables section.

---

### Test Cases or Tasks

####  Spacing After Test Cases or Tasks

> There should be 1 line of white space after each Test Case or Task.

####  Spacing Between Code Blocks Within Test Cases or Tasks

> Ocassionally Test Cases or Tasks can be grouped in subsections of logical code blocks. In these instances it is acceptable to have 1 space between these code blocks.

####  Spacing After Templated Test Cases

> There should be 1 line of white space after each Templated Test Case.

####  Spacing Between Templated Test Case Data

> No lines of white space should exist between lines of test data in Templated Tests.

---

### Keywords

####  Spacing After Keywords

> There should be 1 line of white space after the last line in a keyword code block.

####  Spacing Between Keyword Calls

> In most cases there should be no white space between keyword calls.

####  Spacing Between Code Blocks Within Keyword Calls

> Ocassionally keywords can be grouped in subsections of logical code blocks. In these instances it is acceptable to have 1 space between these code blocks, but no more than 1 space.

####  Spacing Of Line Continuations

> No lines of white space should exist between lines of code using line continuation (...) syntax.

####  Examples

Key to examples:

> ① Two spaces between sections  
② One space between Tests/Tasks  
③ No Space in the settings section of Tests/Tasks or Keywords  
④ No space after settings section of Tests/Tasks or Keywords  
⑤ No spaces between template Test/Task data lines  
⑥ One Space Between Keywords  
⑦ No space between continuation lines  
⑧ One Space for separating code blocks  
⑨ One Space at the very end of the file

#####  Example Robot File Vertical White Spacing

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
${EXAMPLE_SCALAR_VARIABLE}          This is a suite scope scalar variable
@{EXAMPLE_LIST_VARIABLE}            This    is    a    suite    scope    list    variable
&{EXAMPLE_DICTIONARY_VARIABLE}      This=is a
⑦ ...                               suite=scope
...                                 dictionary=variable
①

*** Test Cases ***
An Example Test Case
③   [Documentation]    Test documentation
    [Tags]    standard-example-tag
④   ${RESULT_LIST}    This Is A Complex Keyword With Sections    ${EXAMPLE_SCALAR_VARIABLE}
    Log To Console    ${RESULT_LIST}
②
A More Complex Test Case
③   [Documentation]    Test documentation
    [Tags]    standard-example-tag
    [Setup]    Set Test Variable    ${EXPECTED_LENGTH}    2
    ${IS_LARGER_THAN_FOUR}    Create List
⑧
    ## Adding vertical white space can be used to separate test code blocks
    FOR    ${item}    IN    @{EXAMPLE_LIST_VARIABLE}
        IF    len($item)> 4
            This Is A Complex Keyword With Sections    ${item}
            Append To List    ${IS_LARGER_THAN_FOUR}    ${item}
        END
    END
    Length Should Be    ${IS_LARGER_THAN_FOUR}    ${EXPECTED_LENGTH}
②
An Example Templated Test
③   [Documentation]    Templated test documentation.
    [Tags]    templated-example-tag
    [Template]    This Is A Complex Keyword With Sections
⑤   ${EXAMPLE_DICTIONARY_VARIABLE}[This]
    ${EXAMPLE_DICTIONARY_VARIABLE}[suite]
    ${EXAMPLE_DICTIONARY_VARIABLE}[dictionary]
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

#####  Example Resource File Vertical Spacing

```robot
*** Settings ***
Documentation       Resources follow the same rules as test cases and tasks

Library             String
Library             Collections
①

*** Variables ***
${EXAMPLE_RESOURCE_SCALAR}      This is a really really really really really really really
⑦ ...                          really really really really really really really long string.
①

*** Keywords ***
A Small Keyword
    [Documentation]    Small keyword documentation.
    ${small_variable}    Catenate    SEPARATOR=    Such    a    small    keyword
    RETURN    ${small_variable}
⑥
This Is A Complex Keyword With Sections
③   [Documentation]    Complex keyword documentation.
    [Arguments]    ${an_argument}
    ${local_list}    Create List
    ${get_small_value}    A Small Keyword
    ${words}    Split String    ${get_small_value}
    FOR    ${word}    IN    @{words}
        ${characters}    Split String To Characters    ${word}
⑧
        ## Insert a vertical whitespace here to separate logical sections within a keyword.
        FOR    ${character}    IN    @{characters}
            IF    $character in 'aeiou'
                Append To List    ${local_list}    ${character}_${an_argument}
            END
        END
    END
    RETURN    ${local_list}
⑨
```

---

## Horizontal Spacing

Separation of tokens should be **4 spaces** as described in the the recommended file format: [space separated format](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#space-separated-format).

#### Separation

* **Separator** >= 4 spaces represented by `····` in the following examples. 

Separation thus is the vertical space between tokens, where tokens are any keywords, variables, constructs.

```robot
*** Test Cases ***
My Test
    Keyword One····argument1····argument2
```

#### Indentation

* **Indentation** n time 4 spaces (where n is the level of indentation and n never exceeds 5, hence nesting depth cannot exceed 4 steps in a Keyword

*Example with additional vertical lines for visual clearification: where n == 4 because the keyword also counts in the nesting.*

```
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


  - Space between Vars and = ? (and whether to use "=" at all)
- Indentation of Blocks
  - High Level Blocks = Required indention of Keywords within Test Cases

---

### Generic

#### Line Continuation

> [look over there](./line_continuation.md)

#### Line Length

> A line length of 120 characters is recommended. [Robocop: #line-too-long](https://robocop.readthedocs.io/en/stable/rules.html#line-too-long)

#### Trailing whitespaces

> Trailing whitespaces should be avoided. [Robocop: #trailing-whitespace](https://robocop.readthedocs.io/en/stable/rules.html#trailing-whitespace)

---

### Settings Section

#### Indentation

Indentations should only be added when needed.

The `*** Settings ***` section should always be left aligned without any indentation [Robocop: #suite-setting-should-be-left-aligned](https://robocop.readthedocs.io/en/stable/rules.html#suite-setting-should-be-left-aligned)

```robot
*** Settings ***
Library      Collections
Resource     data.resource
Variables    vars.robot
```

#### Separation in Settings Section

Arguments to settings should be aligned according to the longest setting added with 4 spaces. [Robotidy: #alignsettingssection](https://robotidy.readthedocs.io/en/stable/transformers/AlignSettingsSection.html#alignsettingssection)

Arguments to Libraries should be aligned if there are multiple libraries that have arguments on importing.
After the first argument to libraries all other arguments should either:
* be separated with 4 spaces
* be aligned in colums

##### Separated with 4 spaces

```robot
*** Settings ***
Library       String
Library       DataDriver    my_data_file.csv    dialect=UserDefined    delimiter=.  
Library       Telnet    timeout=3s    newline=CLRF    encoding=UTF-8
Resource      ${resourcedir}/mykeywords.resource
Resource      ${resourcedir}/myotherkeywords.resource
Test Tags     mytag
```

##### Aligned in columns

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

### Variable Section

#### Indentation

The `*** Variables ***` secion should always be left aligned without any indentation [Robocop: #variable-should-be-left-aligned](https://robocop.readthedocs.io/en/stable/rules.html#variable-should-be-left-aligned)

```robot
*** Variables ***
${VAR}     my variable
${VAR2}    2
```

---

### Test Cases, Tasks, Keywords Section

#### Indentation

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

#### Examples from the User Guide


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
* Comments should be aligned with the block they belong to.
* Inline comments have one indentation before the `#`

```robot
*** Keywords ***
## Comment about Some Keyword here
Some Keyword
    Called Keyword One
    ## Comment about Called Keyword Two here
    Called Keyword Two    ## TODO fix weird behaviour.
```
