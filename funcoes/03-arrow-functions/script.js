 let consoleTeste = () => {
    console.log("Teste"); 
 }
consoleTeste(); 

 // 

 let soma = (a,b) => {
    return a + b; 
 }
console.log(soma(3,4)); 

 //

 const raizQuadrada = (x) => { 
    return x * x; 
}
const raizQuadrada2 = n => n * n; 
  
console.log(raizQuadrada(2)); 
console.log(raizQuadrada2(4));


// Argumentos opcionais 

function nomeComIdade (nome, idade) { 
if (idade === undefined){
    console.log("O seu nome é " + nome); 
} else { 
    console.log("Seu nome é " + nome + " e voce tem " + idade + " anos"); 
}
}
  
  nomeComIdade("Grazielle"); 
  nomeComIdade("Grazielle", 29);  



  // Recursion
  function retornarNumeroPar(n) {
    if(n % 2 == 0) {
      console.log("número agora é par agora é par: " + n); 
    } else { 
      console.log(n); 
      retornarNumeroPar(n-1); 
    }
   }
  
   retornarNumeroPar(3); 

