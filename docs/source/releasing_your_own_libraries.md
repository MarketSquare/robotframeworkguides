# Releasing your own Library

So, you created your own library for Robot Framework.
And you wonder: how can I publish it?
Things you typically want to do:  
* Code your library (in Python)
* Manage your dependencies
* Test your library via Unit Tests and Acceptance Tests
* Create a Keyword Documentation
* Publish to PyPi


To achieve those things, there are several helpers we can use:
* Use the python `invoke` package which makes it easier to execute re-curring tasks from the command line
* Use `poetry` to manage your dependencies, packaging and publishing
* Use some GitHub Actions to run tests or other jobs autmatically on your repository

Let's have a look at some topics which are not already covered by the Robot Framework User Guide in the chapter about 
[creating Test Libraries](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#creating-test-libraries)


## Creating Python Keyword Libraries

Create your Python Library for Robot Framework as described in the chapter about [creating Test Libraries](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#creating-test-libraries).

Some different names you might need to consider:  
* the name of your library (package name)
* the name of your GitHub repository
* the name of your pypi package (distribution name)

## Using GitHub to host your code

### GitHub Actions

## Using PyPi to publish your packages

## Using Poetry to manage your dependencies
