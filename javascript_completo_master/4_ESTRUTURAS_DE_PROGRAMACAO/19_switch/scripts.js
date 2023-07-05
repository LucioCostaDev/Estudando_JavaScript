// Estrutura condincional: SWITCH
// Utilizado quando a necessidades de vários IFs, pode ser  utilizado o switch/case
// Para sair do CASE pode ser ultilzado o break
// Pode ser utilizado a expressão default, para caso nenhum valor for correspondido
// Obs. muitos programadores optam por usar vários IFs!


// declaração variavel nome que recebe Matheus 
let nome = "Matheus";

// Enquanto variavel (nome)
// Vai imprimir de acordo com a variavel declarada
// Obs. a abertura do switch se da pelo dois pontos : em vez das chaves{}
switch(nome) {
  case "Matheus":
    console.log("O Nome é Matheus");
    break;
  case "João":
    console.log("O nome é João");
    break;
  default:
    console.log("O nome não foi encontrado");
    break;
}

// if(nome == "Matheus") {
//   console.log("O Nome é Matheus");
// } else {
//   console.log("O nome não foi encontrado");
// }