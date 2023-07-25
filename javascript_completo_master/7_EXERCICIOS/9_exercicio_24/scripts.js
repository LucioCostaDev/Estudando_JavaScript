/* Exercicio de função 9
Escreva um função que recebe dois números, o primeiro é a base e o segundo a potência
Depois faça essa operação e retorne o resultado
Por exemplo: 3,2=9
*/

// criação da função recebendo dois parâmetros
function potencia(a,b) {
  //Duas forma de resolver
  // 1º utilizando a função Math.pow
  // return Math.pow(a,b);

  // 2º utilizando direto colocando dois asteristicos de multiplicaçao o que faz virar potencia e calcula
  return a ** b;
}

// imprimir a pontencia visto que estão colocando os parâmetros direto na função 
console.log(potencia(2,2)); // 4
console.log(potencia(3,2)); // 9
console.log(potencia(4,4)); // 256
console.log(potencia(5,2)); // 25