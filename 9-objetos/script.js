// objtos

let pessoa = { 
    nome: "Grazielle", 
    idade: 29, 
    profissao: "Progragramador",
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);


// examplos
let cachorro = { 
    nome: "Shark", 
    idade: 3, 
    patas: 4,
    latir: function () {
        console.log("Au Au ");
    }
}

console.log(cachorro.patas); 
console.log(cachorro.nome); 
cachorro.latir(); 

// Adicionando e  deletando propriedades de um objeto 
let carros = { 
    marca: "VW", 
    portas: 4, 
    eletrico: false, 
    motor: 1.0
}

console.log(carros.portas);
delete carros.portas; 
console.log(carros.portas); 
carros.tetoSolar = true,  
console.log(carros); 

// Copando propriedades de um objeto 
// Podemos copiar todas as propriedades de um objeto para outro 

let objetoA = { 
    prop1: 'teste', 
    prop2: 'testando', 
}

let objetoB = {
    prop3: 'propriedade'
}

//Object.assign: "pai dos objetos"
Object.assign(objetoA,objetoB); 
console.log(objetoA); 

// Verificando as chaves de um objeto -- estamos vendo as chaves e nao o valor
let objetoAB = { 
    prop1: "teste", // chave - valor 
    prop2: "testando"
}

console.log(Object.keys(objetoA)); 