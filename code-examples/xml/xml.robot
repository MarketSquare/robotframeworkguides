*** Settings ***
Library   XML

*** Test Cases ***
Check Request
    ${root}    Parse Xml   source=${CURDIR}/sample_request.xml
    Element Text Should Be    source=${root}   xpath=.//intA  expected=5
    ${text}    Get Element Text    source=${root}  xpath=.//intA
    Should Be Equal As Numbers   ${text}   5

Modify intA Element in Request
    ${root}    Parse Xml   source=${CURDIR}/sample_request.xml
    # What is the keyword to modify the text in an element?

Add an intC Element to Request
    ${root}    Parse Xml   source=${CURDIR}/sample_request.xml
    Add Element   source=${root}    xpath=.//Multiply    element=<intB>5</intB>
    Save Xml    ${root}   path=updated_sample.xml

Remove an Element from Request
    ${root}    Parse Xml   source=${CURDIR}/sample_request.xml
    # What is the keyword to remove an element?
