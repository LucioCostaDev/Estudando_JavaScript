/* Exerciocio 10
Crie um objeto calculadora;
Que tem os seguintes métodos: somar, subtrair, multiplicar e dividir 
Os métodos só devem aceitar dois parâmentros;
Uilize cada um dos métodos e imprima os valores no console */

// declaração de um objeto calculadora
const calculadora = {
  // função soma 
  soma: function(a, b) {
    return a + b;
  },
  subtrair: function(a, b) {
    return a - b;
  },
  multiplicar: function(a, b) {
    return a * b;
  },
  dividir: function(a, b) {
    return a / b;
  }
}

console.log(calculadora.soma(3,4)); // 7 
console.log(calculadora.subtrair(5,5)); // 0 
deconsole.log(calculadora.multiplicar(8,2)); // 16
console.log(calculadora.dividir(5,2)); // 2.5

