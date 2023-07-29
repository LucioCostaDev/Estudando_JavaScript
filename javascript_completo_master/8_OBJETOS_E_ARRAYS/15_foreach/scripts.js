/* Métodos de array: FOREACH 
Itera cada elemento do array

*/

// declaração de uma array nomes (string)
let nomes = ["Matheus", "Maria", "José", "Pedro", "João"];

// Obs. declarado nomes.forEach porem a declaração nome no singular vai percorrer cada elemento 
nomes.forEach(nome => {
  console.log("O nome é " + nome); 
});

//Respostas do console
/* O nome é Matheus
O nome é Maria
O nome é José
O nome é Pedro
O nome é João */

// nomes[i]