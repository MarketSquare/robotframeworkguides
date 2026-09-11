---
title: "Robot Framework Use Case: System-Level Validation of an Embedded Passenger Counting Sensor"
date: 2026-06-08
authors: [bjorn]
tags: [open-source, embedded-systems, robot-framework, test-automation, quality-assurance]
slug: robot-framework-use-case-system-level-validation-of-an-embedded-passenger-counting-sensor
# Original: keeps search engines pointing at the canonical source until
# the Medium post is redirected or removed.
# medium_url: https://medium.com/@RobotFramework/robot-framework-use-case-system-level-validation-of-an-embedded-passenger-counting-sensor-792856b80ead
---
> This is a guest post by **Björn Morgenthaler**, Head of Test Engineering & Validation at **comlet Verteilte Systeme GmbH** — an active member of the Robot Framework [Foundation](/blog/the-foundation-behind-the-framework).

{/* truncate */}

#### Table of Contents

1\. Introduction  
2. Project context  
3. The testing challenge  
3.1 Black-box system testing for an embedded device  
3.2 Why manual testing reached its limits  
4. Representative test environment  
4.1 Hardware-based passenger simulation  
4.2 State synchronization and result retrieval  
5. Automation architecture  
5.1 Protocol-level Python libraries  
5.2 Domain-level Robot Framework keywords  
6. A representative use case: long-running stability testing  
7. CI/CD integration and firmware provisioning  
8. Outcomes and lessons learned  
9. References

#### 1. Introduction

Automatic passenger counting sensors support operationally relevant processes in public transport. iris-GmbH infrared & intelligent sensors \[iris\] positions passenger counting data as a basis for route optimization, occupancy evaluation, capacity planning and related operational decisions. Validating such systems requires more than isolated API or component checks. It requires a test approach that combines physical stimuli, device state changes and service-level communication \[1\].

Robot Framework provides a suitable foundation for this kind of work. It is platform- and application-independent, supports custom Python libraries, reusable higher-level keywords and integration into existing CI infrastructure \[2\].

#### 2. Project context

This use case is based on a collaboration between iris and comlet Verteilte Systeme GmbH \[comlet\].

Based in Zweibrücken, Germany, comlet provides software engineering services for embedded systems and IoT, with more than 20 years of experience in networked products, embedded software development and continuous testing, including test automation and simulation for special embedded technology \[8\].

The project focused on the automated validation of the embedded sensor platform IRMA 6 used for automatic passenger counting in public transport.

From a public product perspective, iris positions IRMA 6 as an automatic passenger counting and object recognition platform for bus, subway, tram and train environments. That context matters for testing. Although the sensor was treated as a black box, the system under test remained an embedded device operating in a vehicle-related domain with several external interfaces and operationally relevant behavior \[3\].

![](/img/blog/1_oHeqcdEsm-9qfFgw3W4yAg.png)

Figure 1: IRMA 6 sensor

#### 3. The testing challenge

#### 3.1 Black-box system testing for an embedded device

The tests were designed as automated system tests from a black-box perspective in a representative environment. The goal was to control relevant external inputs and validate externally observable behavior rather than internal implementation details.

Even with a black-box test strategy, the system under test remained an embedded device with mixed interfaces. Its behavior depended on the interaction of physical movement, operational states and service communication. The validation problem therefore was not limited to network traffic or static responses. It was defined by the complete externally visible stimulus-response chain.

#### 3.2 Why manual testing reached its limits

Before automation, this combination created three recurring problems. First, manual execution involved substantial effort, particularly when the same scenario had to be repeated many times under controlled conditions. Second, reproducibility was limited. Physical interaction, timing and state coordination are difficult to reproduce consistently by hand. Third, failures were harder to analyze, because the relevant cause could lie in the interaction between the simulation setup, the device state and the service layer rather than in one isolated element.  
These constraints made the project a strong candidate for a keyword-driven and library-based automation approach.

#### 4. Representative test environment

A key part of the project was a customer-provided simulation setup in which the sensors were mounted and operated under representative conditions. The setup made it possible to simulate passenger movement within the detection area of the sensor in a controlled and repeatable manner.

![](/img/blog/1_V_htECg2ZUZ-f_-Zaj2_DA.png)

Figure 2: Representative test environment used for automated system-level validation of an embedded passenger counting sensor.

#### 4.1 Hardware-based passenger simulation

The simulation setup allowed a simulated passenger object to be moved through three spatial dimensions. For the automated tests, this movement was controlled through a proprietary serial PLC-based protocol. This meant that the physical stimulus applied to the embedded device could be reproduced deterministically rather than manually improvised from run to run.

#### 4.2 State synchronization and result retrieval

Physical movement alone was not sufficient. The automated workflow also had to synchronize counting-relevant states, such as the beginning and end of a counting phase, and then retrieve the resulting count information for verification.

At service level, the workflow relied on standards-based communication relevant in public transport environments. VDV publishes IBIS-IP openly as an IP-based communication standard for public transport vehicles, and ITxPT makes its specifications publicly available through its documentation center. Within the project, the automated interactions covered the subset of communication required for the selected scenarios, including passenger-counting-related and inventory-related functions \[4\]\[5\].

Together, these elements established a representative system test environment: a physical stimulus was applied under controlled conditions, relevant states were synchronized, and the resulting behavior of the embedded device was verified through external interfaces.

#### 5. Automation architecture

#### 5.1 Protocol-level Python libraries

The maintainability of the solution came from a clear architectural separation between low-level protocol access and higher-level test intent.  
For the passenger simulation, a custom Python library was developed on top of a serial communication library. This library encapsulated the proprietary serial PLC-based protocol used to control the simulation device. At this layer, the focus was on deterministic low-level interaction with the hardware-based passenger simulator.

For the service side, a second custom Python library implemented the required subset of standards-based communication used in the project. The request-response interactions relevant here followed the HTTP-based part of the model. VDV documentation explicitly describes the use of HTTP GET and HTTP POST for such operations, and RequestsLibrary is intended for HTTP API testing in Robot Framework \[6\]\[7\].

#### 5.2 Domain-level Robot Framework keywords

On top of these protocol-level components, higher-level Robot Framework user keywords were created to express the actual validation intent in a concise and readable way. Instead of exposing serial commands or service details directly in the test cases, the suites used domain-oriented keywords that described the expected system interaction more clearly. In an embedded-device context, this layered approach is particularly valuable because it allows teams to hide interface-specific complexity while keeping system-level tests readable and maintainable \[2\].

#### 6. A representative use case: long-running stability testing

One of the first automated scenarios implemented in the project was a long-running stability test. The same counting workflow was executed repeatedly over several hours to observe whether the behavior of the sensor remained robust and reproducible over time.

This scenario addressed a typical limitation of manual testing. A single successful run is often not enough to reveal timing-related inconsistencies, stability issues or subtle degradations in behavior. Repeating the same workflow under controlled conditions made it possible to assess whether the counting result remained consistent over longer periods.

From a test design perspective, the stability test also served as a compact demonstration of the overall approach. It combined controlled passenger simulation, synchronized device states, standards-based service interaction and automated comparison of actual versus expected results. That made it both a useful regression scenario and a practical proof of concept for Robot Framework in this embedded-device setting.

#### 7. CI/CD integration and firmware provisioning

The regression workflow did not start with test execution alone. Before the Robot Framework-based system tests were run, the sensors were provisioned with the current development build or release candidate as part of the CI/CD process.

This firmware update step was automated as well, but it was implemented outside Robot Framework and outside the public service interfaces used by the tests themselves. Robot Framework was used for the system-level validation, while the overall regression workflow combined that validation with separate provisioning automation for the device under test.  
This ensured that representative automated tests could be executed repeatedly against current development states and release candidates without requiring manual firmware handling before each run.

#### 8. Outcomes and lessons learned

The automated workflow shortened feedback cycles and enabled unattended execution, including runs outside regular working hours. This made it possible to use available lab and infrastructure time more effectively and to obtain regression feedback earlier in the development cycle.

Another important effect was reuse. The same tests that were integrated into the CI/CD pipeline could also be executed manually by testers when needed. This reduced duplicated effort and helped establish a common validation basis across automated regression and interactive investigation.  
The automated approach also helped uncover defects in development builds that had not been identified during earlier manual testing. In addition, implementing automated interactions against the protocol specification helped reveal deviations from expected service behavior in development builds and release candidates.

Taken together, the project did not simply automate the existing manual procedure. It improved repeatability, extended the practical reach of system-level regression and strengthened specification-driven validation for an embedded sensor platform.

> *We’re always looking for guest posts to feature on this blog. Got something to share with the Robot Framework community — a use case, a lesson learned, or something completely different? We’d love to hear from you.* [*Drop me a line*](mailto:executive.director@robotframework.org) *and you could be our next guest author.*

> *Yours truly,*

> *Miikka Solmela*

> *Executive Director, Robot Framework Foundation*

#### 9. References

\[1\] iris-GmbH infrared & intelligent sensors. Passenger counting: The benefits of automated systems. [https://www.iris-sensing.com/products/automatic-passenger-counting](https://www.iris-sensing.com/products/automatic-passenger-counting) (accessed 30 March 2026).  
\[2\] Robot Framework Foundation. Robot Framework User Guide. [https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html) (accessed 30 March 2026).  
\[3\] iris-GmbH infrared & intelligent sensors. IRMA 6. [https://www.iris-sensing.com/products/irma-6/](https://www.iris-sensing.com/products/irma-6/) (accessed 30 March 2026).  
\[4\] Verband Deutscher Verkehrsunternehmen e. V. VDV 301–1 IBIS-IP Teil 1: Systemarchitektur. [https://www.vdv.de/vdv-301-1-ibis-ip-teil-1-systemarchitektur.pdfx?forced=true](https://www.vdv.de/vdv-301-1-ibis-ip-teil-1-systemarchitektur.pdfx?forced=true) (accessed 30 March 2026).  
\[5\] ITxPT. Specifications. [https://itxpt.org/specifications/](https://itxpt.org/specifications/) (accessed 30 March 2026).  
\[6\] Verband Deutscher Verkehrsunternehmen e. V. 301–2-SDS V2.1 BasicServices. [https://www.vdv.de/301-2-sds-v2-1-basicservices.pdfx?forced=false](https://www.vdv.de/301-2-sds-v2-1-basicservices.pdfx?forced=false) (accessed 30 March 2026).  
\[7\] Robot Framework. Requests Library — Robot Framework. [https://docs.robotframework.org/docs/different_libraries/requests](https://docs.robotframework.org/docs/different_libraries/requests) (accessed 30 March 2026).  
\[8\] comlet Verteilte Systeme GmbH. [https://www.comlet.de/?lang=en](https://www.comlet.de/?lang=en) (accessed 30 March 2026).
