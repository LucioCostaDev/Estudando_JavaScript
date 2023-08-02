/* Métodos elementos em um array em uma frase, por meio de um separador */

//declaração de variavel 
let frase = "Testando o método split";
// declarando a frase sem delimentador
let palavras = frase.split(" "); 
// declarando com delimitador;
let novaFrase = palavras.join("@");

// imprimir com demilitador
console.log(novaFrase); // Testando@o@método@split
// imprimir 
console.log(palavras.join(" ")); // Testando o método split

