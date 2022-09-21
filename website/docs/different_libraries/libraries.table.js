import React from "react";

export const libraries = [
    {
        title: "Browser Library",
        description: "Web testing library that uses popular Selenium tool internally.",
        isUI: "✅",
        isWeb: "✅",
        url: "https://github.com/MarketSquare/robotframework-browser",
    },
    {
        title: "SeleniumLibrary",
        description: "A modern web testing library powered by Playwright. Aiming for speed, reliability and visibility.",
        isUI: "✅",
        isWeb: "✅",
        url: "https://github.com/robotframework/SeleniumLibrary/",
    },
    {
        title: "RPA Framework",
        description: "Collection of open-source libraries and tools for Robotic Process Automation (RPA), designed to be used both with Robot Framework and Python.",
        isUI: "✅",
        isWeb: "✅",
        isDesktop: "✅",
        isAPI: "✅",
        isData: "✅",
        url: "https://github.com/robocorp/rpaframework",
    },
    {
        title: "Requests Library",
        description: "A Robot Framework library aimed to provide HTTP api testing functionalities by wrapping the well known Python Requests Library",
        isAPI: "✅",
        url: "https://github.com/MarketSquare/robotframework-requests/",
    },
    {
        title: "Appium Library",
        description: "Android and iOS testing. Uses Appium internally.",
        isMobile: "✅",
        isUI: "✅",
        url: "https://github.com/serhatbolsu/robotframework-appiumlibrary",
    },
    {
        title: "Database Library",
        description: "Python based library for database testing.",
        isData: "✅",
        url: "https://github.com/franz-see/Robotframework-Database-Library",
    },
];

export const columns = [
    {
        Header: "Name",
        accessor: "title",
        className: "data-table left",
        Cell: ({ cell: { value }, row: { original } }) => (
            <div>
                <a href={`${original.url}`} target="blank" rel="noreferrer noopener">
                    {value}
                </a>
                <div>{`${original.description}`}</div>
            </div>
        ),
    },
    {
        Header: "UI",
        accessor: "isUI",
        className: "data-table",
    },
    {
        Header: "API",
        accessor: "isAPI",
        className: "data-table",
    },
    {
        Header: "Desktop",
        accessor: "isDesktop",
        className: "data-table",
    },
    {
        Header: "Web",
        accessor: "isWeb",
        className: "data-table",
    },
    {
        Header: "Mobile",
        accessor: "isMobile",
        className: "data-table",
    },
    {
        Header: "Data",
        accessor: "isData",
        className: "data-table",
    },
];
