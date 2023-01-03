*** Settings ***
Variables    PythonVariables.py
Variables    YamlVariables.yaml

*** Test Cases ***
Access Python Variables
    Log   ${TestEnv.ip}
    Log    ${TestEnv.roles}
    Log Many   @{TestEnv.roles}
    Log    ${my_var}
    Log Many   @{my_list}
    Log Many   &{my_dict}
    FOR    ${item}    IN    @{my_list}
        Log    ${item}
    END

Access Yaml Variables
    Log        ${base_url}
    Log Many   @{my_list}
    Log        ${my_dict}
    