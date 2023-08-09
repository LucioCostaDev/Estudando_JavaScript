/* Exercicio 5
 Crie um array com 5 nomes, incluindo o seu 
 Verifique se o seu nome existe no array
 Se existir impima alguma mensagem no console*/

//declaração de arrays
let names = ["João", "Maria", "José", "Matheus", "Rodrigo"];
//estrutura condicional com proprieades .includes Verifica se o array tem um determinado elemento
if(names.includes("João")) {
  console.log("O nome foi encontrado"); 
} else {
  console.log("O nome não foi encontrado");
}




//exemplo lucio
// let nomes = ["lucio","luciano","Pedro","Alinne","Maria"];

//  // Obs. declarado nomes.forEach porem a declaração nome no singular vai percorrer cada elemento 
//  function acharnome(){
// nomes.forEach(nome => {
// if (nomes === lucio){
// console.log(`Esse é o seu nome: ` + nomes)
// }else 
// console.log(`Esse não e seu nome: ` + nomes)
// return;
// })};

// console.log("O nome é " + nome); 


