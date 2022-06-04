---
sidebar_position: 2
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
- Push the changes to GitHub (only the changed .md files and other static files - **Do Not push the built .html files**)
- Build and Deployment will be handled by GitHub Actions


# GitHub Repository

## Branches

There are two branches in the project:

- `main` is the default branch and is used to maintain the documentation
- `gh-pages` is only used for the deployment of the `.html` documentation to GitHub Pages

# Updating Documentation

## Run the development server

- Go to directory containing the `package.json` file
- Download dependencies via `npm install`
- Run the development server via `npm run start`
- Open the browser and navigate to `http://localhost:3000`
- Make changes to the documentation files and check the changes in real time

## Create Build and Push

- Run the build via `npm run build`
- Test the build locally with `npm run serve`
- Open the browser and navigate to `http://localhost:3000` to see the build
- Commit the changes to the repository
- Push the changes to GitHub (only the changed .md files and other static files - **Do Not push the built .html files**)
