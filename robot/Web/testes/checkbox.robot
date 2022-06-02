***Settings***
Resource        base.robot

Test Setup      Nova sessão
Test Teardown   Encerra sessão

***Variables***
${check_thor}       id:thor
${check_iroman}     css:input[value='iron-man']
${check_panther}    Xpath=//*[@id='checkboxes']/input[7]

***Test Cases***
Marcando opção com ID
    Go To                           ${url}/checkboxes
    Select Checkbox                 ${check_thor}   
    checkbox Should Be Selected     ${check_thor}   
    Sleep                           5 
    
Marcando opção com CSS Selector
    
    Go To                           ${url}/checkboxes
    Select Checkbox                 ${check_iroman}
    checkbox Should Be Selected     ${check_iroman}
    
Marcando opção com Xpath
    [Tags]                          iroman
    Go To                           ${url}/checkboxes
    Select Checkbox                 ${check_panther}
    checkbox Should Be Selected     ${check_panther}
   

 