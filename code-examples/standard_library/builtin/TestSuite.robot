*** Test Cases ***
Use different Log Keywords
    Log    This message is written to the log
    Log    This message is written to the log and console    console=True
    Log To Console    This message is written to the console
    Log Many    Log message 1    Log message 2    Log message 3
    ${msg}=    Set Variable    My Variable
    Log    You can combine variables and strings like this: ${msg}


Some Assertions
    ${var}=    Set Variable    1.0
    ${string}=    Set Variable    My String
    Should Not Be Equal    1    ${var}
    Should Be Equal As Numbers    1    ${var}
    Should Be Equal As Strings    1.0    ${var}
    Should Be True    ${var} == 1.0
    Should Not Be True    ${var} > 10
    Should Start With    ${string}    My
    Length Should Be    ${string}    9