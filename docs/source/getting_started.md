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

### PyCharm

### Visual Studio Code

#### Windows

1. Go to [Visual Studio Code](https://code.visualstudio.com) website
2. Click on the `Download for Windows` button to download the installer `.exe` file
3. Run the installer with the default settings  
(enable the setting to `Create Desktop shortcut`, if you want to)
4. To run Visual Studio Code, you can either
    1. Type `code` in the terminal
    2. Double-click the Desktop shortcut
    3. Press `Windows key` and select Visual Studio Code from the Start Menu






#### RoboCorp Robot Framework Extension

#### RobotCode Extension

### RIDE

## Debugging Robot Framework Tests 

## Other Recommendations

### Managing Dependencies
