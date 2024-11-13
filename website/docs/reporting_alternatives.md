---
sidebar_label: Reporting Test Results
title: Reporting Test Results
---

## Other Reporting Tools and Dashboards

### Report Portal
[Report Portal](https://reportportal.io/) is an AI-powered Test Automation Dashboard to acquire, aggregate and analyze test reports
to ascertain release health.

It is integrated with Robot Framework via a listener [robotframework-reportportal](https://github.com/reportportal/agent-Python-RobotFramework) or via a [python script](https://github.com/reportportal/agent-Python-RobotFramework/blob/master/robotframework_reportportal/post_report.py)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Xci19TAiO50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Allure
[Allure Report](https://allurereport.org/) is a flexible lightweight multi-language test report tool that not only shows a very concise representation of what have been tested in a neat web report form, but allows everyone participating in the development process to extract maximum of useful information from everyday execution of tests.

It is integrated with Robot Framework via a listener [robotframework-allure](https://github.com/allure-framework/allure-python). A detailed integration guide is available on the official website: https://allurereport.org/docs/robotframework/

### Grafana
Grafana can be used to visualize test results in a dashboard.  
https://grafana.com/grafana/dashboards/11541-robot-framework-grafana-dashboard-part-1/

Images
![Grafana Dashboard](https://cognitiveqe.com/wp-content/uploads/2019/12/Robot_Framework_Granfana_Dashboard_Final.png)

Example with Robot Framework Testarchiver, PostgreSQL and Grafana  
https://cognitiveqe.com/robot-framework-test-results-in-grafana-postgresql/

Example with Robot Framework DBbot, MySQL and Grafana  
https://cognitiveqe.com/robot-framework-grafana-dashboard/

Blog post about Robot Framework, Jenkins Plugin, InfluxDB and Grafana
https://www.eficode.com/blog/rf-jenkins-grafana

### Robot Framework Metrics

[Robot Framework Metrics](https://github.com/adiralashiva8/robotframework-metrics) creates custom HTML report (dashboard view) by parsing robotframework output.xml file

 - __Sample Report__ [link](https://rfmetrics.netlify.com/)
