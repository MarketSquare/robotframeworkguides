---
sidebar_position: 1
sidebar_label: Docker Images
title: Docker Images for Robot Framework
---

## Popular Docker Images for Robot Framework

### marketsquare/robotframework-browser

https://github.com/MarketSquare/robotframework-browser/tree/main/docker

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

## Creating your own Docker Image

You can choose from a lot of different base images to build your own Docker image.

### Examples


#### Simple Python Dockerimage with Robot Framework

A very simple python image, which only adds robotframework  

``` Dockerfile title="Dockerfile"
FROM python:3
RUN pip install robotframework
```

You can also add your python dependencies into a file `requirements.txt` and then install them using `pip install -r requirements.txt`.

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
