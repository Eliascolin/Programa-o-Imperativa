// comida
// id:1 
// nome:ovo
// gramatura:100
// preço:0.53

// let comidas = [];


// const ovo = {
// id:1,
// nome:'ovo',
// preco:0.53,
// quantidade:30

// };

// const hamburguer = {
//     id:2,
//     nome:'hamburguer',
//     preco:6,
//     quantidade:15

// };



// const cuscuz = {
//     id:3,
//     nome:'cuscuz',
//     preco:1.83,
//     quantidade:3
    
// }    



// comidas.push(ovo);
// comidas.push(hamburguer);
// comidas.push(cuscuz);
// console.log(comidas);



const estoque = {
 
    alimentos:[],
cadastrarAlimento(idParam,nomeParam,precoParam,quantidadeParam) {
 const novoAlimento = {
    id:idParam,
    nome:nomeParam,
    preco:precoParam,
    quantidade:quantidadeParam
 }
 this.alimentos.push(novoAlimento);
}, 
}

estoque.cadastrarAlimento(1,"ovo",0.53,100);
estoque.cadastrarAlimento(2,"Hamburguer",6,30);
estoque.cadastrarAlimento(3,"cuscuz",1.8,67);
console.log(estoque);
