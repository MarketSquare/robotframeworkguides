---
sidebar_position: 2
sidebar_label: I'm looking for RPA
title: I'm looking for RPA
description: Use rcc to create a new RPA project
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## About Robotic Process Automation (RPA)

Robotic Process Automation (RPA) is similar to test automation on the technical level, but the mentality is different on the business and results side. In RPA, it is pretty standard that you are not running on a machine you control entirely, so your robot needs to be "self-sufficient" and isolated. Also, instead of finding and documenting places where robot execution fails or succeeds, the aim is always to succeed and get the result of the process. 

Isolation and repeatability are the other vital points in RPA. The bot needs to execute with minimal setup by IT people, and where governance is a thing, locking down your dependencies is a must-have feature.
With RCC environment caching and wrapping features, you can lock down your dependencies to the actual unique files. In RPA, you do not want loose dependency handling breaking your production bots. 

> Remember `pip install numpy` does **not** mean you will get the latest version;<br/>
it means you are OK with getting whatever version you get :wink:

All this validates a separate getting started brief and a difference in tooling. The actual logic of calling out APIs and interacting with browsers and applications is still the same as in test automation. 

:rocket: So by this point, you should have run your first bot, have an editor / IDE up-n-and running, and have an idea of the slight differences between RPA and test automation using Robot Framework.
You are raring to go, so go ahead and check out the resources and libraries -part.

## RPA resources to get started

For the resources and libraries part you can check out the following pages:
* [RPA libraries](/docs/different_libraries/rpa)
* [How to find the right library](/docs/different_libraries/how_to_find_library)

The main point to remember is that with Robot Framework and Python, there are just about no limits to what you can do. There are a ton of libraries out there, but you can also make your own.

We always recommend giving back to the open-source community, as you usually get more back than you put in. 

For example:
It is quite rare that the business value of an RPA process is in the library that interacts with an application or an API, so why not publish the connectivity part as open-source and get others to chip in on the maintenance and improvements? This way, you can focus more on the actual RPA problem.
* [Releasing your own library](/docs/extending_robot_framework/custom-libraries/releasing_your_own_libraries)
* [Help out with this documentation](/docs/about/contribute)
* Create example bots into the public repository and ping in the forums and Slacks

## Editors and IDEs
There is no shortage of editors for Robot Framework and Python, but for RPA work, we limit the list to get you started. In the end, what you create is just Robot Framework and Python code, so you are not limited to the tools mentioned here.

### Visual Studio Code

If you are using [VS Code](https://code.visualstudio.com) or are looking for the complete feature set of developer tools, then the extensions are for you.

:point_right: [Get VS Code here](https://code.visualstudio.com)

To get going with RPA development, you need an extension that's call a language server protocol. Essentially it is a plug-in or extension that provides helpers within the IDE environment that assist you in writing your RPA scripts.

### Robot Framework LSP extensions for VS Code
Language Server Protocol extensions bring in code completion, documentation, highlighting, etc., for your Robot Framework code.
There are a few options here but we recommend Robot Code. It is important to **remember only to install one** as multiple extensions will cause problems:


<Tabs>
<TabItem value="RobotCode" label="Robot Code" default>

:point_right: [Get Robot Code here](https://marketplace.visualstudio.com/items?itemName=d-biehl.robotcode)

![](vscode-robotcode.gif)
</TabItem>
</Tabs>
