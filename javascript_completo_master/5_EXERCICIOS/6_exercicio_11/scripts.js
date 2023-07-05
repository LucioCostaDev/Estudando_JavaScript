// Faça uma estrutura IF/ELSE para verificar se um usuário pode dirigir
// Armazene em variáveis algumas informações sobre o usúario: idade, se tem CNH
// Se a idade for maior que 18 e não possuir CNH, exiba uma mensagem
// Se a idade for maior que 18 e tem CNH,  exiba uma mensagem
// Se não tiver 18 nem CNH, exiba uma mensagem 


// let idade = 23;
// let cnh = false;

// if(idade >= 18 && cnh == true) {
//   console.log("Sim, pode dirigir");
// } else if(idade >= 18 && cnh == false) {
//   console.log("Não pode dirigir, mas pode fazer a CNH");
// } else {
//   console.log("Não pode dirigir");
// }


// EXERCICIO RESOLVIDO POR MIM 
// declaração de variavel
let idade = 18
let cnh = false

// estrutura condicional
if (idade >= 18 && cnh == true) {
  console.log("Usuário possui todos requisitos")
}else if  (idade >= 18 && cnh == false) {
  console.log("Usuário não possui todos requisitos")
  // obs. a estrutura esle/if e após o else identificando nenhum valor
} else { 
  console.log("Usuário não possui nenhum requisito")
}

// Obs. cuidado na colocação de identificação de das sintaxes de maior > ou menor < 
// primeiro vem o maior depois os demais sintaxes ex.: <= >=
