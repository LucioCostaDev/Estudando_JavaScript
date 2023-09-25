/*  Prototypes
Um objeto fallback de outro objeto;
Quando um objeto recebe um requisição de uma propriedade que não tem, ela é procura no prototype deste objeto;
O protoytpe de um objeto criado do zero é o Object, que tem os métodos nativos da linguagem  */

// declarando objeto pessoa
const pessoa = {
  maos: 2,
}

console.log(Object.getPrototypeOf(pessoa)); // Objetct: null prototype~] {}
console.log(Object.getPrototypeOf(pessoa) === Object.prototype); // true

console.log(pessoa.hasOwnProperty('maos')); // true