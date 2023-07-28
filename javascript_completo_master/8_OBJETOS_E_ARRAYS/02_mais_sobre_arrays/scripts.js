/* Mais sobre arrays 
Podemos acessar um array pelo índice, por exemplo: arr[1]
Lembrando que primeiro indice sempre é o 0, ou seja, para acessar o primeiro elemento: arr[0]
*/

// declaraçoes de variaveis com let que tem elementos numa array
let arr = [1, 4, 5, 6, 7];
let nomes = ['Matheus', 'João', 'Aléxia'];
let bool = [true, false, true];

// aqui vai solicita o segundo elemento da array
console.log(arr[1]); // 4
// aqui vai acessar o primeiro elemento da array
console.log(nomes[0]); // Matheus
// aqui vai acessar o teceiro elemento da array
console.log(bool[2]); // true
/* aqui o arr.length da o numero de elementos da array ou seja 5 - 1 = 4 ou seja 
 essa e outra forma de pegar o ultimo elemento da array*/ 
console.log(arr[arr.length - 1]); // 7
// forma tradicional pegando ultimo elemento 
console.log(arr[4]) // 7



