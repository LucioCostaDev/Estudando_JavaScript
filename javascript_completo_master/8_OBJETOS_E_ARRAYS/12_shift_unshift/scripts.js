/* SHIFT E UNISHIFT 
Shift: remove o primeiro elemento de um array
Unishift: adiciona um ou mais elementos no início de um array
*/

// declaração de uma array com 4 elementos 
let carros = ["BMW", "Audi", "VW", "Fiat"];

// declaração de uma variavel que vai remover o primeiro elemento do indice
let removerPrimeiroCarro = carros.shift();
// vai mostrar o primeiro elemento que foi removido
console.log(removerPrimeiroCarro); // BMW
// vai mostrar os elementos da array
console.log(carros); // [ 'Audi', 'VW', 'Fiat' ]
// vai adicionar um elemento no inicio da array 
carros.unshift('Gurgel'); 

// vai mostrar os elementos já com o inicio da array modificado 
console.log(carros); // [ 'Gurgel', 'Audi', 'VW', 'Fiat' ]
// vai mostrar apenas o primeiro elemento da array
console.log(carros[0]); // Gurgel