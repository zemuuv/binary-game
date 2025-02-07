var numero
 function Numero_Azar(){
    numero=Math.floor(Math.random()*500)
    document.getElementById("binario").innerHTML = numero
    console.log(numero)
 }

 function binario(){
   console.log("holaa")
    let digitos = contar_digitos()
    let lista = Generar_Array(digitos) 
    console.log(lista)
 }

 function Generar_Array(digitos){
   let numeros=numero
   let arreglo=[]
   let d=digitos-1
   for (let i = 0; i < digitos; i++) {            
      let parte=Math.floor(numeros%2)
      numeros=Math.floor(numeros/2)
      arreglo[d] = parte
      d--
   }
   return arreglo
 }

 function contar_digitos(){
   let numero1=numero
   let digitos=0
   while (numero1!=0){
      numero1=Math.floor(numero1/2)
      digitos++
   }
   console.log(digitos)
   return digitos
 }