/*A partir de um banco eles entram em contato conosco para criar um aplicativo 
que possa facilitar o manuseio de informações e facilitar as ações que ele precisa. 
Nosso líder de tecnologia nos pede para pensar em como representar usuários,
 ou contas bancárias, em vez disso. Cada uma dessas contas tem as seguintes informações:
Número da conta (somente números)
Tipo de conta (conta corrente ou poupança em $)
Saldo em $ (valor apenas)
Titular da conta (nome completo)
Com essa informação em mente, somos solicitados a fazer o seguinte.*/


//Uma vez decidido qual será o tipo de dados para representar as contas das contas,
 //crie uma conta de teste e verifique se as propriedades mencionadas acima são criadas corretamente.


 /*let contaTeste = {

   numeroConta: 350-9,
   tipoConta: "corrente",
   saldo: 4985,
   titularConta:"luis da silva"
 }

 console.log(contaTeste.saldo)

/*gora que sabemos como representar usuários e suas contas, o 
cliente nos forneceu uma lista de contas que devemos ser capazes de criar. Para isso, 
devemos gerar uma função construtora que facilite a criação das contas bancárias correspondentes mais rapidamente.*/

/*class conta{
constructor(numero,tipo,saldo,titular){

this.numeroConta = numero,

this.tipo = tipo,

this.saldo = saldo,

this.titularConta = titular

}

}





//Também nos pedem a criação de um objeto literal chamado banco que terá uma propriedade 
//chamada clientes, ele será composto pela lista de objetos gerados no ponto anterior.
const banco = {
 clientes: [],
adicionarCliente(numero,tipo,saldo,titular){
const conta = new conta(numero,tipo,saldo,titular)
this.cliente.push(conta);
}
};



banco.adicionarCliente(35,"poupança",32,"Fulano4");

console.log(banco.clientes)*/


function Conta(numero, tipo, saldo, titular) {
  this.numero = numero;
  this.tipo = tipo;
  this.saldo = saldo;
  this.titular = titular;
}

const banco = {
  clientes: [],
  adicionarCliente(numero, tipo, saldo, titular) {
    const conta = new Conta(numero, tipo, saldo, titular);
    this.clientes.push(conta);
  }
};


banco.adicionarCliente(35, "poupança", 32, "Fulano4");

console.log(banco.clientes);
