/*crie o objeto literal Concurso com uma propriedade de etapas que indicará 
o resultado parcial de cada etapa. Além disso, ele terá uma propriedade de ganhador 
que armazenará o vencedor (se existir) como uma string. Também pedimos 
que a função encontrarGanhador seja um método do objeto literal Concurso.*/

class Concurso{

    constructor(nome_jogador,votos_etapa_1,votos_etapa_2,votos_etapa_3){
this.nome_jogador= nome_jogador;

this.votos_etapa_1= votos_etapa_1;

this.votos_etapa_2= votos_etapa_2;

this.votos_etapa_3= votos_etapa_3;


    }


};



const cadastro = {

    adicionar_jogador:[],

   novo_jogador(nome,nome_jogador,votos_etapa_1,votos_etapa_2,votos_etapa_3){
 const concurso = new Concurso (nome_jogador,votos_etapa_1,votos_etapa_2,votos_etapa_3)
this.adicionar_jogador.push(concurso)
   }
}



 cadastro.novo_jogador("alicia",10,80,75,)


 cadastro.novo_jogador("fulano1",90,20,25,)

console.log(cadastro.adicionar_jogador)