/* Métodos de array - SLICE
Retorna um array a partir de outro array
O array retornado é determinado pelo parâmetros que são os índices de início e fim do novo array

Obs. varival.slice (valor inicial até valor final -1 )
utilizar number negativos e decramentado apartir do ultimo elemento
*/

// declaração de array 
let nums = [0,1,2,3,4,5,6,7,8,9];
         // 0,1,2,3,4,5,6,7,8,9 indices
//imprimir .slice (4,5 / -1)
console.log(nums.slice(4,5)); // [ 4 ]
//imprimir .slice (4,5 / -1)
console.log(nums.slice(4,6)); // [ 4, 5 ]
//imprimir .slice (4,6 / -1)
console.log(nums.slice(2)); // [ 2, 3, 4, 5, 6, 7, 8, 9]
//imprimir .slice (2)
console.log(nums.slice(-2)); // [ 8, 9 ]
//imprimir .slice (3,-2)
console.log(nums.slice(3,-2)); // [ 3, 4, 5, 6, 7 ]