
// Crie um arquivo calculadora.js que terá as diferentes operações  para realizar.
// Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.	


function soma( num1= 0,num2= 0){

 const resultado =  num1 + num2;   

 return resultado;
}

const retorno =  soma(2,7);

console.log (    "--Teste de Operações / Calculador -- suma"    +  "      "  +    retorno);



// Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.


function subtraçao(num1= 0,num2=0){

    const resultado1 = num1 - num2;

    return  resultado1
}

const  retorno1 = subtraçao(8-12) 

console.log ( "--Teste de Operações / Calculador -- subtração"  + "   " +  retorno1);



// Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.   

function multiplicaçao(num1= 0, num2= 0){

    const multi = num1 * num2;

    return multi;
}



const retorno3 = multiplicaçao(9,2);

console.log ("--Teste de Operações / Calculador multiplicação--"+" "+retorno3);



// Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.


function divisao(num1= 0, num2= 0){
   
    const divi= num1/num2;
    return divi
}

const retorno4 = divisao(10,0)

console.log ( "--Teste de Operações / Calculador --  divisão   "+ "  " +   retorno4)