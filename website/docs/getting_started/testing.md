---
sidebar_position: 1
sidebar_label: I'm looking for testing
title: I'm looking for testing
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This chapter will help you to get started with Robot Framework.

So basically how to
- install Python
- install Robot Framework
- install an IDE and Extensions for code-completion and debugging

<iframe width="560" height="315" src="https://www.youtube.com/embed/1jdjogCnsDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Install Python

<Tabs>
<TabItem value="Windows" label="Windows" default>

![Install Python Windows](/img/getting_started/installpywin.gif)  

Download and run the [Python](https://www.python.org/downloads/) installer

1. Select option `Add Python 3.X to PATH`
2. (optional) install to a sub-folder on root of your drive (e.g. C:\Python3.X)
3. Open a command line by
    1. pressing `Windows key + R`
    2. typing `cmd` and pressing `Enter`  

```cmd
python -V
```
![Check Python version](/img/getting_started/checkpythonwin.gif)
</TabItem>
<TabItem value="Linux" label="Linux">

Open a terminal by either
1. pressing `Ctrl` + `Alt` + `T`
2. pressing the `Windows key` and typing `terminal`
3. right-clicking in your file explorer and selecting `Open in Terminal`

```bash
sudo apt update
sudo apt install python3 python3-pip
python3 -V
```
</TabItem>

</Tabs>

You should see something like this:

```
Python 3.10.2
```

:::info

Check out the [official Python Downloads page](https://www.python.org/downloads/) or the [Python Beginner's Guide](https://wiki.python.org/moin/BeginnersGuide/Download) for more information

:::

## Install Robot Framework

<details>

<summary>Assumptions and other notes</summary>  

:::note python, python3, pip, pip3
We assume that Python3 and pip are installed.  
We use the commands `pip` and `python` to install packages or run Python scripts.  
Depending on your setup, those commands may be `pip3` and `python3` or `pip` and `python`.
:::

:::note Terminal, Bash and cmd
When we mention the word `terminal`, we mean both - a linux terminal (e.g. `bash`) or a windows command line (`cmd`).
:::

:::note Install globally vs. virtual environments
Python allows you to install modules via `pip`.  
By default, those modules are installed in the global Python environment.

But especially when working on multiple projects, it is more convenient to have a separate Python environment for each project with all the required packages installed (like `robotframework` or additional libraries like `robotframework-seleniumlibrary`).  
To separate the global Python environment from the project environment, you can use a `virtual environment`.  
We will cover both approaches in the following chapters.
:::

:::note Show info about installed packages
You can type `pip show robotframework` to get more information about the installed version of Robot Framework and the install location.
:::

</details>

### Install Robot Framework globally
<Tabs>
<TabItem value="Install Robot Framework globally" label="Global" default>

 Open your `terminal`

```cmd
pip install robotframework
robot --version
``` 

![Install Robot Framework](/img/getting_started/installrfwin.gif)

</TabItem>
</Tabs>

You should see something like

```bash
Robot Framework 5.x.y (Python 3.x.y)
```
### Install Robot Framework in a Virtual Environment

<Tabs>
<TabItem value="Windows" label="Windows" default>

We recommend to have a folder on your drive to store your projects, e.g. `C:\projects`.  
Open your `terminal`

```cmd
cd C:\projects
mkdir MyProject
cd MyProject
python -m venv .venv
.venv\Scripts\activate.bat
pip install robotframework
robot --version
```
You should see something like

```cmd
Robot Framework 5.x.y (Python 3.x.y)
```

You can type `pip show robotframework` to get more information about the installed version of Robot Framework and the install location.  
The virtual environment can be deactivated by typing `venv\Scripts\deactivate.bat`.

If you prefer to use `PowerShell` instead of `cmd`, you can use the following commands for activating and deactivating the virtual environment:  

- Activate: `venv\Scripts\activate.ps1`
- Deactivate: `venv\Scripts\deactivate.ps1`  

</TabItem>

<TabItem value="Linux" label="Linux">

We recommend to have a folder on your drive to store your projects, e.g. `~/projects`.  
Open your `terminal`

```cmd
cd ~/projects
mkdir MyProject
cd MyProject
python -m venv .venv
source .venv/bin/activate
pip install robotframework
robot --version
```
You should see something like

```cmd
Robot Framework 5.x.y (Python 3.x.y)
```

The virtual environment can be deactivated by typing `source .venv/bin/deactivate`.

</TabItem>

</Tabs>

![Install Robot Framework in Virtual Environment](/img/getting_started/installvenvwin.gif)

## Install IDE and Extensions
Several IDEs and Code Editors support the development of Robot Framework tests.  
The support ranges from simple code-highlighting, code-completion to test execution and debugging.  
We list several IDEs and Extensions here, but there are many more.

### Visual Studio Code
An Open Source and Lightweight Code-Editor developed by Microsoft.
https://code.visualstudio.com/
It provides extensions for a lot of different languages and technologies.

![VS Code](/img/vscode_site.png)

Popular extensions for Robot Framework:  
- [Robot Code](https://marketplace.visualstudio.com/items?itemName=d-biehl.robotcode)
- [Robot Framework Language Server](https://marketplace.visualstudio.com/items?itemName=robocorp.robotframework-lsp)

#### Install Visual Studio Code

See the [VS Code setup guide](https://code.visualstudio.com/docs/setup/setup-overview) for more information.

<Tabs>
<TabItem value="Windows" label="Windows" default>

1. Download the Windows installer from [Visual Studio Code](https://code.visualstudio.com/download)
2. Run the Installer with default settings
3. Start Visual Studio Code either by
    1. Pressing `Windows key + R`, typing `code` and pressing `Enter`
    2. Opening the start menu, searching for `Visual Studio Code` and clicking on it

</TabItem>

<TabItem value="Linux Snap" label="Linux Snap">

1. Open a terminal 
2. Execute `sudo snap install code --classic`
3. Start Visual Studio Code by executing `code`

</TabItem>
<TabItem value="Linux Deb" label="Linux Deb">

1. Download the deb package from [Visual Studio Code](https://code.visualstudio.com/download)
2. Open a terminal
3. Type `sudo dpkg -i <path_to_deb_package>`  
e.g. `sudo dpkg -i ~/Downloads/code_1.65.2-1646927742_amd64.deb`
4. Start Visual Studio Code by executing `code`

</TabItem>
<TabItem value="Linux Rpm" label="Linux Rpm">

1. Download the rpm package from [Visual Studio Code](https://code.visualstudio.com/download)
2. Open a terminal
3. Type `sudo rpm -i <path_to_rpm_package>`  
e.g. `sudo rpm -i ~/Downloads/code-1.65.2-1646927812.el7.x86_64.rpm`
4. Start Visual Studio Code by executing `code`

</TabItem>

</Tabs>

#### Visual Studio Code Extensions

:::caution 
Make sure that only a **single** Robot Framework extension is installed.
:::

<Tabs>
<TabItem value="Robot Code" label="Robot Code">

[RobotCode](https://marketplace.visualstudio.com/items?itemName=d-biehl.robotcode) is a Visual Studio Code extension for Robot Framework.

![RobotCode](/img/robotcode.png)

1. Open Visual Studio Code
2. Click on Extensions icon or press `Ctrl + Shift + X`
3. Search for `RobotCode` and click on it
4. Click on `Install`

</TabItem>
<TabItem value="Robot Framework Language Server" label="Robot Framework Language Server">

[Robot Framework Language Server](https://marketplace.visualstudio.com/items?itemName=robocorp.robotframework-lsp) is a Visual Studio Code extension for Robot Framework.

![Robot Framework Language Server](/img/rflsp.png)

1. Open Visual Studio Code
2. Click on Extensions icon or press `Ctrl + Shift + X`
3. Search for `Robot Framework Language Server` and click on it
4. Click on `Install`

</TabItem>

</Tabs>

### PyCharm

[PyCharm](https://www.jetbrains.com/pycharm/) is a free and open-source IDE for Python.

Popular extensions for Robot Framework:
- [Robot Framework Language Server](https://plugins.jetbrains.com/plugin/16086-robot-framework-language-server)
- [Intellibot (patched)](https://plugins.jetbrains.com/plugin/17424-intellibot-patched)

<iframe width="560" height="315" src="https://www.youtube.com/embed/srgZ3eQ6erw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Install PyCharm

See the [PyCharm installation instructions](https://www.jetbrains.com/help/pycharm/2021.3/installation-guide.html) for more information.

There two installation approaches
- The recommended one by JetBrains using the [Toolbox App](https://www.jetbrains.com/help/toolbox/app/installation.html).
- The alternative [stand alone installation](https://www.jetbrains.com/help/pycharm/2021.3/installation-guide.html#standalone)

Make sure to install the free `PyCharm Community Edition` and not the `PyCharm Professional` version.

#### PyCharm extensions

Make sure that only one single Robot Framework extension is installed.

##### Robot Framework Language Server

1. Press `Ctrl + Alt + S` to open the settings dialog
2. Select `Plugins`
3. Select the `Marketplace` tab
4. Search for `Robot Framework Language Server` and click on `Install`

##### IntelliBot #patched

:::caution 
It is **no longer recommended** to use IntelliBot.
:::

1. Press `Ctrl + Alt + S` to open the settings dialog
2. Select `Plugins`
3. Select the `Marketplace` tab
4. Search for `IntelliBot #patched` and click on `Install`

## Debugging Robot Framework Tests 

### Visual Studio Code with RobotCode

Add a breakpoint to your test suite or resource file, by clicking on the left-hand side of the line.  
![Breakpoint](/img/VSC_AddBreakpoint.png)

Right-Click on the `Play` button  
![Play Button](/img/VSC_RBTCD_PlayBtn.png)

Select `Debug Test` from the context menu.  
Test Execution will begin and stop at the breakpoint.  
![Debug Test](/img/VSC_RBTCD_Debug.png)

Use `Debug Toolbar` to select actions like step over, step into, step out, continue, pause, etc.  
![Debug Toolbar](/img/VSC_DebugToolbar.png)

Run Robot Frameworm commands while debugging from `Debug Console`.  
Commands needs to start with `! `  
![Debug Console](/img/VSC_RBTCD_executeDebugCommands.png)
## Other Recommendations

### Managing Dependencies
