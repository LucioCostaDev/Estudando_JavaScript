/* Exercicio de funções 5
Escreva uma função que recebe a idade de uma pessoa 
Se ela tem mais de 18 anos ela pode entrar na auro escola, imprima uma mensagem informando isso
Se ela tem menos, ela não pode, imprimir outra mensagem com este aviso
Execute a função nos dois casos
*/

// criação da função com um argumento (idade)
function podeEntrarNaAuto(idade) {
  // se idade for maior ou igual a 18 faça
  if(idade >= 18) {

    console.log("Pode se matricular na auto escola");
  // se não faça isso
  } else {

    console.log("Não pode se matricular na auto escola");

  }

}

//imprimir o resultado da função colocando um argumento direto na função 
podeEntrarNaAuto(16); // Não pode se matricular na auro escola
podeEntrarNaAuto(25); // Pode se matricula na auto escola
podeEntrarNaAuto(17); // Não pode de matricular na auto escola
podeEntrarNaAuto(18); // Pode se matricular na auto escola 