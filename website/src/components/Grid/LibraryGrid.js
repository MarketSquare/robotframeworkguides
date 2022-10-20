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
                name: 'URL',
                formatter: (_, row) => html(`<a href=${row.cells[2].data} target="blank" rel="noreferrer noopener">GitHub Page</a>`)
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
                "Web testing library that uses popular Selenium tool internally.",
                "https://github.com/MarketSquare/robotframework-browser",
                "browser",
                "UI, Web"
            ],
            [
                "SeleniumLibrary",
                "Web testing library that uses popular Selenium tool internally.",
                "https://github.com/robotframework/SeleniumLibrary/",
                "selenium",
                "UI, Web"
            ],
            [
                "RPA Framework",
                "Collection of open-source libraries and tools for Robotic Process Automation (RPA), designed to be used both with Robot Framework and Python.",
                "https://github.com/robocorp/rpaframework",
                "rpa",
                "UI, Web, Desktop, API, Database, RPA"
            ],
            [
                "Requests Library",
                "A Robot Framework library aimed to provide HTTP api testing functionalities by wrapping the well known Python Requests Library",
                "https://github.com/MarketSquare/robotframework-requests/",
                "requests",
                "API"
            ],
            [
                "Appium Library",
                "Android and iOS testing. Uses Appium internally.",
                "https://github.com/serhatbolsu/robotframework-appiumlibrary",
                "appium",
                "Mobile, UI"
            ],
            [
                "Database Library",
                "Python based library for database testing.",
                "https://github.com/franz-see/Robotframework-Database-Library",
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