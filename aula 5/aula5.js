// Um nutricionista enviou a seguinte tabela com os dados de seus clientes e, 
// você será responsável por calcular o Índice de Massa Corporal de cada registro

// Você deverá criar 6 variáveis:
// Nome
// Idade
// Peso
// Altura
// Plano (só nos interessa saber se TEM ou NÃO TEM)
// Índice de Massa Corporal (IMC)


// O programa deverá apresentar em tela o valor do IMC de um paciente da tabela com uma mensagem.
//  Por exemplo: “Aline Ferreira tem 33 anos e seu índice de massa corporal é de xx”.

let nome = 'Jose';
let sobrenome = 'da Silva';
let idade  =  27;
let peso   =  83.5;
let altura = 1.70 ;
let temPlano = true;
let imc = peso/(altura**2);


console.log(nome +  ' sobrenome ' +  ' tem '  + idade +  ' e seu índice de massa corporal é de '  + imc  )



let nome = 'Carlos';
let sobrenome = 'de Souza';
let idade  =  28;
let peso   =  80.1;
let altura = 1.76 ;
let temPlano = true;
let imc = peso/(altura**2);

console.log(nome +  sobrenome  +  ' tem '  + idade +  ' e seu índice de massa corporal é de '  + imc  )