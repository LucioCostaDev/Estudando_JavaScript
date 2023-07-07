/* Mais sobre funções*/

// criação de uma função para multiplicar três numeros
function multiplicarTresNumeros(x,y,z) {
  return x * y * z;
}
// 1º forma utilzando a chamada direto na função
console.log(multiplicarTresNumeros(2,3,4));

// 2º declarando uma variavel MULT que vai receber uma função com passagem de paramentos diretamente
const mult = multiplicarTresNumeros(5,4,8);
// vai realizar console para imprimir o valor MULT
console.log("O valor de mult é " + mult);

// 3º criação de uma função com variaveis declarads no qual vai receber valores na sua chamada (idade, cnh), que vai fazer uma estrutura condicional diretamente na função, com objetivo de saber se uma pessoa está apta ou não
function podeDirigir(idade, cnh) {
  if(idade >= 18 && cnh == true) {
    console.log("Pode dirigir");
  } else {
    console.log("Não pode dirigir");
  }
}

//chamada da função com console
console.log(podeDirigir(19,true));
console.log(podeDirigir(25,true));
console.log(podeDirigir(44,0));
console.log(podeDirigir(19,1));
console.log(podeDirigir(17,false));

//Obs.: não passando argumento para função fica como 0 padrao no argumento