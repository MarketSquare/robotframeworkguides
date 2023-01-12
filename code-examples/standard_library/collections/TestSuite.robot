*** Settings ***
Library    Collections

*** Variables ***
@{fruits}    Apple    Banana    Cherry    Mango
&{fruit_dict1}    fruit=Banana    color=yellow    taste=sweet
&{fruit_dict2}    fruit=Cherry    color=red    taste=sweet and sour
@{list_of_dicts}    ${fruit_dict1}    ${fruit_dict2}

*** Test Cases ***
Assert List Items
    Should Be Equal    ${fruits[0]}    Apple
    Reverse List    ${fruits}
    Should Be Equal    ${fruits[0]}    Mango
    List Should Contain Value    ${fruits}    Mango
    List Should Not Contain Value    ${fruits}    Orange
    Log List    ${fruits}
    Length Should Be    ${fruits}    4
    Remove From List    ${fruits}    0
    Length Should Be    ${fruits}    3

Iterate Over Lists and Dictionaries
    Log List    ${fruits}
    Log Many    @{fruits}
    FOR    ${fruit}    IN    @{fruits}
        Log    ${fruit}
    END

    Log Dictionary    ${fruit_dict1}
    FOR    ${key}    ${value}    IN    &{fruit_dict1}
        Log Many    ${key}    ${value}
    END

    Log List    ${list_of_dicts}
    FOR    ${dict}    IN    @{list_of_dicts}
        Log Dictionary    ${dict}
        FOR    ${key}    ${value}    IN    &{dict}
            Log Many    ${key}    ${value}
        END
    END

Modify Dictionaries
    Log Dictionary    ${fruit_dict1}
    Log Many    &{fruit_dict1}
    Dictionary Should Contain Key    ${fruit_dict1}    fruit
    ${fruit}    Pop From Dictionary    ${fruit_dict1}    fruit
    Should Be Equal    ${fruit}    Banana
    Dictionary Should Not Contain Key    ${fruit_dict1}    fruit
    Set To Dictionary    ${fruit_dict1}    fruit=Lemon
    Dictionary Should Contain Key    ${fruit_dict1}    fruit
    Dictionary Should Contain Value    ${fruit_dict1}    Lemon
    Set To Dictionary    ${fruit_dict1}    taste=sour
    ${items}   Get Dictionary Items    ${fruit_dict1}
    Log List    ${items}

    


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