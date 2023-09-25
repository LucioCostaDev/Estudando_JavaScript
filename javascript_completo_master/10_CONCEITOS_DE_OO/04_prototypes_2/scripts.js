/*  Mais sobre o prototypes
Quando criamos um objeto a partir de um outro, o base será o prototype;
Ele herdará tanto os métodos e propriedades de Object ( o prototype do objeto base);
Quanto os do objeto base para este novo; */

// declaração de objeto
pessoa = {
  maos: 2,
}

// console.log(Object.getPrototypeOf(pessoa));
// console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

// console.log(pessoa.hasOwnProperty('maos'));

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos); // 2

console.log(pessoaNova.hasOwnProperty('maos')); // false

console.log(Object.getPrototypeOf(pessoaNova) === pessoa); // true 

