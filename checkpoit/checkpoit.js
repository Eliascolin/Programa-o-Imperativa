let pipoca = 10
let macarrao = 8
let carne = 15 
let feijao = 12 
let brigadeiro = 8


function microondas (prato,tempo = 0){
     if(prato <= tempo) {
        console.log("prato feito") 
    }


    else if(prato > tempo) {
        console.log("tempo insuficiente") 
    }
  
    else if(prato < 2* tempo   ){
        console.log("queimo")
    }
    // else if(prato < tempo*3  ){
    //     console.log("kabumm")
    // }
    else{console.log("sem tempo")}
    
}
   
    



microondas(pipoca,21)







