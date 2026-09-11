---
title: "Robot Framework use case: testing payments cards"
date: 2022-12-16
authors: [miikka]
tags: [testing, robot-framework, test-automation, cnc-machine, devops]
slug: robot-framework-use-case-testing-payments-cards
# medium_url: https://medium.com/@RobotFramework/robot-framework-use-case-testing-payments-cards-2388d81fef4f
---

This Blog is based on an interview with Jani Kytöaho, a senior devops engineer and a Robot Framework expert, as part of a series of interviews to shed light on different use cases of Robot Framework.

{/* truncate */}

If you have a good use case of Robot Framework, please do [contact](mailto:executive.director@robotframework.org) me.

## Background

Have you paid recently with your payment card?

Then it is likely that you have used a service tested and secured by Robot Framework.

Nexi Group is one of the biggest players in the digital payment markets in Europe, they process billions of payment card transactions each day. It is clear that when dealing with these amounts of transactions there needs to be a secure way to know that these payments will go through.

This is where Robot Framework comes into the picture. The payment terminals are tested with the robot.

## Use of Robot Framework at Nexi Group

At Nexi there was a need to give manual testers more time for exploratory testing and use test automation to run simple repetitive test cases. After some research, Robot Framework was chosen to be the test automation framework to do so back in 2014. The major benefit from Robot Framework for them is its general nature and the fact that the subject of the testing does not need to be defined in the set-up, but the inputs can come from the outside. Today, Robot Framework is used by over a 100 employees from three different teams.

Test automation is not that simple when it comes to the payment terminals. Terminal does not work on its own but requires backend servers to do authorizations and to download parameters. In most cases these servers are black box services operated by different teams and without proper APIs. This means that most of the test cases are end-to-end tests.

Terminal vendors provide OS and SDK and Nexi uses them to develop payment applications. Each card brand (e.g. Visa, MasterCard) have dozens of different cards terminal needs to support. There are also country and customer specific features and configurations. This means that there are hundreds of different software configurations to be tested for each release.

To make things more complicated hardware vendors rarely have any software to simulate actions on the terminal. In such a case a mechanical robot with an integrated camera is used to press keys and to read text from the screen. Luckily there exists 3rd party software and hardware to simulate chip and contactless cards. Mechanical card feeder is implemented to support card probes to move between multiple terminals. Both the robot and the card feeder are [CNC machines](https://en.wikipedia.org/wiki/Numerical_control) in nature. Multiple custom Robot Framework libraries are written to make robot usage easier and to hide technical details.

![](/img/blog/0_jbHQ7_MyO17fSqlr.png)

*A CNC machine modified to operate the payment cards with a payment terminal in a testing laboratory.*

The card feeder can move the cards to either use contactless payment or to insert the card to the reader. The robot is used to press the PIN code to the payment terminal if a test case requires it. A camera records the terminal screen and text is extracted from the image. This makes it possible to verify that the terminal is always in the correct state. Same test cases can be used regardless if actions are simulated or done by the robot.

## Test automation set-up at Nexi

![](/img/blog/0_VhuGW2-wfW9jFTX7.png)

*Overview of the test set-up*

The test automation set-up high level explanation is drawn in the picture above. On the left hand side the bottom corner shows test cases, followed by the payment layer where the type of the terminal, the environment and other factors for the tests are verified. The third layer is the library layer, where different libraries are taken into use.

The libraries used are:

- Optical Character Recognition (camera, image process, tesseract) which uses heavily python opencv library
- libraries to control cnc machines (robot and card feeder) over serial connection
- libraries to use [UL Solutions](https://www.ul.com/) tool for card simulation
- library to control chip card multiplexer
- libraries to implement usage of Nexi electronic cash register interfaces (ECR)

The communication layer (tcp client, udp server, Grbl driver) takes care that the libraries and the test cases are connected and information flows as indicated by the arrows in the picture.

At the start of a test, there is a command line input to confirm whether the test is an integrated or standalone test and whether the physical robot or simulation is used to conduct the test.

## Design principles

One of the design principles at Nexi is to hide low level implementation by creating higher level keywords (payment layer). This helps the less-technical people to also write tests and it reduces the amount of keywords used in the test cases.

The second design principle is ensuring that the same test case can be run with all terminal configurations. This is accomplished by conditional resource file import. Thirdly, if possible a data-driven approach is used in the test suites.

Moreover, all the changes coming to the test automation repository are reviewed with below standards.

- each library must have an owner
- unit tests are implemented for pure python code as well as custom RF libraries if applicable
- Robocop is used for static analysis
- SonarQube is used for static analysis for python code
- dryrun is used to detect keyword syntax errors
- proper CI/CD pipeline is used to control the process and if issues are found a pull request can be blocked

Naturally, it is also important to use proper IDE in the local development. At Nexi the recommendation is VS Code + Robocop + Robot Framework language server.

## Test environments, test suites and test runs

There are 6 different test environments with the total max capacity of 20 terminals (3 to 4 terminals per environment). Moreover, there are 5 different test suite categories which are run on nightly basis for every terminal:

- 1h smoke suite, most important test cases that can be run within 1 hour
- regression suite, longer suite containing most important test cases for the coming release
- feature suites, test cases focusing on a certain feature
- certification suites, suites for verifying that terminal hand handle correctly all acquirer (Visa, MasterCard, Amex, Diners, JCB) cards
- memory leak suite, to test possible memory leaks after 100 to 1000 transactions

The test runs are executed always with the latest software for the coming release. The new software is deployed to the development environment after each merged pull request.

Production releases are done a few times a year. In the Suite Setup the terminal checks if there is a new version of the software available. If there is, the terminal is updated. Otherwise the current software is used.

## Closing words

On top of the above mentioned, Robot Framework is also used at Nexi for browser testing and the browser library is in use and for mobile testing with appium.

Regardless of the precautions and good practices, there are sometimes flaky tests, false negatives or some other issues due to 3rd party software, changes in the backend or some other reasons. That makes the testing and debugging much more difficult. And interesting.

Uses of the Robot Framework are varied, and this is just one of the cases. If you have a good use case of Robot Framework, please do [contact](mailto:executive.director@robotframework.org) me.

Yours truly,

*Miikka Solmela*

Executive Director, Robot Framework Foundation

P.s. check out the upcoming Robot Framework conference at [**robocon.io**](http://robocon.io)!
