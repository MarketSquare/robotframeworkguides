---
sidebar_position: 1
---

# Overview

## Listeners

Listeners can *watch* the execution of the test suite and perform actions based on the events that are triggered during the execution.
Listeners can be enabled by using the `--listener` option when running the test suite.  

Example events on which the listener can react on are:

- start/end of a test suite
- start/end of a test case
- start/end of a keyword
- ...

Check out the [Listener Chapter](/docs/extending_robot_framework/listeners_prerun_api/listeners) for more information.

## PreRunModifier

A PreRunModifier can modify the test suite before it is actually executed.  
It is like a "dry run" of the test suite with the possibility to modify the test suite before the actual execution.
It can be enabled by using the `--prerunmodifier` option when running the test suite.

Check out the [PreRunModifier Chapter](/docs/extending_robot_framework/listeners_prerun_api/prerunmodifier) for more information.

## Robot Framework API

The Robot Framework API allows us to  

- Run commands like `robot` and `rebot` from Python scripts
- Access and modify all kinds of Robot Framework objects before, during and after the execution of the test suite

Check out the [Robot Framework API Chapter](/docs/extending_robot_framework/listeners_prerun_api/rf-api) for more information.





