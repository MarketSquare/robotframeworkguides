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
Interact With Demo Page
    New Page    https://seleniumbase.io/demo_page
    Fill Text    id=myTextInput    My Text Value
    Fill Text    id=myTextarea    My Long Text Input in Area\nNew Row
    Get Text    input[name=preText2]    ==    Text...
    Select Options By    id=mySelect    value    25%
    Select Options By    id=mySelect    label    Set to 50%
    Check Checkbox    id=checkBox1
    ${state}    Get Checkbox State    id=checkBox1