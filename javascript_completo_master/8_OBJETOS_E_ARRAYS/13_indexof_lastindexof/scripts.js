/* Metodos - IndexOf e lastIndexof
IndexOf: encontra o índice de um determinado elemento
ele procura de frente para trás, crescente os valores conforme solicitado 

lastIndexOf: encontrar o último índice de um elemento
ele procura de trás para frente ou descrecente os valores conforme solicitado
*/

// declaração de uma array com numbers
let nums = [5,6,2,4,9,6,2];
         // 0,1,2,3,4,5,6  indices 
// vai imprimir buscando de frente para trás 
console.log(nums.indexOf(2)); // 2
// vai imprimit de tras para frente visto que devido o 2 na array e o ultimo ele vai pega o 6
console.log(nums.lastIndexOf(2)); // 6
//testando lastIndesOf
console.log(nums.lastIndexOf(0)); // -1
///testando lastIndesOf
console.log(nums.lastIndexOf(1)); // -1
//testando IndexOf
console.log(nums.indexOf(0)); // -1
//testando IndexOf
console.log(nums.indexOf(1)); // -1

/* Obs. só vai buscar indices que estão na array caso não esteja o rsultado e -1 */