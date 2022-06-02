***Settings***
Library     app.py


***Test Case***
Deve retornar mensagem de boas vindas
    ${result}=          Welcome     Juliana
    Should Be Equal     ${result}   Olá Juliana, bem vindo ao curso básico de Robot Framework!       
    

  

