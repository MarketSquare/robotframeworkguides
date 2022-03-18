# Getting Started
This chapter will help you to get started with Robot Framework.

So basically how to
- install Python
- install Robot Framework
- install an IDE and Extensions for code-completion and debugging

<iframe width="560" height="315" src="https://www.youtube.com/embed/1jdjogCnsDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Install Python

### Windows

Depending on your permissions, you can install Python for all Users (with admin permission) or for the current User only.  
This setting can be changed via checkbox `Install launcher for all users`.
Both options will work with Robot Framework.

1. Download [Python](https://www.python.org/downloads/) installer
2. Run the installer and
    1. add Python to the system PATH via checkbox `Add Python 3.X to PATH`
    2. (optional) install to a sub-folder on root of your drive (e.g. C:\Python3.X)
3. Open a command line by
    1. pressing `Windows key + R`
    2. typing `cmd` and pressing `Enter`
4. Type `python -V`
5. You should see something like `Python 3.10.2`

### Linux

1. Open a terminal by either
    1. pressing `Ctrl` + `Alt` + `T`
    2. pressing the `Windows key` and typing `terminal`
    3. right-clicking in your file explorer and selecting `Open in Terminal`
2. Type `sudo apt update`
3. Type `sudo apt install python3 python3-pip` to install Python 3.X and pip
4. Type `python3 -V`
5. You should see something like `Python 3.10.2`

If you only have python3 installed and you want to type `python` instead of `python3`, you can do so by running `sudo apt install python-is-python3`

## Install Robot Framework

All following chapters assume you have Python3 and pip installed.
We use the commands `pip` and `python` to install packages or run Python scripts.  
Depending on your setup, those commands may be `pip3` and `python3` or `pip` and `python`.

When we mention the word `terminal` in the following chapters, we mean both - a linux terminal (e.g. `bash`) or a windows command line (`cmd`).

Python allows you to install modules via `pip`.  
By default, those modules are installed in the global Python environment.

But especially when working on multiple projects, it is more convenient to have a separate Python environment for each project with all the required packages installed (like `robotframework` or additional libraries like `robotframework-seleniumlibrary`).  
To separate the global Python environment from the project environment, you can use a `virtual environment`.  
We will cover both approaches in the following chapters.


### Install Robot Framework globally

1. Open your terminal
2. Type `pip install robotframework`
3. Type `robot --version`
4. You should see something like `Robot Framework 4.x.y (Python 3.x.y)`

### Install Robot Framework in a Virtual Environment

#### Windows

We recommend to have a folder on your drive to store your projects, e.g. `C:\projects`.

1. Open a terminal
2. Type `mkdir C:\projects` to create a folder for your projects
3. Type `cd C:\projects` to go to the folder 
4. Type `mkdir <project_name>` to create a folder for your project  
e.g. `mkdir MyProject`
5. Type `cd MyProject` to go to the folder
6. Type `python -m venv venv` to create a virtual environment
7. Type `venv\Scripts\activate.bat` to activate the virtual environment
8. Type `pip install robotframework` to install Robot Framework
9. Type `robot --version`
10. You should see something like `Robot Framework 4.x.y (Python 3.x.y)`

You can type `pip show robotframework` to get more information about the installed version of Robot Framework and the install location.  
The virtual environment can be deactivated by typing `venv\Scripts\deactivate.bat`.

If you prefer to use `PowerShell` instead of `cmd`, you can use the following commands for activating and deactivating the virtual environment:

- Activate: `venv\Scripts\activate.ps1`
- Deactivate: `venv\Scripts\deactivate.ps1`

#### Linux

1. Open a terminal
2. Type `cd` to go to your home folder
2. Type `mkdir projects` to create a folder for your projects
3. Type `cd projects` to go to the folder 
4. Type `mkdir <project_name>` to create a folder for your project  
e.g. `mkdir MyProject`
5. Type `cd MyProject` to go to the folder
6. Type `python -m venv venv` to create a virtual environment
7. Type `source venv/bin/activate` to activate the virtual environment  
The prefix `(venv)` will be shown in the terminal, after you have activated the virtual environment.
8. Type `pip install robotframework` to install Robot Framework
9. Type `robot --version`
10. You should see something like `Robot Framework 4.x.y (Python 3.x.y)`

You can type `pip show robotframework` to get more information about the installed version of Robot Framework and the install location.  
The virtual environment can be deactivated by typing `source venv/bin/deactivate`.

## Install IDE and Extensions
Several IDEs and Code Editors support the development of Robot Framework tests.  
The support ranges from simple code-highlighting, code-completion to test execution and debugging.  
We list several IDEs and Extensions here, but there are many more.

### Visual Studio Code
An Open Source and Lightweight Code-Editor developed by Microsoft.
https://code.visualstudio.com/
It provides extensions for a lot of different languages and technologies.

![VS Code](img/vscode_site.png)

Popular extensions for Robot Framework:  
- [Robot Code](https://marketplace.visualstudio.com/items?itemName=d-biehl.robotcode)
- [Robot Framework Language Server](https://marketplace.visualstudio.com/items?itemName=robocorp.robotframework-lsp)

#### Install Visual Studio Code

See the [VS Code setup guide](https://code.visualstudio.com/docs/setup/setup-overview) for more information.

##### Windows

1. Download the Windows installer from [Visual Studio Code](https://code.visualstudio.com/download)
2. Run the Installer with default settings
3. Start Visual Studio Code either by
    1. Pressing `Windows key + R`, typing `code` and pressing `Enter`
    2. Opening the start menu, searching for `Visual Studio Code` and clicking on it

##### Linux

###### Install via snap

1. Open a terminal 
2. Execute `sudo snap install code --classic`
3. Start Visual Studio Code by executing `code`

###### Install via deb

1. Download the deb package from [Visual Studio Code](https://code.visualstudio.com/download)
2. Open a terminal
3. Type `sudo dpkg -i <path_to_deb_package>`  
e.g. `sudo dpkg -i ~/Downloads/code_1.65.2-1646927742_amd64.deb`
4. Start Visual Studio Code by executing `code`

###### Install via rpm

1. Download the rpm package from [Visual Studio Code](https://code.visualstudio.com/download)
2. Open a terminal
3. Type `sudo rpm -i <path_to_rpm_package>`  
e.g. `sudo rpm -i ~/Downloads/code-1.65.2-1646927812.el7.x86_64.rpm`
4. Start Visual Studio Code by executing `code`

#### Visual Studio Code Extensions

Make sure that only one single Robot Framework extension is installed.

##### RobotCode

[RobotCode](https://marketplace.visualstudio.com/items?itemName=d-biehl.robotcode) is a Visual Studio Code extension for Robot Framework.

![RobotCode](img/robotcode.png)

1. Open Visual Studio Code
2. Click on Extensions icon or press `Ctrl + Shift + X`
3. Search for `RobotCode` and click on it
4. Click on `Install`

##### Robot Framework Language Server

[Robot Framework Language Server](https://marketplace.visualstudio.com/items?itemName=robocorp.robotframework-lsp) is a Visual Studio Code extension for Robot Framework.

![Robot Framework Language Server](img/rflsp.png)

1. Open Visual Studio Code
2. Click on Extensions icon or press `Ctrl + Shift + X`
3. Search for `Robot Framework Language Server` and click on it
4. Click on `Install`

### PyCharm

[PyCharm](https://www.jetbrains.com/pycharm/) is a free and open-source IDE for Python.

Popular extensions for Robot Framework:
- [Robot Framework Language Server](https://plugins.jetbrains.com/plugin/16086-robot-framework-language-server)
- [Intellibot (patched)](https://plugins.jetbrains.com/plugin/17424-intellibot-patched)

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

1. Press `Ctrl + Alt + S` to open the settings dialog
2. Select `Plugins`
3. Select the `Marketplace` tab
4. Search for `IntelliBot #patched` and click on `Install`

### RIDE

## Debugging Robot Framework Tests 

## Other Recommendations

### Managing Dependencies
