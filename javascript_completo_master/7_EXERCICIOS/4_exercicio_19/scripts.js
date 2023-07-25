/* Exercicio 4
Escreva uma função que retorne um número aleatório 
O número máximo retornado deve ser passado via parâmetro
Dica: utilize a função Math.random() e uma função da biblioteca MATH retorna 0 a 10 aleatoriamente*/

// criação da função que vai receber um parâmetro
function numeroAleatorio(num) {
  // return com a função 
  return Math.floor(Math.random() * num) + 1;
  // math.floor tem como função retorna o número inteiro mais proximo que é menor ou igual ao número, ou ele arredonda para baixo
}

// imprimi com console.log e dentro a função recebendo parâmetro
console.log(numeroAleatorio(10)); // ou seja toda vez que executa pode gerar um numero aleatorio de 0 à 10 conforme passado como parâmetro, sempre arrendondando para baixo  com math.floor e gerando inteiros 
console.log(numeroAleatorio(100)); // 80 ou seja de 0 a 100
console.log(numeroAleatorio(50)); // 50 ou seja de 0 a 50
 /*  caso não tenha math.floor gera numeros aleatorios como float, exemplos 
 7.049304448477713
 87.99597147630969
 */
