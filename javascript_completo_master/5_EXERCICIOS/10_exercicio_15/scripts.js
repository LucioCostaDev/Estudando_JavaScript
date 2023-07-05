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

