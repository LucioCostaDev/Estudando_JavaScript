/* Métodos de array: includes 
 Verifica se o array tem um determinado elemento

 identificar se a array tem especifico elemento 
*/

// declaração de uma array 
let carros = ["BMW", "Fiat", "VW", "Renault", "Audi"];

//imprimir ou seja verificar se tem os elementos dentro da array e retorna
console.log(carros.includes("Fiat")); // true
console.log(carros.includes("Ford")); // false

// Obs. caso tenha o elemento pode se criar uma função e pega essa informação entre outras
// if(carros.includes("BMW")) {} exemplo criação de uma estrutura condicional