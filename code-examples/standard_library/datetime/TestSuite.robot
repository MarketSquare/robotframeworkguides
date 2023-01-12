*** Settings ***
Library    DateTime

*** Test Cases ***
Date Format
    ${current_time} =    Get Current Date
    Log To Console    Current time is: ${current_time}
    ${formatted_time} =    Convert Date    ${current_time}    result_format=%d.%m.%Y %H:%M
    Log To Console    Formatted time is: ${formatted_time}
    
Add and Subtract Time
    ${time}	    Add Time To Time	1 minute	42		
    Should Be Equal    ${time}    ${102}			
    ${time}    Add Time To Time    3 hours 5 minutes	01:02:03	timer	exclude_millis=yes
    Should Be Equal    ${time}    04:07:03
    ${time}    Subtract Time From Time    00:02:30    100	
    Should Be Equal    ${time}    ${50}		
    ${time}    Subtract Time From Time    ${time}	1 minute	compact
    Should Be Equal    ${time}	- 10s		
