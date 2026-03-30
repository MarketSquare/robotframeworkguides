---
sidebar_position: 5
sidebar_label: Robot Framework Dashboard
title: Robot Framework Dashboard
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Robot Framework Dashboard](https://github.com/timdegroot1996/robotframework-dashboard) is a powerful tool for analyzing and visualizing test results across multiple Robot Framework runs. It processes output XML files, stores test execution data in a SQLite database, and generates an interactive HTML dashboard. The dashboard utilizes Chart.js, Datatables, and Bootstrap for clear and structured visual representation.

![Dashboard](/img/robotdashboard.png)

## 🔍 Key features:
- Multi-run analysis: compare results from multiple runs and track trends over time.
- Interactive dashboard pages: Overview, Dashboard, Compare, suite/test/keyword drilldowns.
- Graphs & tables: pass/fail, duration, status, flaky tests, historical trends, most failed tests.
- Filtering and sorting: run, suite, test, keyword, tags, metadata, date range, and status.
- Comparison mode: side-by-side view of up to 4 runs with delta statistics.
- Log linking: click from dashboard entries to Robot Framework logs (local and server setups).
- Customization: config defaults, layout persistence, graph options, dashboard sections.
- Storage/extendability: SQLite backend plus custom database class support (MySQL/custom).
- Server mode: optional HTTP service that includes an admin page, an API and hosts the dashboard.
- Listener integration: runtime updates via listener to keep dashboard updated after each run.

## 🚀 Install:
```bash
pip install robotframework-dashboard
# for server/listener features
pip install robotframework-dashboard[server]
# or
pip install robotframework-dashboard[all]
```

## 📖 Quick links:
- [Working Example Dashboard](https://marketsquare.github.io/robotframework-dashboard/example/robot_dashboard.html)
- [Documentation](https://marketsquare.github.io/robotframework-dashboard/)
- [PyPi](https://pypi.org/project/robotframework-dashboard/)
- [GitHub](https://github.com/marketsquare/robotframework-dashboard)

## 🎬 RoboCon Talk
See also my 2025 [RoboCon](https://robocon.io) talk, where I explain robotdashboard and its use cases. Note that the UI has improved significantly since then.

[![Robocon 2025 talk](https://img.youtube.com/vi/olf1_pd9YfM/0.jpg)](https://www.youtube.com/watch?v=olf1_pd9YfM)

## 📋 Version requirements:
- Robot Framework 6.0+
- Python 3.8+