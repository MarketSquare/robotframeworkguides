import { Grid, html } from "gridjs";
import React from 'react'
import { useEffect, useRef } from 'react';


function ExampleGrid() {
    const wrapperRef = useRef(null);

    const gridData = [
        {
            icon: "/icons/list-checks.svg",
            name: "Todo MVC",
            description: "A simple todo app built in different frameworks and automated using Browser Library",
            localpage: "todo",
            urls: { Example: "todo", "System Under Test": "https://todomvc.com/"},
            usedLibrary: { "Browser Library": "https://github.com/MarketSquare/robotframework-browser"},
            tags: "UI, Web"
        },
        {
            icon: "/icons/car.svg",
            name: "Vehice Insurance App",
            description: "An vehicle insurance calculator web app that requires user inputs in multiple screens",
            localpage: "insurance",
            urls: { Example: "insurance", "System Under Test": "http://sampleapp.tricentis.com/"},
            usedLibrary: { "Browser Library": "https://github.com/MarketSquare/robotframework-browser"},
            tags: "UI, Web"        },
        {
            icon: "/icons/bed.svg",
            name: "Restful Booker",
            description: "A room booking app with a REST API",
            localpage: "restfulbooker",
            urls: { Example: "restfulbooker", "System Under Test": "https://restful-booker.herokuapp.com/"},
            usedLibrary: { "Requests Library": "https://github.com/MarketSquare/robotframework-requests/"},
            tags: "API, Requests"
            
        },
        {
            icon: "/icons/log-in.svg",
            name: "MFA Login",
            description: "A Login page which requires a two-factor authentication with a TOTP code",
            localpage: "mfa_login",
            urls: { Example: "mfa_login", "System Under Test": "https://seleniumbase.io/realworld/login"},
            usedLibrary: { "Browser Library": "https://github.com/MarketSquare/robotframework-browser", "Custom TOPT Library": "/code-examples/browser/totp.py"},
            tags: "UI, Web, MFA, TOTP",
            
        },
    ];
    const grid = new Grid({
        columns: [
            {   name: "Icon",
                id: "icon",
                formatter: (_, row, column) => {
                    return html(`<a href=${row.cells[3].data} target="_self" rel="noreferrer noopener"><img src="${row.cells[0].data}"/></a>`)
                }
        },
            {
                name: 'Name',
                width: '50%',
                formatter: (_, row, column) => {
                    return html(`<div><a href=${row.cells[3].data} target="_self" rel="noreferrer noopener">${row.cells[1].data}</a></div>${row.cells[2].data}`)
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
                    for (const [key, value] of Object.entries(row.cells[4].data)) {
                        html_content += `<div><a href=${value} target="blank" rel="noreferrer noopener">${key}</a></div>`
                    }
                    return html(html_content)
                }

            },
            {
                name: 'Used Library',
                formatter: (_, row) => {
                    let html_content = ''
                    for (const [key, value] of Object.entries(row.cells[5].data)) {
                        html_content += `<div><a href=${value} target="blank" rel="noreferrer noopener">${key}</a></div>`
                    }
                    return html(html_content)
                }
            },
            {
                name: 'Tags',
            },
        ],
        data: gridData,
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

export default ExampleGrid;