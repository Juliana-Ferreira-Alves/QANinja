//var vingadores = new Array();
//var vingadores = new Array[];

var vingadores = ['Homem de Ferro', 'Thor', 'Capitão América', ]
    console.log(vingadores)

vingadores.push('Hulk')
    console.log(vingadores)

vingadores.push('Homem Aranha')
//vingadores.push(); //push remove o ultimo registro do meu array
//vingadores.pop(); //pop remove o primeiro registro do meu array

var indice = vingadores.indexOf('Homem Aranha')
    //console.log(indice)
    vingadores.splice(indice)

    vingadores.push('Viúva Negra')
    vingadores.push('Gavião Arqueiro') 

var newVingadore = ['Homem Aranha', 'Capitã Marvel', 'Miss Marvel', 'Pantera Negra']

var result = vingadores.concat(newVingadore)
    console.log(result)

    //console.log(vingadores)
