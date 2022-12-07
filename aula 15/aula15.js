/*

aula 15 - json e objeso 


*/



/*

COMIDA
id, nome     , gramtura,  preco       
1,  ovo      ,  100    ,   0,53
2 ,hamburguer,  180    ,     6
3 , cuscuz   ,  500    ,   1.8   


json-- (j)java (s)script (o)objeto (n)notation
     notaçoes de objeto do javascript
     back-end -- aplicaçao responsavel por manitupular os dados
    

     select * from comida;

     back-end envia no padrao json para as outras aplicaçoes


*/


/*

objeto-- repoesentaçoes do mundo real no linguagem de programaçao

tipos primitivos:

string-- texto
number -- numnero 
boolean-- true/falso

chave: valor

chave-- string qualquer 
valor -- pode ser qualquer cosa


o conjunto chave: valor e definido como propriedade

1,  ovo      ,  100    ,   0,53


id:1 
nome:ovo
gramatura:100
preço:0.53

*/

/*

e um objeto vazio por nao conter nenhum propriedade 

*/


const ovo =   {

     id:1,
     nome: 'ovo',
     quantidade:30,
     preco:0.53,
     'minha chave':10,
     /*
metodos--> funçoes que permiten a um objeto e realizam alguma açao
     */
//funciona igual que uma funtion

volorFinal(){
     // this --> referencia dele mesmo
     return this.preco * this.quantidade;

}
     
 };  
     
     // dotnotation --> notaçao de ponto
     //nos permite 
     
     
     console.log(ovo.id)

     //notaçao de array

     console.log(ovo["nome"]);
     
     console.log(ovo.volorFinal)

     // let numeros =[1,2,3,4,5];

     // numeros[0]--->1

     let carro = {

          marca:'GM - chevrolet',
          modelo: 'Celta',
          cor: 'Preto',
          anofabricaçao: 2010,
          anoModelo:2011,
          numChassi:'XPTO123',
          motor:{
               torque:20,
               potencia:70,
               cilindro:3,
               turbo:{
                    prop1:'Valor1',
                    pronp:"valor2",
               }
          }
     };


console.log()
