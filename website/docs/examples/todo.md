---
sidebar_label: TodoMVC
title: TodoMVC
---

Webpage: https://todomvc.com/  
GitHub: https://github.com/tastejs/todomvc  
Technology: Web Application  

![TodoMVC](/img/examples/todomvc.png)

```robotframework
*** Settings ***
Library    Browser
Suite Setup    New Browser    browser=${BROWSER}    headless=${HEADLESS}
Suite Teardown    Close Browser

*** Variables ***
${BROWSER}    chromium
${HEADLESS}    false

*** Test Cases ***
Create To Dos and check numbers
    Open Todo Page
    Add Todo    My first To Do
    Add Todo    My second To Do
    Check that I have 2 todos in my list
    Check that I have 2 open todos
    Mark Todo    My second To Do
    Check that I have 1 open todos
    Mark Todo    My first To Do
    Check that I have 0 open todos
    Check that I have 2 todos in my list
    Click    "Active"
    Check that I have 0 todos in my list
    Click    "Completed"
    Check that I have 2 todos in my list
    Close Context

Create To Dos and check numbers - wrong number of To Dos
    Open Todo Page
    Add Todo    My first To Do
    Add Todo    My second To Do
    Check that I have 3 todos in my list
    Mark Todo    My second To Do
    Mark Todo    My first To Do
    Check that I have 2 open todos
    Close Context


*** Keywords ***
Open Todo Page
    New Context    viewport={'width': 1920, 'height': 1080}    locale=en-GB
    New Page       https://todomvc.com/examples/angularjs/

Add Todo
    [Arguments]    ${todo}
    Fill Text    css=input.new-todo    ${todo}
    Press Keys    css=input.new-todo    Enter

Check that I have ${number} todos in my list
    Get Element Count    ul.todo-list > li    ==    ${number}

Mark Todo
    [Arguments]    ${todo}
    Click    "${todo}" >> .. >> input.toggle

Check that I have ${number} open todos
    Get Text    span.todo-count > strong    ==    ${number}
```
