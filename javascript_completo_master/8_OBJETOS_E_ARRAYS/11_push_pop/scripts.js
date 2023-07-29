/* Métodos de array: push e pop são metodos prontos 
Push = serve para inserir elementos na array
Pop = serve para remover um elemento numa array

ambos inserir ou remover sço feitos apatir do fim da array
*/

// declaração da array com elementos string
let nomes = ["Matheus", "Maria", "José"];

// 
let elementoRemovido = nomes.pop();

console.log(elementoRemovido);
console.log(nomes);

nomes.push('Pedro');

console.log(nomes);