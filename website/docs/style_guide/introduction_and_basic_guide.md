---
sidebar_label: Style Guide
title: Introduction And Basic Guide
---

## Purpose

This style guide is a community driven set of sensible rules to write your Robot Framework code.

As a starting point use the existing standards from [Robot Framework](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#getting-started) user guide, [Robocop](https://github.com/MarketSquare/robotframework-robocop) and [Robotidy](https://robotidy.readthedocs.io/en/stable/).

## Robocon 2022 Presentation

<iframe width="560"
        height="315"
        src="https://www.youtube.com/embed/Mpt_4MItha0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
</iframe>

## Contributors

Guido Demmenie, Mannana Koberidze, Kelby Stine

### Special Thanks To

Václav Fuksa, Many Kasiriha, Bartlomiej Hirsz, Mateusz Nojek, René Rohner, Miikka Solmela

### We are always looking for contributors

- We meet up once every two weeks to talk about style guide topics
- Reach out to any one of us on the Slack channels

---

## Basic Rules and Guidelines

Here are some good basic guidelines for formatting your Robot Framework code. As these are guidelines, use your best judgment in cases not covered by these recommendations.

- Separate pieces of the data, such as keywords and their arguments, with four (4) spaces.

- Robot and Resource file section order:

```robot
*** Comments ***
Optionally the comments section can be placed at the bottom of the file.

*** Settings ***

*** Variables ***

*** Test Cases / Tasks ***
(not available in resource files)

*** Keywords ***
```

- Keywords within resource files should be alphabetized or organized by functionality or purpose. The important part is to organize keywords in a thoughtful manner.
- The recommended minimum maximum line length is 120.
- It is reasonable to split a variable definition across multiple lines when it exceeds the recommended line length, or for the better readability of the code. See [Dividing data to several rows](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-data-syntax)
- Variable Syntax from the user guide [variable-priorities-and-scopes](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#variable-priorities-and-scopes)

  - Global variables use upper-case letters.
  - Suite variables use upper-case letters.
  - Test variables use upper-case letters.
  - Local variables use lower-case letters.
  - Keyword arguments use lower-case letters.
- Keyword syntax should be capital cased. (i.e. `This Keyword Is Capital Cased`)

---

Version 0.3a

---
