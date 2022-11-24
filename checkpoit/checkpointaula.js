// let pipoca = 10
// let macarrao = 8
// let carne = 15 
// let feijao = 12 
// let brigadeiro = 8




function microondas(tempo,prato){
    //switc case

    let tempoPadrao = 0;
    switch(prato){
        case 1:
            tempoPadrao = 10
        break;
        case 2:  
            tempoPadrao = 8
        break;
        case 3:
            tempoPadrao = 15
        break;
        case 4:
            tempoPadrao = 12
        break;
        case 5: 
            tempoPadrao = 8
        break;
        default:
        console.log("prato inexistente");
        return;  
    }
    if(tempo < tempoPadrao){
        console.timeLog("Tempo insuficiente")
    } else if(tempo > 2*tempoPadrao && tempo <= 3*tempoPadrao){
    
    console.log("Acomida queimou");
    } else if( tempo > 3*tempoPadrao){
        console.log("Kabumm")
    } 
console.log("Prato pronto"); 
}

microondas(3,12)



// function microondas2(){
//     console.log("Prato pronto");
// }



// function microondas3(){}