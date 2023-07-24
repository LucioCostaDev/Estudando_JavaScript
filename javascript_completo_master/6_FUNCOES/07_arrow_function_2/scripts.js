/* Mais sobre arrow functions
Se só tem parâmetro podemos remover os parênteses do argumento e o return

Se a expressão for pequena, pode até ser feita em uma linha sem prejudicar a leitura do código
*/

// criação de uma função com arrow function;
const multiplicarPorDois = (x) => {
  return x * 2;
}

console.log(multiplicarPorDois(2));

// outra forma de utilizar o arrow function quando a função for simples
const multiplicarPorDois2 = x => x * 2;

console.log(multiplicarPorDois2(4));