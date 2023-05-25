# Javascript studies since beggining to advanced

This respository is about the study about Javascript since the begging to advanced. The topics studies is from the course from Mateus at Udemy

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

Emtender conceitos fundamentais do JS e instalar todas as depencências

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

# 19. Node JS

Aprender o que é Node JS e as suas possibilidades para o desenvolvimento web

## O que é Node?

- Não é uma linguagem de programação
- Uma ferramenta construída sobre o motor Javascript do Google Chrome para criar applicações rápidas e escaláveis
- O problema: cada conexão de um cliente aloca um espaço na memória
- Com Node: cada conexão é um evento executado na engine no Node
- Ou seja, o Node suporta muito mais conexões do que PHP e Java em uma máquina igua, por exemplo

## Instalando o node

- site oficial: nodejs.org/en
- no windows é um executável que funciona com a maiorados outros programas para instalar
- no linux: sudo apt install nodejs e sudo apt install nom
- depois teste com node -v

## Testando o Node

Podemos criar um arquivo Javascript e executar o node

```js
let msg = "Hello World";
console.log(msg);

node index.js
```

## O comando node

- Podemos executar instruções de Javascaript rodando o comando node
- Podemos fazer operações matemáticas, utilizar funções do Javascript e muito mais

## O npm

- Ferramenta utilizada para instalar módulos de Javascript
- Que podem fazer desde operações matemãticas até comunicação HTTP
- Instalamos um pacote pelo comando `npm instal pacote`
- Vem junto com o node
