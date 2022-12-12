// let series = ["ej1","ej2","ej3"];

// module.exports = series;





//  criar uma funçao constructora 


function Alimento(id,nome,preço,quantidade){

this.nome = nome;
this.id = id;
this.preço = preço;
this.quantidade = quantidade;

};

//new --> coonstroi um novo objeto propriamente  
const pipoca = new Alimento (1,"pipoca",0.53,100); 
const hamburguer = new Alimento (1,"hamburguer",0.53,100); 

console.log(hamburguer);

const estoque = {
Alimento: [],
cadastroAlimentos(id,nome,preço,quantidade) {
    const novoAlimento = new Alimento (id,nome,preço,quantidade);
    this.Alimento.push(novoAlimento);
},


}

28/11 28;25
