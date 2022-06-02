var idade = prompt("Qual a sua idade?");

if(idade >= 18){
    console.log("Posso ir a um show!")
}else if(idade >= 12){
    console.log("Devo estudar!")
}else{
    console.log("Posso continuar estudando porque eu sou muito nova!")
}

var ingresso = prompt("Qual tipo de ingresso?");

switch(ingresso){
    case 'vip':
        console.log('Irei fiocar no camarote.')
        break;
    case 'premium':
        console.log('Irei para a pista premium.')
        break;
    case 'comum':
        console.log('Irei ficar na arquibancada.')
        break;
    default:
        console.log('Tipo de ingresso inválido.')
        break;
    }

