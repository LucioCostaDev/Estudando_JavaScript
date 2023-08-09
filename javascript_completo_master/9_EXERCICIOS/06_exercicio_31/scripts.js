/* Exercício 6
Crie dois arrays, um com mais de 5 elementos e outro com menos 
Faça uma função que verifica o número de elementos 
Se possuir menos que 5, imprima "Poucos elementos" no console
Se tiver mais, imprima "Muitos elementos*/


// declaração de arrays  
// let nums = [1,2,3,4,5,6];
// let nums2 = [1,2,3];

// //criação da função e (arr) como parâmetro
// function verificaElementosArray(arr) {
//   // estrutura condicional se (parâmetro (arr) .propriedade(.length) for maior ou igual 5
//   if(arr.length >= 5) {
//     console.log("Muitos elementos");
//   } else {
//     console.log("Poucos elementos");
//   }
// }

// // imprimir resultado
// verificaElementosArray(nums); // Muitos elementos
// verificaElementosArray(nums2); // Poucos elementos

/* Exercicios 7
Cria um array com 5 elementos 
Faça uma interação entre todos eles e imprima no console o valor */

let num = [1,2,3,4,5,];

// utilizando estrutura de repetição for
// let recebe a variavel 0; i tem que ser menor ou igual ao comprimento de nome que e 3; i mais pra ir para proximo nome
// for(let i = 0; i <= num.length; i++) {
  // console.log(num[i]); // Matheus Maria José Undefined

tipodovalor();


function tipodovalor() {
  // console.log(`O valor e um `+ typeof(num));

  num.forEach(element => {
    console.log(`O valor ` + element + " é um " + typeof(num));
  });
  
}


// obs. O valor é um objeto porque a variável num é um array, e arrays são objetos em JavaScript. A função typeof retorna o tipo de um valor, e no caso, o tipo do valor num é object.