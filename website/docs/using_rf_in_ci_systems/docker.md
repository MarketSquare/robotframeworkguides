---
sidebar_position: 1
sidebar_label: Docker Images
title: Docker Images for Robot Framework
---

## Docker

Check out the [official Docker Documentation](https://docs.docker.com/get-started/overview/) for more information about Docker.

### Installation

If you want to build Dockerimages and run containers on your local machine, you need to install Docker. You can find the installation instructions for your operating system on the [Docker website](https://docs.docker.com/install/).

#### Docker Desktop

Docker Desktop is an easy-to-install application for your Mac or Windows environment that enables you to start coding and containerizing in minutes. Docker Desktop includes everything you need to build, run, and share containerized applications directly from your machine. 

However, while Docker itself is open source, Docker Desktop is not. Docker Desktop is a **commercial product** 💰 developed by Docker, Inc. that includes additional features and functionality beyond the open source Docker Engine.  

:::note
Commercial use of Docker Desktop in larger enterprises (more than 250 employees OR more than $10 million USD in annual revenue) and in government entities requires a **paid subscription**.
:::

#### Alternatives to Docker Desktop

##### Linux
You can install Docker on your Linux machine without using Docker Desktop.
Please find more information on the [here](https://docs.docker.com/engine/install/).

Make sure you follow the instructions for the `Server` installation.  
For example the installation instructions for [Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

##### Windows

You can install Docker on your Windows machine also **without using Docker Desktop**. 

For that, you need to   
- Set up a virtual machine using the WSL 2 (Windows Subsystem for Linux)
- Install Docker Engine in the WSL 2 VM (following the instructions for Linux)

You can find more information in the guide [How To Install Docker Without Docker Desktop On Windows](https://www.paulsblog.dev/how-to-install-docker-without-docker-desktop-on-windows/).

The [guide](https://www.paulsblog.dev/how-to-install-docker-without-docker-desktop-on-windows/) will explain how to
- Enable the WSL 2 feature on Windows
- Install a Linux distribution from the Microsoft Store
- Install Docker Engine in the WSL 2 VM
- Configure Docker to start on boot
- Install Docker Compose
- Integrate Docker commands into your PowerShell 

## Creating a Robot Framework Dockerimage

You can choose from a lot of different base images to build your own Docker image.  
One possibility is to use one of the the official [python](https://hub.docker.com/_/python) images.  

As they already contain `python` and `pip`, you can install `robotframework` and other libraries using pip easily.  
There are different tags for different python versions and operating systems.

``` Dockerfile title="Dockerfile"
FROM python:3
RUN pip install robotframework
```

### Examples

To **build** the examples below, you can use the following command:

``` bash
docker build -t my-robotframework-dockerimage .
```	

When you **run** the container, it makes sense to mount the folder containing your tests into the container.  
You can do that using the `-v` option.
Let's assume the folder is located at `/home/user/my-project/` on your local machine.  

``` bash	title="Folder structure"
my-project/
├── Dockerfile
├── tests/
│   └── testsuite.robot
└── results/
```

The following command will run the container and mount the folders `my-project/` into the container.  
The tests in the folder `my-project/tests` will be executed and the results will be written into the folder `my-project/results`.

That way, you can easily run your tests in a container and have the results on your local machine.

``` bash
docker run -it --rm -v /home/user/my-project:/my-project my-robotframework-dockerimage bash -c "robot --outputdir /project/results  /my-project/tests"
```


#### Simple Python Dockerimage with Robot Framework

A very simple python image, which only adds robotframework  

``` Dockerfile title="Dockerfile"
FROM python:3
RUN pip install robotframework
```

You can also add your python dependencies into a file `requirements.txt` and then install them using `pip install -r requirements.txt`.

```bash title="Folder structure"
.
├── Dockerfile
└── requirements.txt
```

```txt title="requirements.txt"
robotframework
robotframework-requests
robotframework-datadriver
```

``` Dockerfile title="Dockerfile"
FROM python:3

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
```

#### Dockerimage with Robot Framework and Browser Library

An image containing robotframework and robotframework-browser.  
It is based on `playwright` baseimage, as it contains necessary dependencies like nodejs and npm.
``` Dockerfile title="Dockerfile"
FROM mcr.microsoft.com/playwright:focal
USER root
RUN apt-get update
RUN apt-get install -y python3-pip
USER pwuser
RUN pip3 install --user robotframework
RUN pip3 install --user robotframework-browser
RUN ~/.local/bin/rfbrowser init
ENV NODE_PATH=/usr/lib/node_modules
ENV PATH="/home/pwuser/.local/bin:${PATH}"
```


## Popular Docker Images for Robot Framework

### marketsquare/robotframework-browser

https://github.com/MarketSquare/robotframework-browser/tree/main/docker

``` bash
docker pull marketsquare/robotframework-browser
```

The image comes with latest robotframework-browser and robotframework, and with pre-initialized browsers and other dependencies for running headful tests in the container.

Example usage:
``` bash
docker run --rm -v $(pwd)/atest/test/:/test --ipc=host --user pwuser --security-opt seccomp=seccomp_profile.json marketsquare/robotframework-browser:latest bash -c "robot --outputdir /test/output /test"
```

`docker run -v` is used to mount the directory containing tests on the supervising machine. In this example robot output will also be output inside the test directory

### ppodgorsek/robot-framework

https://github.com/ppodgorsek/docker-robot-framework


<details>
  <summary>Check the list of included packages</summary>
  The image contains latest robot-framework and a huge collection of helpful libraries.

* [Robot Framework](https://github.com/robotframework/robotframework)
* [Robot Framework Browser Library](https://github.com/MarketSquare/robotframework-browser)
* [Robot Framework DatabaseLibrary](https://github.com/franz-see/Robotframework-Database-Library)
* [Robot Framework Datadriver](https://github.com/Snooz82/robotframework-datadriver)
* [Robot Framework DateTimeTZ](https://github.com/testautomation/DateTimeTZ)
* [Robot Framework Faker](https://github.com/guykisel/robotframework-faker)
* [Robot Framework FTPLibrary](https://github.com/kowalpy/Robot-Framework-FTP-Library)
* [Robot Framework IMAPLibrary 2](https://pypi.org/project/robotframework-imaplibrary2/)
* [Robot Framework Pabot](https://github.com/mkorpela/pabot)
* [Robot Framework Requests](https://github.com/bulkan/robotframework-requests)
* [Robot Framework SeleniumLibrary](https://github.com/robotframework/SeleniumLibrary)
* [Robot Framework SSHLibrary](https://github.com/robotframework/SSHLibrary)
* [Axe Selenium Library](https://github.com/mozilla-services/axe-selenium-python)
* Firefox
* Chromium
* [Amazon AWS CLI](https://pypi.org/project/awscli/)

</details>


This container can be run using the following command:

``` bash
    docker run \
        -v <local path to the reports' folder>:/opt/robotframework/reports:Z \
        -v <local path to the test suites' folder>:/opt/robotframework/tests:Z \
        ppodgorsek/robot-framework:<version>
```