
// iportaçao do mudulo a ser utilizado
let readlineSync = require('readline-sync');

// switch/case


// escolha alguma coisa 
// caso seja a opcao XMLDocument; fazer alguma coisa 
// caso seja a opcao y: fazer outra coisa
// caso nao seja nenhuma das opçoes: faça algo tambem

// template strings

// let opcao = 'Pizza';
// console.log('A opçao escolhida foi a:' + opcao)

// console.log(`A opçao escolhida foi a: ${opcao}`)

console.log(`
Bem-vindo ao nosso cardapio

Temos as seguintes opçoes:

1- x-tudo
2- Langosta
3- Arroz fejao
4- Açai
5- Lasanha de Coxinha

`)


console.log("Qual a sua opçao")

let opcao = readlineSync.question('qual a opçao escolhida? ');

console.log("a opçao escolhida foi" + opcao)


switch(opcao){
    case '1':
        console.log("Escolheu X-tudo")
        break; //termina a execuçao
    case '2':
         console.log("Escolheu X-Lagosta")
         break;
    case '3':
        console.log("Escolheu Arros e fejao")
        break;
    case '4':
        console.log("Escolheu Açai")
        break;
    case '5':
        console.log("Escolheu Lasanha de Coxinha")
        break;   
        default:
            console.log("opçao invalida")                   
}