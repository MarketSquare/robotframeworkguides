*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Open Browser And Go To Homepage
    [Documentation]    This test case opens the browser and navigates to the homepage of Robot Framework.
    Open Browser    chrome
    Go To    https://www.robotframework.org
    Title Should Be    Robot Framework