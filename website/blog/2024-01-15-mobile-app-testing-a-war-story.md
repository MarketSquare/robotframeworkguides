---
title: "Mobile App Testing -A War Story"
date: 2024-01-15
authors: [felix, christoph]
tags: [mobile-testing, testing, robot-framework, cucumber, test-automation]
slug: mobile-app-testing-a-war-story
# medium_url: https://medium.com/@RobotFramework/mobile-app-testing-a-war-story-e9d470d6d385
---

This time, we’re excited to feature a guest post by Felix Doppel and Christoph Singer. Dive into their insightful perspectives and enjoy the read!

{/* truncate */}

So, how was your first time with test automation? Ours was a bit of a disaster. And that was a good thing! Because we learned from our mistakes, repositioned ourselves and are now completely satisfied with our automation solution.

![](/img/blog/0_RbY_DKN9DVdGhPo8.png)

## Background

We operate in the insurance sector and offer one of the leading telematics solutions on the German market. Our system under test is therefore a telematics app that gives drivers live feedback on their driving behavior. That’s why we created a “mobility” ecosystem that provides feedback on all aspects of driving — e.g. a damage report, a contract service and the option to book services. This makes the app very complex and not exactly easy to test. With the increasing scope of the regression test, we therefore wanted to follow the agile approach and automate as many test cases as possible.

## Round One

Our first approach for this was the Cucumber framework with the Gherkin syntax. We hoped that this would be easy to use for business users (not developers) and that we would be able to run as many tests as possible in a short space of time. We therefore decided that we would at least try to automate every test.

…but we really fell flat on our faces…

However, this was not primarily due to the framework but to the processes modeled behind it. The framework was integrated into the source code of the app, so it required more maintenance and developer input. Creating the tests was also more difficult than expected and the work was mostly left to the test automation engineer — without any input from the manual tests, as they very quickly lost interest. In the end, it felt like the test team was working separately from each other…

And the worst thing was: the test runs of the automated tests always showed green bars. However, the manual test found many, sometimes very critical errors in the same test environment. Trust looks different…!

To summarize, we made the following mistakes:

· We tried to automate every test

· We pulled the automation out of the development process and thus isolated it

· At the same time, we made work for the developers by not separating the code. Separated them from each other

· We didn’t pay attention to whether the solution was really suitable for business users

The chosen framework also turned out to be not really suitable for our solution:

Mobile-specific tests such as flight mode, gestures or different operating systems and settings could not be mapped.

The necessary variety of devices (500,000 active users) could not really be represented, as a connection to a cloud test lab was not easily possible.

In the end, we failed because the tests could not deliver any real added value. For us, the question remained: was that it with test automation? Is it simply not feasible for us or do we try again?

The decision was made to get up, wipe our mouths and carry on. But this time properly and with the lessons learned from the first attempt.

## Round two, test!

![](/img/blog/0_ekrkhYHGH6ye90AQ.png)

During the tool evaluation conducted by imbus, the Robot Framework in combination with Appium emerged as the best-suited tool for our requirements. By utilizing multiple abstraction levels, domain testers can develop test cases in their familiar language (Domain Specific Language). The test automators can focus on implementing the keywords and do not necessarily need to have in-depth domain knowledge. It was also important for us that we could run the written test cases in both worlds: iOS and Android. This is feasible as long as the apps are identically structured and differ only in minor details. The framework comprises the following layers:

![](/img/blog/0_XrvcSGWGCCcgQB_l.png)

Test cases are created from keywords from the Business Layer. These represent technical test steps and can consist of other Business and Technical Keywords. The content of the upper three layers is implemented only once and can be used for both iOS and Android. Objects such as buttons, text fields, etc., are addressed in the keywords through variables. This creates a Single Point of Change for the identifiers, which greatly contributes to the maintainability of the test automation. The identifiers are also the point that differs between the apps in iOS and Android. Meaning, during the test execution, it only needs to be decided which resources should be included. This can be done via a configuration file, or passed via the command line.

The execution of the tests is carried out at SauceLabs in the mobile device cloud. This enables us to achieve broad test coverage at the device level. Additionally, this allows us the capability to run tests in parallel on multiple devices using pabot, drastically reducing throughput time. For synchronizing the test results after SauceLabs (SauceLabs only executes commands but does not know if a test step is pass or fail), the er API is used.

For controlling the test execution, Jenkins is used. Additionally, the ability to trigger a test execution from Jira was established. Here, the Jenkins job is executed with parameters, including the test environment (Android, iOS) and the specific test case to be run.

After the initial attempt with the Cucumber Framework failed due to its limitations and lack of integration into the development process, switching to the Robot Framework in combination with Appium led to an effective solution. The capability to use test cases and keywords for both iOS and Android, coupled with the integration of a mobile device cloud, allows for an efficient and flexible solution. This journey demonstrates that the right tool selection and learning from mistakes can lead to a powerful and adaptable test automation strategy.

The Blog text is by the authors

![](/img/blog/1_VMQ2sRlcwpWKfbRY9cjTwA.jpeg)

Christoph Singer,

Senior Test Automation Engineer at imbus

![](/img/blog/0_yxSfs1MLVurRg-Du.png)

Felix Doppel,

Test manager at HUK-COBURG

If you wish to write blogs with us, do [contact](http://executive.director@robotframework.org) us!
