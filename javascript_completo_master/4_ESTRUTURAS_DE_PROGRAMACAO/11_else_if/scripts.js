// Estrutura de condição else if 
// pode ser encadeado mais condições com else if 
// ou seja antes de executar um else, ou ate mesmo sem ele, podemos verificar mais condições

//declaração de uma variavel = "Matheus" e idade = 28
let nome = "Matheus";
let idade = 28;

// se nome for diferente E nome for igual executa IF
if(nome != undefined && nome == "Joaquim") {
  console.log("Nome está definido");
// senão se nome for igual E nome.length que e um variavel com uma função de contar qtd letras 
// for maior E idade == 50 execute else if 
} else if(nome == "Matheus" && nome.length > 5 && idade == 50) {
  console.log("O nome é Matheus");
// senão execute else 
} else {
  console.log("Não é Matheus!");
}

//pode ser usado ELSE IF sem ELSE
// se 1 for maior que 2 faça
if(1 > 2) {
  console.log("Teste");
// senão se 1 for igual a 1 faça
} else if(1 == 1) {
  console.log("Testando");
}