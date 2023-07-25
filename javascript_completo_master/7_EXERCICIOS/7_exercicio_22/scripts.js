/* Exercicio de função 7
Escreva uma função que receba um número negativo e retorne um número positivo
Dica: Utilize a função da biblioteca MATH, Math.abs 
*/

// criado a função que recebe um parâmetro
function numeroPos(numNegativo) {
  // retorna a função abs (absoluto) que tem como objetivo torna o número negativo em positivo
  return Math.abs(numNegativo);
}

console.log(numeroPos(-13)); // 13
console.log(numeroPos(5)); // 5
console.log(numeroPos(-34.4)); // 34.4