***Settings***
Resource        base.robot

Test Setup      Nova sessão
Test Teardown   Encerra sessão

***Test Cases***
Selecionar por texto e valida pelo valor
    Go to                           ${url}/dropdown 
    Select From List By Label      class:avenger-list             Scott Lang  
    ${selected}=                   Get selected List Value        class:avenger-list 
    Should Be Equal                ${selected}                    7
Selecionar pelo valor e valida pelo texto
    Go to                           ${url}/dropdown 
    Select From List By Value      id:dropdown                    6
    ${selected}=                   Get Selected List Label          id:dropdown 
    Should Be Equal                ${selected}                    Loki

