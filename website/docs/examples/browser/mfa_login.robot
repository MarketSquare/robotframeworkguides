*** Settings ***
Library    Browser
Library    totp.py
Suite Setup    New Browser    browser=${BROWSER}    headless=${HEADLESS}
Test Setup    New Context
Test Teardown    Close Context
Suite Teardown    Close Browser

*** Variables ***
${BROWSER}    chromium
${HEADLESS}    False

*** Test Cases ***
Login with MFA
    New Page    https://seleniumbase.io/realworld/login
    Fill Text    id=username    demo_user
    Fill Text    id=password    secret_pass
    ${totp}    Get Totp    GAXG2MTEOR3DMMDG
    Fill Text    id=totpcode     ${totp}
    Click    "Sign in"
    Get Text  h1  ==  Welcome!
