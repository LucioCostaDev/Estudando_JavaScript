/* Métodos de sting: trim
Remove tudo que não é string
*/

// Obs. \n = da um espaço em branco

//declaração de variavel string
let nome = " \n Matheus \n ";
console.log(nome);
/* resposta
 
   Matheus 
 
*/

// declaração para correção = da varialvel nome com metodo string trim
let nomeCorrigido = nome.trim();
console.log(nomeCorrigido); // Matheus
