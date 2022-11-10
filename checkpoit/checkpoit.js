let pipoca = 10
let macarrao = 8
let carne = 15 
let feijao = 12 
let brigadeiro = 8





// function microondas (prato,tempo ){

//     if  (prato= pipoca || macarrao ||  carne || feijao || brigadeiro  ){
//         console.log("Prato inexistente")
//     }

//      else if(tempo < prato){
//         console.log("tempo insuficiente") 
//     }
    
//     else if(tempo  >= prato && tempo <= prato*2) {
//         console.log("prato feito") 
//     }
//     else if(tempo >= prato*2 && tempo <= prato*3 ) 
//     {console.log("qUEMOU")}

//     else 
//     {console.log("KABUUM")};
// }

   


// microondas(kkk,50)


    







function microondas (prato,tempo ){


    if  (prato == pipoca || macarrao ||  carne || feijao || brigadeiro  ){
                console.log("Prato inexistente")
            }

     else if(tempo < prato){
        console.log("tempo insuficiente") 
    }
    
    else if(tempo  >= prato && tempo <= prato*2) {
        console.log("prato feito") 
    }
    else if(tempo >= prato*2 && tempo <= prato*3 ) 
    {console.log("qUEMOU")}

    else 
    {console.log("KABUUM")};
}

   


microondas(brigadeiro,8)


