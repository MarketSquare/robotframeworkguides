# Dealing with flaky tests

## Re-Run Failed Tests and merge results

It is possible to run the same test suite(s) multiple times - but only re-run the failed tests. Afterwards the results can be merged into a single results file using `rebot`. 
You can find the required steps in the [Robot Framework User Guide](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#merging-outputs)

```shell
robot --output original.xml tests                          # first execute all tests
robot --rerunfailed original.xml --output rerun.xml tests  # then re-execute failing
rebot --merge original.xml rerun.xml                       # finally merge results
```

## Try and Except

## Wait Until Keyword Succeeds
