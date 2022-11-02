import { Grid, html } from "gridjs";
import React from 'react'
import { useEffect, useRef } from 'react';

function LibraryGrid() {
    const wrapperRef = useRef(null);

    const libraryData = [
        {
            name: "Browser Library",
            description: "Robot Framework Browser library powered by Playwright. Aiming for speed, reliability and visibility.",
            localpage: "browser",
            urls: { GitHub: "https://github.com/MarketSquare/robotframework-browser", PyPI: "https://pypi.org/project/robotframework-browser/", Project: "https://robotframework-browser.org/", Docs: "https://marketsquare.github.io/robotframework-browser/Browser.html" },
            tags: "UI, Web"
        },
        {
            name: "Selenium Library",
            description: "Web testing library that uses popular Selenium tool internally.",
            localpage: "selenium",
            urls: { GitHub: "https://github.com/robotframework/SeleniumLibrary/", PyPI: "https://pypi.org/project/robotframework-seleniumlibrary/", Docs: "https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html" },
            tags: "UI, Web"
        },
        {
            name: "RPA Framework",
            description: "Collection of open-source libraries and tools for Robotic Process Automation (RPA), designed to be used both with Robot Framework and Python.",
            localpage: "rpa",
            urls: { GitHub: "https://github.com/robocorp/rpaframework", PyPI: "https://pypi.org/project/rpaframework/", Project: "https://rpaframework.org/" },
            tags: "UI, Web, Desktop, API, Database, RPA"
        },
        {
            name: "Requests Library",
            description: "A Robot Framework library aimed to provide HTTP api testing functionalities by wrapping the well known Python Requests Library",
            localpage: "requests",
            urls: { GitHub: "https://github.com/MarketSquare/robotframework-requests/", PyPI: "https://pypi.org/project/robotframework-requests/", Docs: "https://marketsquare.github.io/robotframework-requests/doc/RequestsLibrary.html" },
            tags: "API"
        },
        {
            name: "Appium Library",
            description: "Android and iOS testing. Uses Appium internally.",
            localpage: "appium",
            urls: { GitHub: "https://github.com/serhatbolsu/robotframework-appiumlibrary", PyPI: "https://pypi.org/project/robotframework-appiumlibrary/", Docs: "https://serhatbolsu.github.io/robotframework-appiumlibrary/AppiumLibrary.html" },
            tags: "Mobile, UI"
        },
        {
            name: "Database Library",
            description: "Python based library for database testing.",
            localpage: "database",
            urls: { GitHub: "https://github.com/franz-see/Robotframework-Database-Library", PyPI: "https://pypi.org/project/robotframework-databaselibrary/", Project: "http://franz-see.github.io/Robotframework-Database-Library/", Docs: "http://franz-see.github.io/Robotframework-Database-Library/api/1.2.2/DatabaseLibrary.html" },
            tags: "Database"
        },
        {
            name: "Standard Library",
            description: "Logging, File Handling, Operating System, Process, String, and XML and much more",
            localpage: "standard",
            urls: { GitHub: "https://github.com/robotframework/robotframework/tree/master/src/robot/libraries", Project: "https://robotframework.org/robotframework/#standard-libraries", Docs: "https://robotframework.org/robotframework/#standard-libraries" },
            tags: "Process, File, OS, XML, String, Logging"
        },
    ];
    const grid = new Grid({
        columns: [
            {
                name: 'Name',
                width: '50%',
                formatter: (_, row, column) => {
                    return html(`<div><a href=${row.cells[2].data} target="_self" rel="noreferrer noopener">${row.cells[0].data}</a></div>${row.cells[1].data}<div></div>`)
                }
            },
            {
                name: 'Description',
                hidden: true
            },
            {
                name: 'Localpage',
                hidden: true
            },

            {
                name: 'URLs',
                formatter: (_, row) => {
                    let html_content = ''
                    for (const [key, value] of Object.entries(row.cells[3].data)) {
                        html_content += `<div><a href=${value} target="blank" rel="noreferrer noopener">${key}</a></div>`
                    }
                    return html(html_content)
                }

            },
            {
                name: 'Tags',
            },
        ],
        data: libraryData,
        sort: true,
        search: {
            enabled: true,
            ignoreHiddenColumns: false
        },
    });

    useEffect(() => {
        grid.render(wrapperRef.current);
    });

    return <div ref={wrapperRef} />;
}

export default LibraryGrid;