# Javascript studies from beginning to advanced

This repository is all about studying Javascript from beginning to advanced. Topics studied are from Matthew's course on Udemy. [You can find the course here](https://www.udemy.com/course/javascript-do-basico-ao-avancado-com-node-e-projetos/).

# Sumário

1. Introdução do curso
2. Tipos de dados e operadores
3. Exercícios de tipos de dados
4. Estrutura de programacação
5. Exercícios sobre estruturas
6. Funções
7. Exercícios sobre funções
8. Objetos e Arrays
9. Exercícios sobre objetos e arrays
10. Conceitos de orientação a objetos
11. Exercícios sobre OO
12. Debugs e erros no JS
13. Expressões regulares
14. Exercícios
15. Programação assíncrona
16. Javascript no navegador
17. Eventos com Javascript
18. Projeto com Javascript
19. Node Js.
20. Projeto com Node JS.

# 1. Introdução

Entender conceitos fundamentais do JS e instalar todas as dependências

## O que é Javacript

- É uma linguagem de programação de alto nível
- Originalmemte chamada de LiveSCript
- Porém recebeu o nome de Javascript por causa da grande fama de Java
- Javascritp = JS = Vanilla Javascript = ECMASscirpt
- Criada para deixa as páginas web vivas.
- Just-in-time compiled
- Orientada a objetos
- Criada em 1995

## Onde o Javascript é utlizado?

- Interagir com HTML e CSS (DOM)
- Calcular, manipular e validar dados
- Pode ser utilizada como lnguagem server-side (Node.js)
- Linguagem base de grandes frameworks (React, Angulas, Vue)

# 2.  Tipos de dados e operadores

Conhecer os tipos de dados em JS e também os operadores da linguagem

## O que são tipos de dados

- A classificação de um dado / categoria
- Dados são por exemplo: 13. ´olá´. true
- Os tipos de dados existentes sâo:
  - mumber (aritmético, special numbers)
  - string
  - booleam (comparações. operadores lógicos)
  - empty values (null, undefined)

### Numbers

- Obviamente este tipo se trata de números

```js
    console.log(typefof 13)
```

### String

- String = "texto"

```js
console.log(typeof 'Isso é uma string');
console.log(typeof "Este texto aqui também");
console.log(typeof `E este aqui também´);
console.log("Primeira linha \n Segunda Linha")

```

### Booleans

- Serve para guardar um valor de uma comparação por exemplo
- Os únocos valores possível são:
  - true (verdadeiro)
  - false(falso)
  ```js
  console.log(5 > 2);
  console.log(3 > 10);
  ```

# 4. Estruturas de Programação
Vamos começar a programar, utilizando técnicas mais comuns como: estrutura de controle, repetição, funções, etc. 

## O que é um programa/software?
- É um conjunto de declarações (statements)
- Statements são conjuntos de expressões (expressions)
- Expresssion é todo fragmento de código que produz um valor 
- Software tem um objetivo 
- Statements guiam o software para o seu objetivo 
- Expresssions são os valores que os statements esperam para guiar o software

- Statement: `console.log(1 > 2)`
- Expression: `console.log('batata')`

## O que são variáveis?
- Salvamos os valores em variáveis (isso é um statement)
- `let laranjas = 5; `
- `console.log(laranjas * laranjas); `

## Como salvar valores na memória
- Podemos também mudar o valor que foi salvo anteriormente 
- `laranjas = laranjas + 1`
- `console.log(laranjas)`

- `let` pode definir várias variáveis também 
- `let quadrado = 4; triangulo = 3;; retangulo = 4`
- `console.log(quadrado * (triangulo ( retangulo )));`

## Convenção no nome de variáveis
 - Não pode começar com um número `let 2teste`
 - Mas pode terminar com um número `let teste9`
 - Pode ter $ ou _ mas não pode ter outros caracteres especiais (`let $nome, _nome)`
 - Pode iniciar com letra maiúscula `(let Nome = "Matheus")`
 - Ou usar camelCase `(let meuPrimeiroNome = "Matheus")`

 ## O ambiente do Javascript 
- Quando qualquer programa é iniciado, o ambiente é criado
- E este ambiente não incia vazio 
- Ele contém **funções** nativas da linguagem 
- **Funções** são blocos de código, qe nos retornam um valor ou ação
- O ambiente de Javascript neste curso poderiamos entender como o navegador 

## As estruturas das funções 
- Antes de mais nada: funções são chamadas durante o programa 
- Você também pode ouvir: executar, chamar, invocar uma função 
- E nós chamamos a função utilizando o nome  dela + abrindo e fechando parênteses
- `nomeDaFuncao();`

- Também podemos inserir parâmetros, em algumas funções são obrigatórios 
- Basicamente são valores que podem mudar o resultado da função
- `nomeDaFuncao(parametro1 , parametro2);`

## Funções built in 
- `let idade = prompt("Qual a sua idade"); `
- `alert("Esta é uma mensagem"); `
- ` let maiorNumero = Math.max(5, 2,1, 6); `
- `Math.max()`
- `Math.min()`
- `Math.round()`: arredonda para baixo
- `Math.ceil()`: arredonda para cima

## O que são estruturas de controle 
- Um programa é executado de cima para baixo
- Com as estruturas podemos modelar o fluxo do programa 
- Ou seja,dependendo dos valores de statements e expressions ele tomará um caminho diferente 

### **Estrutura de controle: if**
-  O programa vai executar um bloco de código SE algo acontecer 
- Onde algo é a condição imposta por um statement 
- Que resultar em um boolean (true or false)

```js
let idade = 19; 

if (idade > 18) {
  console.log("Pode entrar!); 
}
```

```js
let nome = "Grazielle"; 

if (nome == "Grazielle" && idade > 18){
  console.log("Ela é maior de idade"); 
}
```

### **Estrutura de controle: else**
- Podemos executar um outro bloco de código, caso a instrução do if não seja atendida 
- Ou seja, SE NÃO EXECUTAR o bloco if, execute o bloco else

```js
let nome = "Grazielle"; 

if(nome == "Grazielle"){
  console.log("Seu nome é Grazielle"); 
} else { 
  console.log("O seu nome NÃO é Grazielle"); 
}
```

## O que são estruturas de repetição 
- A ideia é repetir uma ação até atingir uma condição 
- Ao invés de repetirmos o mesmo código várias vezes, criamos um statement que fará uma checagem em cada loop 
- Também chamada de loop 

### **Estrutura de repetição: while** 
- Fará uma ação até que a condição seja atingida
- Precisamos realmente definir um fim para o loop, para não termos o problema do loop infinito 

```js
  let x = 10; 

  while(x > 0) {
    console.log(x); 
    x = x - 1; 
  }
```

### **Estrutura de repetição: do while** 
```js
 let y = 0; 

 do {
  console.log(y);
  y = y + 1;
 } while (y < 5)

```

### **Estrutura de repetição: for** 
```js

for (let numero = 2; numero < 100; numero = numero * 2) {
  console.log("O numero é: " + numero); 
  
}
```

### **Estrutura condicional: switch**
- Quando há a necessidade de vários ifs podemos utilizar o switch/case
- Para sair de um case podemos utilizar o break 
- Podemos inserir uma expressão default para caso nenhum valor seja correspondido

```js

let nome = "João"; 

switch(nome) {
  case "João": 
    console.log("O seu nome é João"); 
    break;
  case "Marcos" :
    console.log("O seu nome é Marcos");
    break; 
  default: 
    console.log("O seu nome não é João nem Marcos"); 
    break; 
}
```

## Comentários no Javascript
- Utilizado para explicar o que acontece no código 
- Ou também para testar se algum código está afetando o sistema 
- Completamente ignorado pelo interpretador de código 
- Uma linha e multi-linha 

```js 
  // comentário de uma linha 

  /* comentário 
     de várias linhas 
  */ 
``` 

6. # Funções
- Funções são estruturas de código menores que são reaproveitadas durante a execução / construção de um programa  
- Principal objetivo: poupar repetição de código 
- Podem ser consideradas 'subprogramas'

## Definindo uma função 
- Uma função tem uma estrutura um pouco mais complexa 
- Devemos declarar a função sempre com a palavra function  
 - Uma função deve ter um nome 
 - Pode conter argumentos / parâmetros definidos entre (); 
 - O corpo da função é definido entre {}
 - Geralmente uma função retorna um valor 
 - É possível declarar funções em variáveis 

 ```js
 function escreverNoConsole() { 
  console.log("Escrevendo no console!"); 
 }

 escreverNoConsole(); 
 ```  

 

