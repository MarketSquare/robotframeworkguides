*** Settings ***
Library    Browser
Library    String
Suite Setup    New Browser    browser=${BROWSER}    headless=${HEADLESS}
Test Setup    New Context    viewport={'width': 1920, 'height': 1080}
Test Teardown    Close Context
Suite Teardown    Close Browser

*** Variables ***
${BROWSER}    chromium
${HEADLESS}    False

*** Test Cases ***
Add Two ToDos And Check Items
    [Documentation]    Checks if ToDos can be added and ToDo count increases
    [Tags]    Add ToDo
    Given ToDo App is open
    When I Add A New ToDo "Learn Robot Framework"
    And I Add A New ToDo "Write Test Cases"
    Then Open ToDos should show "2 items left!"

Add Two ToDos And Check Wrong Number Of Items
    [Documentation]    Checks if ToDos can be added and ToDo count increases
    [Tags]    Add ToDo
    Given ToDo App is open
    When I Add A New ToDo "Learn Robot Framework"
    And I Add A New ToDo "Write Test Cases"
    Then Open ToDos should show "2 items left!"

Add ToDo And Mark Same ToDo
    [Tags]    Mark ToDo
    Given ToDo App is open
    When I Add A New ToDo "Learn Robot Framework"
    And I Mark ToDo "Learn Robot Framework"
    Then Open ToDos should show "0 items left!"

Check If Marked ToDos are removed
    Given ToDo App is open
    And I Added Two ToDos
    When I Mark One ToDo
    Then Open ToDos should show "1 item left!"

Split ToDos
    Given ToDo App is open
    When I Add New ToDos "Learn Robot Framework&Write Test Cases&Sleep"
    Then Open ToDos should show "3 items left!"

Add A Lot Of Todos
    Given ToDo App is open
    When I Add "100" ToDos
    Then Open ToDos should show "100 items left!"

Add A Lot Of Todos With WHILE
    Given ToDo App is open
    When I Add "100" ToDos With WHILE Loop
    Then Open ToDos should show "100 items left!"

*** Keywords ***
ToDo App is open
    New Page    https://todomvc.com/examples/react/dist/

I Add A New ToDo "${todo}"   
    Fill Text  .new-todo  ${todo}
    Press Keys  .new-todo  Enter

I Add New ToDos "${todo}"
    IF  "&" in $todo
        @{todos}    Split String    ${todo}    separator=&
        FOR  ${item}  IN  @{todos}
            Fill Text  .new-todo  ${item}
            Press Keys  .new-todo  Enter 
        END
    ELSE
        Fill Text  .new-todo  ${todo}
        Press Keys  .new-todo  Enter
    END
    
Open ToDos should show "${text}"
    Get Text    span.todo-count    ==    ${text}

I Mark ToDo "${todo}"
    Click    "${todo}" >> .. >> input.toggle

I Added Two ToDos
    I Add A New ToDo "Learn Robot Framework"
    I Add A New ToDo "Write Test Cases"

I Mark One ToDo
    Click    li:first-child >> input.toggle

I Add "${count}" ToDos
    FOR    ${index}    IN RANGE    ${count}
        I Add A New ToDo "My ToDo Number ${index}"    
    END

I Add "${count}" ToDos With WHILE Loop
    ${x}=    Set Variable    ${0}
    WHILE  ${x} < ${count}
        ${x}=    Evaluate    ${x} + 1
        I Add A New ToDo "My ToDo Number ${x}"
    END
    