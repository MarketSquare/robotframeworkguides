---
sidebar_position: 99
sidebar_label: How to contribute
title: How to contribute
---

This documentation project is powered by [Docusaurus](https://docusaurus.io/) and maintained on [GitHub](https://github.com/MarketSquare/robotframeworkguides)

The basic steps to contribute to the project are:
- Fork the project on GitHub
- Clone the repository locally
- Install the project dependencies via `npm install`
- Update existing documentation files with the new content or add new files
- Run [Development Server](https://docusaurus.io/docs/installation#running-the-development-server) to see changes in real time on [localhost](http://localhost:3000)
- Build static html files with `npm run build`
- Test the build locally with `npm run serve`
- Commit the changes to the repository
- Push the changes to GitHub
- Deploy to GitHub Pages with `GIT_USER=<GITHUB_USERNAME> yarn deploy`


# GitHub Repository

## Branches

There are two branches in the project:

- `main` is the default branch and is used to maintain the documentation
- `gh-pages` is only used for the deployment of the `.html` documentation to GitHub Pages

## 