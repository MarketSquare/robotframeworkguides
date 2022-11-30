import { Grid, html } from "gridjs";
import React from 'react'
import { useEffect, useRef } from 'react';

function StandardLibraryGrid() {
    const wrapperRef = useRef(null);

    const libraryData = [
        {
            name: "BuiltIn",
            description: "Contains generic often needed keywords. Imported automatically and thus always available.",
            urls: { Documentation: "https://robotframework.org/robotframework/latest/libraries/BuiltIn.html"},
        },
        {
            name: "Collections",
            description: "Contains keywords for handling lists and dictionaries.",
            urls: { Documentation: "https://robotframework.org/robotframework/latest/libraries/Collections.html"},
        },
        {
            name: "DateTime",
            description: "Supports creating and verifying date and time values as well as calculations between them.",
            urls: { Documentation: "https://robotframework.org/robotframework/latest/libraries/DateTime.html"},
        },
        {
            name: "Dialogs",
            description: "Supports pausing the test execution and getting input from users.",
            urls: { Documentation: "https://robotframework.org/robotframework/latest/libraries/Dialogs.html"},
        },
        {
            name: "OperatingSystem",
            description: "	Enables performing various operating system related tasks.",
            urls: { Documentation: "https://robotframework.org/robotframework/latest/libraries/OperatingSystem.html"},
        },
        {
            name: "Process",
            description: "Supports executing processes in the system.",
            urls: { Documentation: "https://robotframework.org/robotframework/latest/libraries/Process.html"},
        },
        {
            name: "Screenshot",
            description: "Provides keywords to capture and store screenshots of the desktop.",
            urls: { Documentation: "https://robotframework.org/robotframework/latest/libraries/Screenshot.html"},
        },
        {
            name: "String",
            description: "Library for manipulating strings and verifying their contents.",
            urls: { Documentation: "https://robotframework.org/robotframework/latest/libraries/String.html"},
        },
        {
            name: "Telnet",
            description: "	Supports connecting to Telnet servers and executing commands on the opened connections.",
            urls: { Documentation: "https://robotframework.org/robotframework/latest/libraries/Telnet.html"},
        },
        {
            name: "XML",
            description: "Library for verifying and modifying XML documents.",
            urls: { Documentation: "https://robotframework.org/robotframework/latest/libraries/XML.html"},
        },
    ];
    const grid = new Grid({
        columns: [
            {
                name: 'Name',
                width: '70%',
                formatter: (_, row, column) => {
                    return html(`<div><b>${row.cells[0].data}</b></div><div>${row.cells[1].data}<div>`)
                }
            },
            {
                name: 'Description',
                hidden: true
            },
            {
                name: 'URLs',
                formatter: (_, row) => {
                    let html_content = ''
                    for (const [key, value] of Object.entries(row.cells[2].data)) {
                        html_content += `<div><a href=${value} target="blank" rel="noreferrer noopener">${key}</a></div>`
                    }
                    return html(html_content)
                }

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

export default StandardLibraryGrid;