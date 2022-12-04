*** Settings ***
Documentation     Robot Framework 5 syntax examples.
Library           DateTime

*** Test Cases ***
TRY / EXCEPT: Catch any exception
    TRY
        Fail
    EXCEPT
        Log    EXCEPT with no arguments catches any exception.
    END

TRY / EXCEPT: Catch an exception by exact message
    TRY
        Fail    Error message
    EXCEPT    Error message
        Log    Catches only "Error message" exceptions.
        Log    Enables error-specific exception handling.
    END

TRY / EXCEPT: Multiple EXCEPT statements
    TRY
        Fail    Error message
    EXCEPT    Another error message
        Log    Catches only "Another error message" exceptions.
    EXCEPT    Error message
        Log    Catches the "Error message" exception.
    END

TRY / EXCEPT: Multiple messages in EXCEPT statement
    TRY
        Fail    CCC
    EXCEPT    AAA    BBB    CCC
        Log    Catches any "AAA", "BBB", or "CCC" exception.
    END

TRY / EXCEPT: Catch a specific exception, or an unexpected exception
    TRY
        Fail    Error message
    EXCEPT    Another message
        Log    Catches only "Another message" exceptions.
    EXCEPT
        Log    Catches any exception.
        Log    Useful for handling unexpected exceptions.
    END

TRY / EXCEPT: Catch exceptions where the message starts with
    TRY
        Fail    A long error message with lots of details
    EXCEPT    A long error message    type=start
        Log    Matches the start of an error message.
    END

TRY / EXCEPT: Capture the error message
    TRY
        Fail    Goodbye, world!
    EXCEPT    AS    ${error_message}
        Log    ${error_message}    # Goodbye, world!
    END

TRY / EXCEPT: Using ELSE when no exceptions occured
    TRY
        Log    All good!
    EXCEPT    Error message
        Log    An error occured.
    ELSE
        Log    No error occured.
    END

TRY / EXCEPT / FINALLY: Always execute code no matter if exceptions or not
    TRY
        Log    All good!
    FINALLY
        Log    FINALLY is always executed.
    END
    TRY
        Fail    Catastrophic failure!
    EXCEPT
        Log    Catches any exception.
    FINALLY
        Log    FINALLY is always executed.
    END

TRY / EXCEPT / ELSE / FINALLY: All together!
    TRY
        Fail    Error message
    EXCEPT
        Log    Executed if any exception occurs.
    ELSE
        Log    Executed if no exceptions occur.
    FINALLY
        Log    FINALLY is always executed.
    END

TRY / EXCEPT: Glob pattern matching
    TRY
        Fail    My error: 99 occured
    EXCEPT    My error: *    type=glob
        Log    Catches by glob pattern matching.
    END

TRY / EXCEPT: Regular expression matching
    TRY
        Fail    error 99 occured
    EXCEPT    [Ee]rror \\d+ occured    type=regexp
        Log    Catches by regular expression pattern matching.
    END

WHILE: Loop while the default limit (10000) is hit
    TRY
        WHILE    True
            Log    Executed until the default loop limit (10000) is hit. 
        END
    EXCEPT    WHILE loop was aborted    type=start    
        Log    The loop did not finish within the limit.
    END

WHILE: Loop while the given limit is hit
    TRY
        WHILE    True    limit=10
            Log    Executed until the given loop limit (10) is hit. 
        END
    EXCEPT    WHILE loop was aborted    type=start
        Log    The loop did not finish within the limit.
    END

WHILE: Loop while condition evaluates to True
    ${x}=    Set Variable    ${0}
    WHILE    ${x} < 3
        Log    Executed as long as the condition is True.
        ${x}=    Evaluate    ${x} + 1
    END

WHILE: Skip a loop iteration with CONTINUE
    ${x}=    Set Variable    ${0}
    WHILE    ${x} < 3
        ${x}=    Evaluate    ${x} + 1
        IF    ${x} == 2 
            CONTINUE    #  Skip this iteration.
        END 
        Log    x = ${x}    # x = 1, x = 3
    END

WHILE: Exit loop with BREAK
    WHILE    True
        BREAK
        Log    This will not be logged.
    END

Inline IF: No need for IF / END construct
    IF    True    Log    Inline IF is nice!

Inline IF / ELSE
    IF    False    Log    False    ELSE    Log    True

Inline IF / ELSE IF / ELSE: Not pretty but works!
    IF    False    Log    False    ELSE IF    False    Log    False    ELSE    Log    True

Inline IF: Conditional variable assignment 
    ${value}=    IF    True    Get Current Date    ELSE    Get Time

Demonstrate return 
    RETURN: Return a value from a keyword
    RETURN: Return without a value 

*** Keywords ***
RETURN: Return a value from a keyword
    IF    True
        RETURN    It is true!
    ELSE
        RETURN    It is not true!
    END

RETURN: Return without a value 
    IF    True    RETURN
    Log    This will not be logged.