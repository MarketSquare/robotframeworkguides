---
sidebar_position: 2
sidebar_label: I'm looking for RPA
title: I'm looking for RPA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:rocket: **Welcome!** <br/>
You can find more explanations and guidance down below, but first let's get you running a bot :runner:

## Run your first robot
The scripts below enable you to get a robot setup and running from a selection of templates using a CLI tool called [RCC](https://github.com/robocorp/rcc#readme)

<Tabs>
<TabItem value="Windows" label="Windows" default>

```
curl -o rcc.exe https://downloads.robocorp.com/rcc/releases/latest/windows64/rcc.exe
rcc create example
cd example
rcc run
```
</TabItem>
<TabItem value="MacOS" label="MacOS">

```
brew install robocorp/tools/rcc
rcc create example
cd example
rcc run
```
</TabItem>
<TabItem value="Linux" label="Linux">

```
curl -o rcc https://downloads.robocorp.com/rcc/releases/latest/linux64/rcc
chmod a+x rcc
rcc create example
cd example
rcc run
```
</TabItem>
</Tabs>

:rocket: With your bot running you can now take a look a bit deeper on what you just did and then jump on to  editors to really get cracking.

## What is this RCC?

[RCC](https://github.com/robocorp/rcc#readme) is an open-source tool that handles essentially everything around an RPA robot run on Windows, mac and Linux. With RCC the machine running the robot does not even need Python installed.

So, if you look back into [the first robot you ran](/getting_started/rpa#run-your-first-robot) you will see the following:
1. The environment your bot needs is defined in: [conda.yaml](https://github.com/robocorp/rcc/blob/master/docs/recipes.md#what-is-in-condayaml)
1. How your robot is executed is defined in: [robot.yaml](https://github.com/robocorp/rcc/blob/master/docs/recipes.md#what-is-in-robotyaml)
1. The logic of your your bot is in Robot Framework (`.robot`) or Python (`.py`) -files... or both.
With these [RCC](https://github.com/robocorp/rcc#readme) can setup an isolated environment and make sure your bot runs the same way every time.

:point_right: No more: "Works for me".

> RCC has a lot of cool tricks, so once you've gotten started it is worth to [check out some more](https://github.com/robocorp/rcc/tree/master/docs#readme)

:rocket: So know you have your bot running and have a slight idea how you got there, what next?

## Editors and IDEs
There is not shortage on editors for Robot Framework and Python, but to get you started the guides limit list down a bit to ease things out.

## Automation Studio
If you are not familiar to coding and tools like VS Code we'd recommend starting with a tool like [Automation Studio](https://robocorp.com/automation-studio).

![](studio.gif)

This kind of a IDE enables you to get started with having to worry about the syntax, environments etc. right from the bat. You can still get quite far and the tool allows you to see and edit on the code-level. In the end Studio is also just creating a robot just like the first RCC bot so you can also jump to other tools if you feel limited.

> For the test automation people:<br/>
Note that there is very little RPA specific about Automation Studio as it is just generating Robot Framework code.<br/>
Even hard-boiled coders like to do things easy once in a while :wink:

## Visual Studio Code

If you are using [VS Code](https://code.visualstudio.com) or are looking for the full feature set of developer tools then the extensions are for you.

:point_right: [Get VS Code here](https://code.visualstudio.com)

To get going with RPA development you need two extensions: Extension for LSP and the RCC extension.

### Robocorp Code extension for VS Code
This extension brings in the RCC functionality with command palette commands and a nice sidebar.

:point_right: [Get Robocorp Code here](https://marketplace.visualstudio.com/items?itemName=robocorp.robocorp-code)

![](vscode-code.gif)

### Robot Framework LSP extensions for VS Code
Language Server Protocol extensions bring in code-completion, documentation, highlighting etc. for your Robot Framework code.
There are options here but **remember to only install one** as multiple LSP handlers will cause problems:


<Tabs>
<TabItem value="LSP" label="Robot Framework Language Server" default>

:point_right: [Get Robot Framework LSP here](https://marketplace.visualstudio.com/items?itemName=robocorp.robotframework-lsp)

![](vscode-lsp.gif)

</TabItem>
<TabItem value="RobotCode" label="Robot Code">

:point_right: [Get Robot Code here](https://marketplace.visualstudio.com/items?itemName=d-biehl.robotcode)

![](vscode-robotcode.gif)
</TabItem>
</Tabs>


## About Robotic Process Automation (RPA)

Robotic Process Automation (RPA) is quite similar to test automation on the technical level, but on the business or result side that mentality is quite different. In RPA the most common case is that you are not running on a machine you control fully and instead of finding and documenting place where robot execution failes or succeeds the aim is to get the result of the process. 

Isolation and repeatability are the other key points in RPA. The bot needs to execute with minimal setup by IT people and where governance is a thing really locking down your dependencies is a must-have feature.
With RCC environment caching and wrapping features, you are able to really lock-down your dependencies down to the actual unique files. In RPA you do not want loose dependency handling breaking your production bots. 

> Remember `pip install numpy` does **not** mean you will get the latest version, it means you are fine in getting whatever version :wink:

This validates a separate getting started brief.

## RPA resources to get started

todo