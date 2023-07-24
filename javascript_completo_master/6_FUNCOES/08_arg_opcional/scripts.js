/* Argumento opcionais ou não definidos
podemos chamar uma função em js o número igual de parâmetros determinados; 
*/

// criação de uma função soma
function soma(a,b) {
  // comparação 
  if(a === undefined || b === undefined) {
    console.log("Esta função precisa ter os dois argumentos");
  } else {
    // retorna o valor 
    return a + b;
  }

}

console.log(soma(1));

console.log(soma(1,2));


// criação de uma função onde vai receber dois argumentos e fazer o teste
function saudacao(nome, idade) {
  if(idade === undefined) {
    console.log("Olá " + nome);
  } else {
    console.log("Olá " + nome + " você tem " + idade + " anos");
  }
}

saudacao("Matheus");

saudacao("Igor", 29);