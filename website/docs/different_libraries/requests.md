---
sidebar_label: Requests Library
title: Requests Library
---

🏠 ``RequestsLibrary`` is a [Robot Framework](https://robotframework.org/) library
aimed to provide HTTP api testing functionalities by wrapping the well known [Python Requests Library](https://github.com/kennethreitz/requests).

## Install stable version
```sh
pip install robotframework-requests
```

## 🤖 Quick start
```robotframework
*** Settings ***
Library               RequestsLibrary

*** Test Cases ***

Quick Get Request Test
    ${response}=    GET  https://www.google.com

Quick Get Request With Parameters Test
    ${response}=    GET  https://www.google.com/search  params=query=ciao  expected_status=200

Quick Get A JSON Body Test
    ${response}=    GET  https://jsonplaceholder.typicode.com/posts/1
    Should Be Equal As Strings    1  ${response.json()}[id]
```

See examples for [Restful Booker](/examples/restfulbooker)