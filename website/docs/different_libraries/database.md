---
sidebar_label: Database Library
title: Database Library
---

[**Database Library**](https://github.com/MarketSquare/Robotframework-Database-Library) is a [Robot Framework](https://robotframework.org/) library that provides keywords for interacting with databases.  
It offers keywords to e.g.  
- connect to a database
- execute SQL queries
- fetch results from the database
- assert table contents and result sets

For specifics, please refer to the library's [Keyword documentation](https://marketsquare.github.io/Robotframework-Database-Library/).

## Installation

### Install from PyPI

```bash
pip install robotframework-databaselibrary
```

## Examples

Check out the [tests](https://github.com/MarketSquare/Robotframework-Database-Library/tree/master/test) folder in the repository for examples.

### Basic Usage Example

```robotframework
*** Settings ***
Library       DatabaseLibrary
Test Setup    Connect To My Oracle DB

*** Keywords ***
Connect To My Oracle DB
    Connect To Database
    ...    oracledb
    ...    db_name=db
    ...    db_user=my_user
    ...    db_password=my_pass
    ...    db_host=127.0.0.1
    ...    db_port=1521

*** Test Cases ***
Get All Names
    ${Rows}=    Query    select FIRST_NAME, LAST_NAME from person
    Should Be Equal    ${Rows}[0][0]    Franz Allan
    Should Be Equal    ${Rows}[0][1]    See
    Should Be Equal    ${Rows}[1][0]    Jerry
    Should Be Equal    ${Rows}[1][1]    Schneider

Person Table Contains Expected Records
    ${sql}=    Catenate    select LAST_NAME from person
    Check Query Result    ${sql}    contains    See
    Check Query Result    ${sql}    equals      Schneider    row=1

Wait Until Table Gets New Record
    ${sql}=    Catenate    select LAST_NAME from person
    Check Row Count    ${sql}    >    2    retry_timeout=5s

Person Table Contains No Joe
    ${sql}=    Catenate    SELECT id FROM person
    ...                    WHERE FIRST_NAME= 'Joe'
    Check Row Count    ${sql}   ==    0
```


## Database modules compatibility

The library is basically compatible with any [Python Database API Specification 2.0](https://peps.python.org/pep-0249/) module.

However, the actual implementation in existing Python modules is sometimes quite different, which requires custom handling in the library.
Therefore there are some modules, which are "natively" supported in the library - and others, which may work and may not.

### Python modules currently "natively" supported
#### Oracle
- [oracledb](https://oracle.github.io/python-oracledb/)
    - Both thick and thin client modes are supported - you can select one using the `oracle_driver_mode` parameter.
    - However, due to current limitations of the oracledb module, **it's not possible to switch between thick and thin modes during a test execution session** - even in different suites.
- [cx_Oracle](https://oracle.github.io/python-cx_Oracle/)
#### MySQL
- [pymysql](https://github.com/PyMySQL/PyMySQL)
- [MySQLdb](https://mysqlclient.readthedocs.io/index.html)
#### PostgreSQL
- [psycopg2](https://www.psycopg.org/docs/)
#### MS SQL Server
- [pymssql](https://github.com/pymssql/pymssql)
#### SQLite
- [sqlite3](https://docs.python.org/3/library/sqlite3.html)
#### Teradata
- [teradata](https://github.com/teradata/PyTd)
#### IBM DB2
- The Python package to be installed is [ibm_db](https://github.com/ibmdb/python-ibmdb). It includes two modules - `ibm_db` and `ibm_db_dbi`.   
- *Using `ibm_db_dbi` is highly recommended* as only this module is Python DB API 2.0 compatible. See [official docs](https://www.ibm.com/docs/en/db2/12.1?topic=applications-python-sqlalchemy-django-framework).
#### ODBC
- [pyodbc](https://github.com/mkleehammer/pyodbc)
- [pypyodbc](https://github.com/pypyodbc/pypyodbc)
#### Kingbase
- ksycopg2