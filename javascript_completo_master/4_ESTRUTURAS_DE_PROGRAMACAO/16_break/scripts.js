// forçando a saida de um loop: break
// As vezes e preciso que seja para do o loop antes que complete todo o ciclo
// com isso so e preciso usar o break
// observação e utilizado porem não muito

// declaração de variavel
let nome = "Matheus";

//let recebe 1; se i for menor que 10 faça; i recebe i + 1
for(let i = 0; i < 10; i = i + 1) {

  // 1º Bloco de estrutura condicional  
  if(i == 3) {
    nome = "João";
  }
    // 1º 0 Matheus false 
    // 2º 1 Matheus false
    // 3º 2 Matheus false
    // 4º 3 João    true
    // 5º 4 Jaão    true
  
  // 2º Bloco de estrutura condiconal
  // Só vai parar quando as duas condições forem verdadeira
  // Obs. não paro no bloco 1º devido a condição do 2º bloco não ter sido atendido
  if(i == 5 && nome == "João") {
    console.log("O nome é João, pode parar");
    break;
    // 6º 5 João true
    // executa o console e para (break)
  }

  // para imprir o resulta da variavel (i)
  console.log(i);
  
}