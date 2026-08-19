---
sidebar_label: canoe-robot-lib
title: canoe-robot-lib
---

[canoe-robot-lib](https://github.com/Nik-coder789/canoe-robot-lib) is a Robot Framework library for automating Vector CANoe testing. It provides keywords for controlling CANoe, reading and validating CANoe signals, and validating diagnostic responses. The project is hosted on [GitHub](https://github.com/Nik-coder789/canoe-robot-lib) and is available from [PyPI](https://pypi.org/project/canoe-robot-lib/).

See [Keyword Documentation](https://github.com/Nik-coder789/canoe-robot-lib/blob/main/KEYWORDS.md) for available keywords and more information about the library in general.
## Installation instructions

```bash
pip install canoe-robot-lib
```
Afterwards you can import the library into your Robot Framework test case or resource file.
```robotframework	
*** Settings ***
Library    canoe_robot_lib.keywords.CanoeLibrary

*** Variables ***
${cfg}    path_to_cfg_file.cfg

*** Test Cases ***
Basic CANoe Test
    Start CANoe    ${cfg}
    Set Signal     CAN    1    Msg    Signal    1
    ${val}=        Get Signal    CAN    1    Msg    Signal
    Should Be Equal As Numbers    ${val}    1
    Send diagReq  [ECU_Qualifer_name]  [diagnostic request]
    Stop CANoe
