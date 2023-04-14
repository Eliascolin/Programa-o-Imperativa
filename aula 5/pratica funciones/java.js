// primeiro chamar o elemento dentro de uma variavel neste caso pelo id
let ol = document.getElementById('ola')

// suguando exemplo para colocar em arrow
let su = document.getElementById('sumando')

// usando a verçao arrow  
let sumado = (num1,num2) => num1 + num2

// colocamos os parametros que vao ser retornados
su.innerText += sumado(2,5)


function saludar (nome){

return "hola " + ol.innerHTML + nome

}


ol.innerHTML = saludar('elias')

function salud(nombre) { document.write(`Hola ${nombre} `) }


salud('elias')


document.write('hola')








