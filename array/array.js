//Acessar elementos específicos de um array

let dias = ["segunda","terça","quarta","quinta","secta"]


console.log(dias.indexOf("terça"))


//Modificar cada um de seus elementos e imprimí-los.

 dias[0] ="segunda feira" 

 dias[1]=" terça feira"

 dias[2]="quarta feira"

 dias[3]="quinta feira"

 dias[4]="sexta feira"

console.log(dias)


//Adicionar elementos a uma matriz

dias.push("sabado")

console.log(dias)


//Extrair elementos de uma matriz.


dias.pop()

console.log(dias)


//Comparar elementos de um array com elementos de outro array.

let dia = ["sugunda","terça","quarta","quinta feira","sexta feira"]


function CompararArray(a,b){

if(dias[a] == dia[b]){
console.log("sao iguais")
}else(console.log(`sao diferentes`))
}


CompararArray(3,3)

// Criar a estrutura apropriada para salvar os seguintes filmes:
//	"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella.

let filmes = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

console.log(filmes[1])

/*Mais tarde, a produção avisou que os filmes deveriam ser todos em letras maiúsculas. Para isso, 
eles pedem que você crie uma função que receba um array como parâmetro e converta o conteúdo de
 cada elemento para maiúscula.*/

 function filmesMinusculas(a){

   let nome = a

   let filmes = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

    let nomeMaisculo =  nome.toUpperCase()

    filmes.push(nomeMaisculo)
   
    console.log(filmes)

 }


 filmesMinusculas('hola')


 /* eles pedem para você criar uma função que receba dois arrays como parâmetros, 
 a fim de adicionar os elementos contidos no segundo array no primeiro, 
 e assim retornar um único array com todos os filmes como seus elementos.
 Importante: os filmes animados também devem ser convertidos para maiúsculas.
 */

function  arrays(a,b){

let nome1= a

let nome2= b

let nomeMaisculo= []

let nomeMaisculo1 =  a.toUpperCase()

let nomeMaisculo2 =  b.toUpperCase()

nomeMaisculo.push(nomeMaisculo1)

nomeMaisculo.push(nomeMaisculo2)

console.log(nomeMaisculo)

};



arrays("toy story","finding Nemo")




