*** Settings ***
Library   SoapLibrary
Library   Collections
Library    XML
Library    String

*** Variables ***
${CALCULATOR_URL}    http://www.dneonline.com/calculator.asmx?WSDL

*** Test Cases ***
Multiply Two Numbers And Assert
    Create SOAP Client    url=${CALCULATOR_URL}
    ${response}    Call SOAP Method With XML   xml=${CURDIR}${/}multiply.xml
    ${text}    Get Data From XML By Tag    ${response}    MultiplyResult
    Should Be Equal As Numbers    ${text}    25

Multiply Two Numbers and assert Dictionary
    Create SOAP Client    url=${CALCULATOR_URL}
    ${response}    Call SOAP Method With XML   xml=${CURDIR}${/}multiply.xml
    ${dict_response}    Convert XML Response to Dictionary    xml_etree=${response}
    Should Be Equal As Numbers    ${dict_response}[Body][MultiplyResponse][MultiplyResult]    25

Edit XML Request Before Sending
    Create SOAP Client    url=${CALCULATOR_URL}
    ${new_values}    Create Dictionary    intA=6    intB=6
    ${xml_edited}    Edit XML Request   xml_file_path=${CURDIR}${/}multiply.xml    new_values_dict=${new_values}    edited_request_name=New_Request
    ${response}    Call SOAP Method With XML  xml=${xml_edited}
    ${text}    Get Data From XML By Tag    ${response}    MultiplyResult
    Should Be Equal As Numbers    ${text}    36

Edit XML using XML Library
    Create SOAP Client    url=${CALCULATOR_URL}
    ${root}    Parse Xml    source=${CURDIR}${/}multiply.xml
    Set Element Text    source=${root}   text=7   xpath=.//intA
    Set Element Text    source=${root}   text=7   xpath=.//intB
    ${xml_string}    Element To String    source=${root}
    ${response}    Call SOAP Method With String XML   string_xml=${xml_string}
    ${text}    Get Data From XML By Tag    ${response}    MultiplyResult
    Should Be Equal As Numbers    ${text}    49

Use Response Object Text
    Create SOAP Client    url=${CALCULATOR_URL}
    ${response}    Call SOAP Method With XML   xml=${CURDIR}${/}multiply.xml
    ${response_object}    Get Last Response Object
    ${parsed_response}    Parse Xml   source=${response_object.text}
    Element Text Should Be    source=${parsed_response}    xpath=.//MultiplyResult   expected=25

Perform full comparison of reference response against candidate response
    Create SOAP Client    url=${CALCULATOR_URL}
    ${response}    Call SOAP Method With XML   xml=${CURDIR}${/}multiply.xml
    ${candidate}    Save XML To File    ${response}    save_folder=${CURDIR}    file_name=multiply_candidate_response
    ${reference}    Parse Xml  source=${CURDIR}${/}multiply_reference_response.xml
    Elements Should Be Equal    source=${candidate}    expected=${reference}
