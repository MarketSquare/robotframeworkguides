---
sidebar_position: 5
sidebar_label: Robot Framework Dashboard
title: Robot Framework Dashboard
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Robot Framework Dashboard](https://github.com/timdegroot1996/robotframework-dashboard) is a powerful tool for analyzing and visualizing test results across multiple Robot Framework runs. It processes output XML files, stores test execution data in a SQLite database, and generates an interactive HTML dashboard. The dashboard utilizes Chart.js, Datatables, and Bootstrap for clear and structured visual representation.

![Dashboard](/img/robotdashboard.png)

Key Features:
- Command-Line Interface: Provides options to upload runs, list runs, remove runs, and generate dashboards.
- Customization: Supports specifying custom database locations, dashboard filenames, and output tagging.
- Test Result Analysis: Parses Robot Framework output XML files and extracts key metrics.
- HTML Dashboard Generation: Creates an interactive dashboard with graphs and tables for detailed insights.
- Filtering and Sorting: Allows filtering by run, suite, test, keyword, and tags for precise analysis.
- Statistics & Trends: Displays pass/fail rates, durations, most failed tests, and failure messages.

The tool supports Robot Framework 6.x and 7.x, ensuring compatibility with various output formats.