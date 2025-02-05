var numero
 function Numero_Azar(){
    numero=Math.floor(Math.random()*500)
    document.getElementById("binario").innerHTML = numero
    console.log(numero)
 }

 function binario(){
    console.log(numero)
 }