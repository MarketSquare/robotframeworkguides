---
sidebar_position: 2
sidebar_label: I'm looking for RPA
title: I'm looking for RPA
---

Welcome!
You can find more explanations and guidance down below, but let's get you running something first :runner:

## Run your first robot
The scripts below enable you to get a robot setup and running from a selection of templates using a CLI tool called [RCC](https://github.com/robocorp/rcc#readme)

** Windows **
```
curl -o rcc.exe https://downloads.robocorp.com/rcc/releases/latest/windows64/rcc.exe
rcc create example
cd example
rcc run
```
** MacOS **
```
brew install robocorp/tools/rcc
rcc create example
cd example
rcc run
```
** Linux **
```
curl -o rcc https://downloads.robocorp.com/rcc/releases/latest/linux64/rcc
chmod a+x rcc
rcc create example
cd example
rcc run
```

## RCC

[RCC](https://github.com/robocorp/rcc#readme) is an open-source tool that handles essentially everything around an RPA robot run on Windows, mac and Linux. With RCC the machine running the robot need nothing installed.
1. Define your dependencies in [conda.yaml](https://robocorp.com/docs/setup/installing-python-package-dependencies#the-conda-yaml-file)
1. Define your robot in [robot.yaml](https://robocorp.com/docs/setup/robot-yaml-format)
1. Let [RCC](https://github.com/robocorp/rcc#readme) setup an isolated environment and makes sure your bot runs the same way.

> No more: "Works for me".

By leveraging both [conda-forge](https://conda-forge.org) and [PyPI](https://pypi.org), RCC is able to setup more than just your python dependencies: `Firefox`, `nginx`, `terraform`, `awscli`, `postgresql`, ...
> [conda-forge is worht a look](https://conda-forge.org/feedstock-outputs/)

RCC's Environment caching and wrapping features also enable to really lock-down your dependencies down to the actual unique files.
In RPA you do not want loose dependency handling breaking your production bots. 

> Remember `pip install numpy` does **not** mean you will get the latest version, it means you will get any version


## Editors and IDEs
With your bot running you can now take a look at different editors to get cracking.
There is not shortage on editors for Robot Framework and Python but as [described below](/getting_started/rpa#about-robotic-process-automation-rpa)) the RPA approach is a lot simpler if you have your enviroment and robot control on top a toolchain like RCC.

** Extensions for Visual Studio Code **
For those familiar with [VS Code](https://code.visualstudio.com) there are two extension you need for RPA.
You need a Language Server Protocol handler and the RCC extension.

** Robocorp Code extension **
Brings in the RCC functionality with command palette commands and a sidebar.
*TODO: Image / gif coming*

** LSP extensions **
Language Server Protocol extensions bring in code-completion, documentation, highlighting etc. for your Robot Framework code.
There are options here but remember to only install one:
*TODO: Image / gif coming*

[Robot Framework Language Server](https://marketplace.visualstudio.com/items?itemName=robocorp.robotframework-lsp) OR [Robot Code](https://marketplace.visualstudio.com/items?itemName=d-biehl.robotcode)


** IDE **
If you are just starting up the [Automation Studio](https://robocorp.com/automation-studio) by Robocorp is an IDE that is designed to be easy to pick-up and get started.
*TODO: Image / gif coming*


## About Robotic Process Automation (RPA)

Robotic Process Automation (RPA) is quite similar to test automation on the technical level, but on the business or result side that mentality is quite different. In RPA the most common case is that you are not running on a machine you control fully and instead of finding and documenting place where robot execution failes or succeeds the aim is to get the result of the process. 

This validates a separate getting started brief.

