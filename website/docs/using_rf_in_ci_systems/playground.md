---
sidebar_position: 2
---

# Play With Docker

You can use the [Play With Docker](https://labs.play-with-docker.com/) service to try out Docker without installing it on your computer.  
You need to create an account on [Docker Hub](https://hub.docker.com/) to use this service.
You can [Register here](https://hub.docker.com/signup).

Please make sure that you **don't upload or enter any sensitive data** to this service.

Once you login, you can start a new instance by clicking on the `Add New Instance` button.

![Play With Docker](/img/docker/playground-new-instance.png)

:::note

You can paste commands into the terminal by pressing `Ctrl+Shift+V`  
Just in case you are wondering, the `Ctrl+V` shortcut doesn't work in this terminal.

:::

## Run a container and expose a port

Type the following command into the terminal:

``` bash
docker run -d -p 80:80 docker/getting-started:pwd
```

After the operation is complete, click on the `OPEN PORT` button (next to the IP) and enter `80` as the port number.

You should see the following page:

![101 Tutorial](/img/docker/playground-101-tutorial.png)

What you just did:

- You downloaded the Docker image `docker/getting-started:pwd` from the Docker Hub
- You started a container based on this image and exposed port 80 to the outside world
- You opened the port 80 in your browser and saw the result (the 101 tutorial page)

## Create a Test Suite and run it in a container

Next, we will do something more interesting.  
We will  
1. Create a Robot Framework test suite
2. Run a container with Robot Framework and execute the test suite
3. View the test results (html report) in another container

Create another new instance and run the following commands:

``` bash
mkdir tests
mkdir reports
touch tests/mysuite.robot
```

Click on the `EDITOR` button, navigate to the `tests` folder and open the `mysuite.robot` file.

![Editor](/img/docker/playground-editor.png)

Copy the following content into the file:

``` robotframework
*** Settings ***
Library   Browser
*** Test Cases ***
Example Test
    New Page    https://playwright.dev
    Get Text    h1    contains    Playwright
    Take Screenshot
```

Save the file and close the editor.

Run the following command to change the permissions of the `tests` and `reports` folders:

``` bash
chmod -R 777 tests reports
```

Now, run the following commands:

``` bash
docker run -t -v $(pwd)/tests:/opt/robotframework/tests -v $(pwd)/reports:/opt/robotframework/reports ppodgorsek/robot-framework
```

The Dockerimage `ppodgorsek/robot-framework` contains Robot Framework and the several other libraries.  
It will automatically execute all the test suites in the `/opt/robotframework/tests` folder and generate a report in the `/opt/robotframework/reports` folder.

After the test execution is complete, we want to serve the `log.html` and `report.html` files in a web browser.

To do that, we will run another container with the `nginx` image.

``` bash
docker run -d -p 80:80 -v $(pwd)/reports:/usr/share/nginx/html:ro nginx
```

Click on the `OPEN PORT` button and enter `80` as the port number.

A new tab will open in your browser and you get a `403 Forbidden` error.  
That error happens, because there is no `index.html` file in the `reports` folder.

However, if you add a `/log.html` at the end of the URL, you will see the `log.html` file.  
If you add a `/report.html` at the end of the URL, you will see the `report.html` file.  

The url should look like this:  
`http://ip<some-ip>-<some-identifier>-80.direct.labs.play-with-docker.com/log.html`