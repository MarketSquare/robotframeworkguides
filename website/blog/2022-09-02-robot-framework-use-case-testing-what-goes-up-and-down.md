---
title: "Robot Framework use case: testing what goes up and down"
date: 2022-09-02
authors: [miikka]
tags: [testing, robot-framework, system-testing, user-stories]
slug: robot-framework-use-case-testing-what-goes-up-and-down
# medium_url: https://medium.com/@RobotFramework/robot-framework-use-case-testing-what-goes-up-and-down-198836e95c81
---

This Blog is based on an interview with Catherine Basson as part of a series of interviews to shed light on different use cases of Robot Framework.

{/* truncate */}

If you have a good use case of Robot Framework, please do [contact](mailto:robotframework-foundation@googlegroups.com) me.

## Background

So, what goes up, down and needs to be tested? A linear actuator.

Catherine Basson, an RnD development engineer from Linak A/S, is the main responsible for testing in her department of home and office solutions.

[Linak A/S](https://www.linak.com/) is a company making linear actuators for industrial and home use. The usage varies from small standing desk actuators to human sized actuators used in harvesting equipment.

Naturally, the function of an actuator is quite simple, but how do you actually know if it works? You guessed it, you test it!

## Use of Robot Framework at Linak

Robot Framework is used for system level testing. Linak has been using Robot Framework for roughly three years now and is reaping the benefits.

Catherine, with her colleagues, are testing electro-mechanical systems with Robot Framework. They are running the robot on the PC or in the CI/CD pipeline to run system tests to the System Under Test (SUT).

However, testing electro-mechanical systems has its own complications, since there are usually physical components involved. Linak has come up with a way to connect the tests to SUT via USB device. More specifically, the USB device can connect to the SUT via appropriate protocol and is communicating via a Python library. Naturally, they have created libraries when there haven’t been any for a specific protocol.

![](/img/blog/0_lmZMXnfSmVCoOntG.png)

Set-up footage from the actuator testing with Robot Framework

Linak uses some proprietary USB devices, but for example for the CAN protocol the open-source [python-can](https://github.com/hardbyte/python-can) library is used for the communication. Robot Framework has enabled the creation of Test Suite which focuses on testing common functionalities regardless of the low-level protocol used to communicate with the SUT. Robot Framework helps to run generic tests with the “Run Keyword” keyword and Variables easily even with different protocols.

![](/img/blog/0_EwDO6dQtcYixv72k.png)

Local developer testing SUT

When the tests are run at a desk during development, the environment can be pulled from the Source Code Management (SCM) and a virtual environment including Python, Robot Framework, and any other dependencies can be spinned up. The rest is just running any needed tests for the product.

The only additional peripherals required are the USB device and, of course, the SUT. Since the tests are saved in the SCM, it is easy to run exactly the same test that a tester ran in order to for example, reproduce a bug. Since the tests written in Robot Framework and as such are keyword-based, it has been easy for developers to understand and edit the tests as needed.

When the tests are integrated in the CI/CD pipeline, they can be triggered on any change to the software after which the test runs remotely to test the actuators and/or control boxes or whatever is the SUT. This is especially useful for some more time consuming tests, but practically any test can be run in the pipeline in a similar way.

The Robot Framework generated report is uploaded to the CI/CD server. When a test fails, the exact set of tests can be re-tested locally in order to reproduce and fix the bug. In the end, based on the result it can be decided, for example that a product is ready for release.

![](/img/blog/0_TeoUfUUm8ZvVcBwL.png)

Tests in CI/CD pipeline

## Closing words

Thank you Catherine and Linak for the interview and the help with the blog text.

What makes Robot Framework truly exceptional is the wide range of possibilities to use it in different circumstances. Maybe you have an interesting used case you would like to share?

Please [reach out](mailto:robotframework-foundation@googlegroups.com) so we can discuss further!
