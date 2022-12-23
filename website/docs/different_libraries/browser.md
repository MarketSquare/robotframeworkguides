---
sidebar_label: Browser Library
title: Browser Library
---

[Robot Framework](https://robotframework.org) Browser library powered by [Playwright](https://playwright.dev/). Moving browser automation to year 2021!

Aiming for :rocket: speed, :white_check_mark: reliability and :microscope: visibility.

See [keyword documentation](https://marketsquare.github.io/robotframework-browser/Browser.html) and
[web page](https://robotframework-browser.org/) for more details.

## Installation instructions

Only Python 3.7 or newer is supported.

1. Install node.js e.g. from https://nodejs.org/en/download/
2. Update pip `pip install -U pip` to ensure latest version is used
3. Install robotframework-browser from the commandline: `pip install robotframework-browser`
4. Install the node dependencies: run `rfbrowser init` in your shell
  - if `rfbrowser` is not found, try `python -m Browser.entry init`

:::caution 
Don't forget to install node.js  
https://nodejs.org/en/download/  
The LTS version is recommended.
:::

You can check your node.js version with `node --version` and your npm version with `npm --version`.

```shell
$ node --version
v18.12.0
$ npm --version
8.19.2
```

```shell
$ pip install robotframework-browser

$ rfbrowser init
Installing playwright...
Installing playwright-chromium...
Installing playwright-firefox...
Installing playwright-webkit...
Done!
```


See examples for [ToDo App](/docs/examples/todo), [MFA Login](/docs/examples/mfa_login) and [Vehice Insurance](/docs/examples/insurance).