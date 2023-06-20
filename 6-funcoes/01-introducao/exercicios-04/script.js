/* Escreva uma funcao que retorne um numero aleatorio
O número máximo retornado deve ser passado via parâmetro
Utilize Math.random()
*/

function randomNumber(maxNumber){
    return Math.floor(Math.random()* maxNumber) + 1; 
}

console.log(randomNumber(10)); 
console.log(randomNumber(50)); 
console.log(randomNumber(40)); 
