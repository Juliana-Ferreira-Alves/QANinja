// Document Object Model -> DOM -> Documento, página HTML

// HTML-> Página

// h1 = Cabeçalhos/Títulos
// p = Parágrafos
// ul = Agrupadores de Listas
// li = Os itens de listas do elemento ul
// a = link
// form = Fomulários
// input do tipo texto = Campos de texto
// input do tipo check = Checkbox
// input do tipo radio = Botões de rádio
// textarea = Paragráfos
// button = Botões
// span = Elementos genéricos
// tables = Tabelas
// tds = Colunas
// divs = Divisões
// labels = Textos

// Assistir aula a partir 09:33

function somaValores(){
    var n1 = document.getElementById("numberOne").value;
    var n2 = document.getElementById("numberTwo").value;
    
    var result = parseInt(n1) + parseInt(n2);

    var divResultado = document.getElementById("resultado");

    divResultado.append("O resultado da soma é: " + result);
    console.log(result)

}