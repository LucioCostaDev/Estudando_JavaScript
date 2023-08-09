/* Exercicios 7
Cria um array com 5 elementos 
Faça uma interação entre todos eles e imprima no console o valor */

/* 1º forma resolvida */

// let frutas = ["Maçã", "Banana", "Melão", "Melância", "Laranja"];

// for(let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }


/*  2º forma resolvida */
// let num = [1,2,3,4,5,];

// // utilizando estrutura de repetição for
// // let recebe a variavel 0; i tem que ser menor ou igual ao comprimento de nome que e 3; i mais pra ir para proximo nome
// for(let i = 0; i <= num.length; i++) {
//   console.log(num[i]); 

// tipodovalor();
// }

// function tipodovalor() {
//   console.log(`O valor e um `+ typeof(num));
// }

/* 3º formade executa */
let num = [1,2,3,4,5,];

function tipodovalor() {
  num.forEach(element => {
    console.log(`O valor ` + element + " é um " + typeof(num));
  });
}

tipodovalor();

// obs. O valor é um objeto porque a variável num é um array, e arrays são objetos em JavaScript. A função typeof retorna o tipo de um valor, e no caso, o tipo do valor num é object.