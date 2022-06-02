// Loops (Laços de repetição)
// For é movido por declaração

//for(var a = 0; a < 10; a++){
   // console.log(`Repetindo porque ${a} é menor que 10.`)
//}

//while trabalha por condição, e fica no laço enquanto essa condição for true(verdadeira).

//var i = 0;

//while(i<=10){
 //   console.log(`Repetindo porque ${i} é menor ou igual a 10.`)
 //   i++;
//}

//forEach

var vingadores = ['Homem de Ferro', 'Homem Aranha', 'Thor', 'Capitão América', 'Pantera Negra', 'Viuva Negra']

vingadores.forEach(function(value, key){
    console.log(`${value} na posição ${key}`)
})