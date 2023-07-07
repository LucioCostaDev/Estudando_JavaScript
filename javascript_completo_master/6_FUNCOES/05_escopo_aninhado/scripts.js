/* Escopo aninhado (nested Scopes)
Por causa da possibilidade de criar um escopo, podemos ter mais níveis de escopo */

//declaração da variavel (escopo Global)
let a = 10;

// criação da função multiplicar
// Visto que dentro da função foi proposto uma estrutura de condição if para avaliar um resultado.
// Obs. mais a função tem como proposito a multiplicação que função da mesma
function multiplicar(x,y) {
  // aqui a variavel a vai receber o valor da multiplicação entre x * y que esta como parâmetro dentro da função
  let a = x * y; // ex. let a = x(0) * y(0) delcaração da variavel função

  // estrutura condicional if
  if(a > 10) {
    // declaração da varivavel de dentro da estrutura IF
    let a = 0;
    // incrememtando logo a que e 0 vai pra 1
    a++;
    // logo resultado e 1
    console.log(a); // 1 devido o incremento

  }

  console.log(a); // 10

}

console.log(a); // 

multiplicar(3,7);

/* Resultado */
// 1º 10 da variavel Global
// 2º 1 da função
// 3º 21 da chamada da função com argumentos