//https://docs.google.com/document/d/1eogP8YTM-zfPFqy4MMadArEM314Dxvq1/edit
//https://docs.google.com/forms/d/e/1FAIpQLSfO1neD4NApOGQHVobOe-w4-YNE0fUjMk5Q99guFGc8qFGHwA/viewform



//Crie uma Classe Aluno que tenha como atributos:
 //nome (string), quantidade de faltas (number) e notas (array de números). 




 
 
 class Aluno {

                 constructor (nome,faltas,notas){

                 this.nome = nome,

                this.faltas = faltas,

                 this.notas = notas

       }


    /*Na Classe Aluno crie o método calcularMedia que retorna a média de suas notas. 
    Também terá um método chamado faltas, que simplesmente
     aumenta o número de faltas em 1. Crie alguns alunos para testar a sua Classe.*/


 

    
 /*terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua Classe.*/

 

 }


 const novoAluno = {

 alunoNovo:[],

adicionarAluno(nome,faltas,notas){
const estudante = new Aluno (nome,faltas,notas)
this.alunoNovo.push(estudante)
},


/*Na Classe Aluno crie o método calcularMedia que retorna a média de suas notas. 
    Também terá um método chamado faltas, que simplesmente
     aumenta o número de faltas em 1. Crie alguns alunos para testar a sua Classe.*/

     calcularMedia(mediaNotas){
        
        for(let meidia of this.alunoNovo){

       if(meidia.aluno === mediaNotas){
       
        let calculo = this.notas

        let medias = 0;

         for(var i = 0; i < calculo.length; i++) {
    
           let resultado = medias += calculo[i]

           return console.log(resultado)

     }


    
     }


     }


 }



 faltas(mediaFatas){


    for(let meidia of this.alunoNovo){


        if(meidia.aluno === mediaFatas ){
          
            
        
            const calculo = this.faltas
            for( var i = mediaFatas; i = mediaFatas; i++)

               console.log (calculo)

        }
    }


 }



 }






// Crie alguns alunos para testar a sua Classe.


novoAluno.adicionarAluno("aluno1",4,[1,2,3,4,5])

novoAluno.adicionarAluno("aluno2",2,[5,4,])

novoAluno.adicionarAluno("aluno3",5,[7,2,3])

console.table(novoAluno.alunoNovo)

const faltasCalculo = novoAluno.calcularMedia("aluno1")

console.log(faltasCalculo)