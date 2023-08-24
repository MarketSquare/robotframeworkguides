---
sidebar_label: Appium Library
title: Appium Library
---

## Introduction

[AppiumLibrary](https://github.com/serhatbolsu/robotframework-appiumlibrary) is an appium testing library for [Robot Framework](https://robotframework.org/). Library can be downloaded from [PyPI](https://pypi.org/project/robotframework-appiumlibrary/).  
It uses Appium to communicate with Android and iOS application similar to how Selenium WebDriver talks to web browser.  
It is supporting Python 3.7+ (since Appium Python Client doesn't support Python 2.7 anymore)

### Tutorial Videos about RF and Appium

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL4GZKvvcjS3vAPWLqWbKZogkL5cD71yrT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Link to Playlist: https://youtube.com/playlist?list=PL4GZKvvcjS3vAPWLqWbKZogkL5cD71yrT

## Keyword Documentation

See [Keyword Documentation](http://serhatbolsu.github.io/robotframework-appiumlibrary/AppiumLibrary.html) for available keywords and more information about the library in general.

## Installation

Install with pip:

    pip install robotframework-appiumlibrary

## Device Setup

After installing the library, you still need to setup an simulator/emulator or real device to use in tests. iOS and Android have separate paths to follow, and those steps better explained in [Appium Driver Setup Guide](https://appium.io/docs/en/2.1/quickstart/uiauto2-driver/). Please follow the Driver-Specific Setup according to platform.

## Example

```robotframework
*** Settings ***
Documentation  Simple example using AppiumLibrary
Library  AppiumLibrary

*** Variables ***
${ANDROID_AUTOMATION_NAME}    UIAutomator2
${ANDROID_APP}                ${CURDIR}/demoapp/ApiDemos-debug.apk
${ANDROID_PLATFORM_NAME}      Android
${ANDROID_PLATFORM_VERSION}   %{ANDROID_PLATFORM_VERSION=11}

*** Test Cases ***
Should send keys to search box and then check the value
  Open Test Application
  Input Search Query  Hello World!
  Submit Search
  Search Query Should Be Matching  Hello World!


*** Keywords ***
Open Test Application
  Open Application  http://127.0.0.1:4723/wd/hub  automationName=${ANDROID_AUTOMATION_NAME}
  ...  platformName=${ANDROID_PLATFORM_NAME}  platformVersion=${ANDROID_PLATFORM_VERSION}
  ...  app=${ANDROID_APP}  appPackage=io.appium.android.apis  appActivity=.app.SearchInvoke

Input Search Query
  [Arguments]  ${query}
  Input Text  txt_query_prefill  ${query}

Submit Search
  Click Element  btn_start_search

Search Query Should Be Matching
  [Arguments]  ${text}
  Wait Until Page Contains Element  android:id/search_src_text
  Element Text Should Be  android:id/search_src_text  ${text}
  ```	
