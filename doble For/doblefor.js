/*Vamos escrever um doble for que permite que a seguinte sequência de números seja exibida no console:
0, 0, 1, 2, 3, 1, 1, 2, 3... até 10, 1, 2, 3.
Em outras palavras, escreva um doble for, onde o primeiro — o externo — deve iterar de 0 a 10, e o 
segundo — o interno — deve sempre iterar de 0 a 3.*/
/*
let primeiraConta = 10

let segundaConta = 3


for(i=0; i<= primeiraConta ; i++){

console.log(`primeira conta é  ${i}`)

for(a=0; a<=segundaConta ; a++){

console.log(`o valor da segunda conta é ${a}`)

}
} */




/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */


let matriz= [
[2,3,4,5,6],
[4,5,2,7,9],
[6,9,1,2,4],
[2,8,3,4,6],
[5,7,2,7,8]
]

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */
let soma = 0

for(let fila=0;fila<matriz.length;fila++){
    

   for(let coluna = 0; coluna < matriz[fila].length; coluna++){

    soma+= matriz[fila][coluna]
    console.log(soma)
   }
};



//Crie uma função que gere uma matriz 10x10. Cada linha deve ter apenas 10 números. 






function CriarMatriz(mz){

    this.mz=mz

const novo = []

cons

for(let i = 0; i< novo[10];i++){

    for(let a=0;a<novo[i][10];a++){



    }
    
}


}