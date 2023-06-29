// Estruturas de controles são, um programa é executado de cima para baixo, 
// com as estruturas podemos modelar o fluxo do programa
// E dependendo dos valores de statements e expressions, ele tomara um camimho diferent
// o programa vai executar um bloco de código, se algo acontecer
// Onde algo é a condição imposta por um statement
// que resulta em um boolean (true or false)

// ESTRUTURA CONDICIONAL: IF

// Atribuição
let idade = 19;
// condição e imprimindo resultado
if(idade == 19) {
  console.log("A idade é = 19");
}

// condição se idade for maior que 25 imprimi
if(idade > 25) {
  console.log("A idade é maior que 25");
}

// let nome e declarado com Matheus 
let nome = "Matheus";
// se varial nome for igual a Matheus e a idade for maior que 10 imprimi
if(nome == "Matheus" && idade > 10) {
  console.log("Liberado!"); // resosta: Liberado
}

// declarando true ou seja verdade
let passaporte = true;
// um true já e o suficiente para atender o (ou) e fazer a liberado2
if((nome == "Matheus" && idade > 30) || passaporte == true) {
  console.log("Liberado 2!");
}