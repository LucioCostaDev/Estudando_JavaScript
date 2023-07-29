/* Métodos de array: push e pop são metodos prontos 
Push = serve para inserir elementos na array
Pop = serve para remover um elemento numa array

ambos inserir ou remover sço feitos apatir do fim da array
*/

// declaração da array com elementos string
let nomes = ["Matheus", "Maria", "José"];

// aqui vai ser criado um varavel que vai excluir o ultimo elemento da string
let elementoRemovido = nomes.pop();

// vai mostrar o elemento excluido
console.log(elementoRemovido); // José 
// aqui vai mostrar os elemento da array visto que sem José que foi excluido
console.log(nomes); // [ 'Matheus', 'Maria' ]
//aqui vai adicionar Pedro a array 
nomes.push('Pedro');
// imprimindo os elementos da array levando em consideração que foi add Pedro a array
console.log(nomes); // [ 'Matheus', 'Maria', 'Pedro' ]