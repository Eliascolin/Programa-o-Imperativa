// let pipoca = 10
// let macarrao = 8
// let carne = 15 
// let feijao = 12 
// let brigadeiro = 8




// function microondas(tempo,prato){
//     //switc case

//     let tempoPadrao = 0;
//     switch(prato){
//         case 1:
//             tempoPadrao = 10
//         break;
//         case 2:  
//             tempoPadrao = 8
//         break;
//         case 3:
//             tempoPadrao = 15
//         break;
//         case 4:
//             tempoPadrao = 12
//         break;
//         case 5: 
//             tempoPadrao = 8
//         break;
//         default:
//         console.log("prato inexistente");
//         return;  
//     }
//     if(tempo < tempoPadrao){
//         console.timeLog("Tempo insuficiente")
//     } else if(tempo > 2*tempoPadrao && tempo <= 3*tempoPadrao){
    
//     console.log("Acomida queimou");
//     } else if( tempo > 3*tempoPadrao){
//         console.log("Kabumm")
//     } 
// console.log("Prato pronto"); 
// }

// microondas(3,12)



// function microondas2(tempo,opcao){
//     let tempoPadrao = 0

//     if(opcao === 1 || opcao === "pipoca"){
//         tempoPadrao = 10;
//     }else  if(opcao === 2 || opcao === "macarrao"){
//         tempoPadrao = 8;
//     }else  if(opcao === 3 || opcao === "carne"){
//         tempoPadrao = 15;
//     }else  if(opcao === 4 || opcao === "fejao"){
//         tempoPadrao = 12;
//     }else  if(opcao === 5 || opcao === "bigadeiro"){
//         tempoPadrao = 8;
//     } else{
//         console.log("prato inexistente");
//         return;
//     }
//     if(tempo < tempoPadrao){
//         console.timeLog("Tempo insuficiente")
//     } else if(tempo > 2*tempoPadrao && tempo <= 3*tempoPadrao){
    
//     console.log("Acomida queimou");
//     } else if( tempo > 3*tempoPadrao){
//         console.log("Kabumm")
//     } 
// console.log("Prato pronto"); 
// }
   


function microondas3(tempo,opcao){
//if ternario
 let tempoPadrao = opcao === "pipoca" ? 10
 : opcao === 2 ?  8
 : opcao === 3 ?  15
 : opcao === 5 ?  8
 : -1;
 if(tempoPadrao=== -1 ){
    console.log("prato nao existe")
    return;
 }
 if(tempo < tempoPadrao){
             console.timeLog("Tempo insuficiente")
         } else if(tempo > 2* tempoPadrao && tempo <= 3*tempoPadrao){
        
         console.log("Acomida queimou");
        } else if( tempo > 3*tempoPadrao){
             console.log("Kabumm")
        } 
     console.log("Prato pronto");

}

microondas3 (2,25)

/*
serve para relizar atribuçaoes nas variaveis 
? -- armazena o valor caso seja verdadeiro 
: -- caso seja falso 
*/
// let sutucao = meida > 7 ? "aprovado" : "reprovado"
// : media > 5 &7 media < 7? "recuperaçao"
// : "reprovado"; 