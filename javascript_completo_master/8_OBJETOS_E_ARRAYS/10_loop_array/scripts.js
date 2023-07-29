/* Loop em arrays 
Uma técnica muito utilizada na programação e o loop nos arrays
Como é uma lista com muitos valores, muitas vezes precisamos ver cada um deles[

Obs. A lista de array e muita importante ou seja ela serve para interar em cada elemento da array e realizar alguma coisa, por isso utilizar os arrays com loops e uma tecnica bastante utilzadas ex. saber quais produtos estão na promoção num e-comerce, ou seja e recebido pelo back end todos produtos em arrys que e jogado para o front end ou seja pelo javascript com base no array 

obs. tem outas abordagem porem essa e uma padrão
*/

// declaraçao de arrays
let nomes = ["Matheus", "Maria", "José"];

// utilizando estrutura de repetição for
// let recebe a variavel 0; i tem que ser menor ou igual ao comprimento de nome que e 3; i mais pra ir para proximo nome
for(let i = 0; i <= nomes.length; i++) {
  console.log(nomes[i]); // Matheus Maria José Undefined
}

//Obs. a variavel [i] vai acessar o indice de cada elementos da array 
