//https://docs.google.com/document/d/1eogP8YTM-zfPFqy4MMadArEM314Dxvq1/edit
//https://docs.google.com/forms/d/e/1FAIpQLSfO1neD4NApOGQHVobOe-w4-YNE0fUjMk5Q99guFGc8qFGHwA/viewform



//Crie uma Classe Aluno que tenha como atributos:
 //nome (string), quantidade de faltas (number) e notas (array de números). 




 
 
 class Aluno {

                 constructor (nome,faltas,notas){

                 this.nome = nome;

                this.faltas = faltas;

                 this.notas = notas;

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

       if(meidia.nome === mediaNotas){
       
           let notas = meidia.notas.length

           
            let valor = meidia.notas
           
            let numero = 0

           for(let i = 0; i < notas; i++){

             let soma = valor[i]


           numero += soma


           console.log(numero)
           } 
      } 
    
     }

   },

   faltasAluno(aumentarFaltas){


    for(let meidia of this.alunoNovo){
        if(meidia.nome === aumentarFaltas){

            console.log(meidia.faltas + 1)  
}

        }
    }

    
   }

   

    
    

 
 






// Crie alguns alunos para testar a sua Classe.


novoAluno.adicionarAluno("aluno1",4,[1,2,3,4,5])

novoAluno.adicionarAluno("aluno2",2,[5,4,])

novoAluno.adicionarAluno("aluno3",5,[7,2,3])

console.table(novoAluno.alunoNovo)

const faltasCalculo = novoAluno.calcularMedia("aluno2")

console.log(faltasCalculo)

const FatasMaisUm = novoAluno.faltasAluno("aluno1")

console.log(FatasMaisUm)



/*crie o objeto literal curso que tem como atributos: nome do curso (string), 
nota de aprovação (number), faltas máximas (number) e uma lista de 
estudantes (um array composto pelos alunos criados no passo 2).*/



class Curso  {

constructor(nombreCurso,Nota,faltasMaximas,listasEstudiantes){

this.curso = nombreCurso;

this.notas = Nota;

this.faltas = faltasMaximas;


this.estudiantes = listasEstudiantes;


}

}



const curso = {

listaCursos:[],

 adicionarCurodo(nombreCurso,Nota,faltasMaximas,listasEstudiantes){
const cursoNuevo =  new Curso ((nombreCurso,Nota,faltasMaximas,listasEstudiantes))

this.listaCursos.push(cursoNuevo)


 },


 /*Crie o método que permite adicionar alunos à lista do curso, ou seja,
  quando chamamos nosso método em nosso objeto curso, deverá adicionar um 
 aluno a mais na propriedade lista de estudantes do objeto curso.*/

 adicionarAlunos(nombreAluno){

  for(let estudante of novoAluno.alunoNovo){
 
if(estudante.nome === nombreAluno){

this.listaCursos.push(novoAluno.alunoNovo)
console.log(`o aluno ${nombreAluno} foi adicionado ao curso`)
}
  }
 }
}