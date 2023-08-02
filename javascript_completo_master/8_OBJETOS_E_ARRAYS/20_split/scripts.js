/* Método de string: split 
Divide uma string por um separador, e retorna uma array

*/
// declaração de variavel
let frase = "Testando o método split";
//vai imprimir o texto demilitado de acordo com o parâmetro passado ou seja retirando o informado
console.log(frase.split(" ")); // [ 'Testando', 'o', 'método', 'split' ]

// declaração de variacel com metodo
let palavras = frase.split(" ");
// vai imprimir a variavel demilitada
console.log(palavras); //[ 'Testando', 'o', 'método', 'split' ]
// declaração de variavel 
let produtos = "Banana;Maçã;Jaca;Pera;Bola;Tapete";
// vai imprimir a variavel com strins demilitada, porém retirando o informado
console.log(produtos.split(';')); // [ 'Banana', 'Maçã', 'Jaca', 'Pera', 'Bola', 'Tapete' ]