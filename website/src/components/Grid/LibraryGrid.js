import { Grid, html} from "gridjs";
import React from 'react'
import { useEffect, useRef } from 'react';

function LibraryGrid() {
    const wrapperRef = useRef(null);

    const grid = new Grid({
        columns: [
            {
                name: 'Name',
                width: '50%',
                formatter: (_, row) => html(`<div><a href=${row.cells[3].data} target="_self" rel="noreferrer noopener">${row.cells[0].data}</a><div>${row.cells[1].data}</div></div>`)
            },
            { 
                name: 'Description',
                hidden: true
              },
              { 
                name: 'URLs',
                formatter: (_, row) => 
                {
                    let html_content = ''
                    for (const [key, value] of Object.entries(row.cells[2].data)) {
                        html_content += `<div><a href=${value} target="blank" rel="noreferrer noopener">${key}</a></div>`
                      }
                      return html(html_content)
                }
                
              },
              { 
                name: 'LocalPage',
                hidden: true
              },

            {
                name: 'Type',
                formatter: (_, row) => html(`${row.cells[4].data}`)
            },
        ],
        data: [
            [
                "Browser Library",
                "Robot Framework Browser library powered by Playwright. Aiming for speed, reliability and visibility.",
                {GitHub: "https://github.com/MarketSquare/robotframework-browser", PyPI: "https://pypi.org/project/robotframework-browser/", Project: "https://robotframework-browser.org/", Docs: "https://marketsquare.github.io/robotframework-browser/Browser.html"},
                "browser",
                "UI, Web"
            ],
            [
                "SeleniumLibrary",
                "Web testing library that uses popular Selenium tool internally.",
                {GitHub: "https://github.com/robotframework/SeleniumLibrary/", PyPI: "https://pypi.org/project/robotframework-seleniumlibrary/", Docs: "https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html"},
                "selenium",
                "UI, Web"
            ],
            [
                "RPA Framework",
                "Collection of open-source libraries and tools for Robotic Process Automation (RPA), designed to be used both with Robot Framework and Python.",
                 {GitHub: "https://github.com/robocorp/rpaframework", PyPI: "https://pypi.org/project/rpaframework/", Project: "https://rpaframework.org/"},
                "rpa",
                "UI, Web, Desktop, API, Database, RPA"
            ],
            [
                "Requests Library",
                "A Robot Framework library aimed to provide HTTP api testing functionalities by wrapping the well known Python Requests Library",
                 {GitHub: "https://github.com/MarketSquare/robotframework-requests/", PyPI: "https://pypi.org/project/robotframework-requests/", Docs: "https://marketsquare.github.io/robotframework-requests/doc/RequestsLibrary.html"},
                "requests",
                "API"
            ],
            [
                "Appium Library",
                "Android and iOS testing. Uses Appium internally.",
                 {GitHub: "https://github.com/serhatbolsu/robotframework-appiumlibrary", PyPI: "https://pypi.org/project/robotframework-appiumlibrary/", Docs: "https://serhatbolsu.github.io/robotframework-appiumlibrary/AppiumLibrary.html"},
                "appium",
                "Mobile, UI"
            ],
            [
                "Database Library",
                "Python based library for database testing.",
                 {GitHub: "https://github.com/franz-see/Robotframework-Database-Library", PyPI: "https://pypi.org/project/robotframework-databaselibrary/", Project: "http://franz-see.github.io/Robotframework-Database-Library/", Docs: "http://franz-see.github.io/Robotframework-Database-Library/api/1.2.2/DatabaseLibrary.html"},
                "database",
                "Database"
            ],
        ],
        sort: true,
        search: {
            enabled: true
        }
    });

    useEffect(() => {
        grid.render(wrapperRef.current);
    });

    return <div ref={wrapperRef} />;
}

export default LibraryGrid;