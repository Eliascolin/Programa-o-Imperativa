// //a) acessar elementos especificos de um array

// const nomes = ["fulano1","falano2","fulano3","fulano4"];

// console.log(nomes[0]);


// //b) modificar elementos de uma array

// nomes [0] ="elias1";
// nomes [3] = "elias3";
// //adicionar uma array sem ter adicionado
// nomes[4] = "fulano5"





// //c adicionar elementos numa array

// //push--> adiciona no final
// //unshift  -->adiciona no começo


// nomes.push("ciclano");

// nomes.unshift("ciclano6");

// // console.table(nomes);

 
// //d eleminar elementos

// //pop --> remove o ultimo elemento
// //shift-->remove o primeiro elemento 

// //e comparar elementos de uma array com elementos de outro 

// //                    0   1    2
// let participanteA = [6.5,7.8,9.0];

// let participanteB = [6.0,8.1,7.5];

// if(participanteA[0] > participanteB[0]){
//     console.log("participante A tem mais notas")
// } 
// else{
//     console.log("participante B tem mais notas")
// }

// if(participanteA[2] > participanteB[2]){
//     console.log("particpante a ganhou na segunda rodada")
// }
// else{
//     console.log(
//         "particpante B ganhou na segunda rodada"        
//     )    
// }



//d array invertida 

const usuarios = ["admin","admin2","admin3"];


function imprimirInverso(array){

console.log(array[2]);
console.log(array[1]);
console.log(array[0]);

}
  
imprimirInverso(usuarios)



/*

criar uma nova array invertida 

*/

function inverter(array){

    const novoArray = [];
    novoArray [0] = array[2];
    novoArray [1] = array[1];
    novoArray [2] = array[0];
    return novoArray;
}


console.table(inverter(usuarios));


