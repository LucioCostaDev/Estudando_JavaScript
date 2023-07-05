/* Verifique se o número é primo
  Um número primo, é um número natural, maior que 1 e apenas
  divisível por si próprio e por 1 */

// // declaração varival
// // Obs. Numero primo só e divisivel por ele ou  por 1
// let num = 37;
// let divisoes = 0;

// // O i e 1 por iniciar a divisão por 1 ou seja dividindo no minimo por 1
// for(let i = 1; i <= num; i++) {
//   // Se o numero for divisivel por i e der 0, então ele e divisivel pelo i e vai acrescentar o numero de divisões
//   // ex.: 4 vai ser divisivel 1, 2 não vai ser divisel por 3 pq? vai da quebrado e por 4, então não vai ser numero primo por ter mais de tres divisões 4 ,1,2,4 (3 divisores)
//   // ex1.: 5 - 1, não vai ser divisivel por (2-3-4) pq? o resultado vai da quebrado, e apenas por cinco: 5-1, 5 (2 divisores)
//   if(num % i == 0) {
//   // não conta numero quebrado
//     divisoes++;
//   }
// }
// //se ele for divisivel apenas por dos divisores e primo
// if(divisoes == 2) {
//   console.log(`O número ${num} é primo`);
// } else {
//   console.log(`O número ${num} não é primo`);
// }

// TESTE 3
/* Preencha a variável semPares apenas com números ímpares;

Utilize uma estrutura de loop para percorrer o array arr;

Verifique se o número é ímpar e coloque no array semPares;

No final, exiba o array semPares com console.log;
 */
// // Array inicial
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Array para armazenar os números ímpares
// var semPares = [];

// // Loop para percorrer o array arr
// for (var i = 0; i < arr.length; i++) {
//   var numero = arr[i];
  
//   // Verifica se o número é ímpar
//   if (numero % 2 !== 0) {
//     semPares.push(numero);
//   }
// }

// // Exibe o array semPares no console
// console.log(semPares);

/* TESTE 4
Crie uma função chamada classificarNumero que recebe um número inteiro como argumento.

A função deve retornar uma string com a classificação do número de acordo com as seguintes regras:

Se o número for positivo e par, retorne "Positivo e Par".

Se o número for positivo e ímpar, retorne "Positivo e Ímpar".

Se o número for negativo, retorne "Negativo".

Se o número for zero, retorne "Neutro".

function classificarNumero(numero) {
  if (numero > 0) {
    if (numero % 2 === 0) {
      return "Positivo e Par";
    } else {
      return "Positivo e Ímpar";
    }
  } else if (numero < 0) {
    return "Negativo";
  } else {
    return "Neutro";
  }
} */