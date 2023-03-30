---
sidebar_position: 0
sidebar_label: Create Non-Python Libraries
title: Non-Python Libraries
---

### Rust

Create a dynamic system library (crate_type = "cdylib") from the following source code.

```rust
#![allow(non_snake_case)]

use std::collections::HashMap;

use pyo3::prelude::*;

#[pyfunction]
fn sum_as_string(a: i32, b: i32) -> PyResult<String> {
    Ok((a + b).to_string())
}

#[pyfunction]
fn join_strings(a: Vec<String>) -> PyResult<String> {
    Ok(a.join(","))
}

#[pyfunction]
fn sum_values(a: HashMap<String, i32>) -> PyResult<i32> {
    let mut values_sum = 0;
    for (_key, value) in &a {
        values_sum += value;
    }
    Ok(values_sum)
}

#[pymodule]
fn RustyLibrary(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(sum_as_string, m)?)?;
    m.add_function(wrap_pyfunction!(join_strings, m)?)?;
    m.add_function(wrap_pyfunction!(sum_values, m)?)?;
    Ok(())
}
```

The library can then be used as follows.

```robotframework
*** Settings ***
Library    RustyLibrary

*** Test Cases ***
Integer Argument Conversion Test
    ${x} =    Sum As String    ${5}    ${20}
    Should Be Equal    ${x}    25

List Argument Conversion Test
    @{MY_LIST} =    Create List    spam    eggs

    ${y} =    Join Strings    ${MY_LIST}
    Should Be Equal    ${y}    spam,eggs

Dictionary Argument Conversion Test
    &{MY_DICT} =    Create Dictionary    spam    ${11}    eggs    ${22}

    ${z} =    Sum Values    ${MY_DICT}
    Should Be Equal    ${z}    ${33}
```

A complete working example that includes all build files (e.g. Cargo.toml) can be found on [GitHub / mneiferbag / robot-python-test-library](https://github.com/mneiferbag/robot-rust-test-library).