*** Settings ***
Library   XML

*** Test Cases ***
Check Request
    ${root}    Parse Xml   source=${CURDIR}/multiply.xml
    Element Text Should Be    source=${root}   xpath=.//intA  expected=5
    ${text}    Get Element Text    source=${root}  xpath=.//intA
    Should Be Equal As Integers   ${text}   5

Modify intA Element in Request
    ${root}    Parse Xml   source=${CURDIR}/multiply.xml
    Set Element Text    source=${root}   xpath=.//intA   text=10
    ${text}    Get Element Text    source=${root}  xpath=.//intA
    Should Be Equal As Integers   ${text}   10

Add an intC Element to Request
    ${root}    Parse Xml   source=${CURDIR}/multiply.xml
    Add Element   source=${root}    xpath=.//Multiply    element=<intC>3</intC>
    ${text}    Get Element Text    source=${root}  xpath=.//intC
    Should Be Equal As Integers   ${text}   3
    Save Xml    ${root}   path=updated_sample.xml

Remove an Element from Request
    ${root}    Parse Xml   source=${CURDIR}/multiply.xml
    Remove Element   source=${root}    xpath=.//intA
    Element Should Not Exist    source=${root}   xpath=.//intA
