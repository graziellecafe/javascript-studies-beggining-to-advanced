function escreverNoConsole() { 
    console.log("Escrevendo no console!"); 
   }
  
escreverNoConsole(); 

//


const textoNoConsole = function() { 
    console.log("Texto no console"); 
}

textoNoConsole(); 

//

const textoPorParametro = function(texto) { 
    console.log(texto); 
}

textoPorParametro("Olá!"); 
//


const soma = function (a, b){
    return a + b; 
}

console.log(soma(3, 5)); 

//

function podeDirigir(idade, cnh) {
    if(idade >=18 && cnh == true){
        console.log("Pode dirigir!"); 
    } else {
        console.log("Não pode dirigir!"); 
    }
}

podeDirigir(18, true); 
podeDirigir(17, true); 
podeDirigir(40, false); 