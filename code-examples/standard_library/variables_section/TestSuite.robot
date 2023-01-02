*** Variables ***
${my_var}     my_value
@{my_list}    Apple    Banana    Orange
&{my_dict}    name=my_value1    password=my_value2

*** Test Cases ***
Test Case 1
    Log    ${my_var}
    Log    ${my_list}
    Log    ${my_dict}
    For    ${item}    IN    @{my_list}
        Log    ${item}
    End
    Log    ${my_dict}[name]
    Log    ${my_dict}[password]
    For   ${key}    ${value}    IN    &{my_dict}
        Log Many    ${key}    ${value}
    End
    My Keyword

*** Keywords ***
My Keyword
    Log Many    ${my_var}    ${my_list}    ${my_dict}    