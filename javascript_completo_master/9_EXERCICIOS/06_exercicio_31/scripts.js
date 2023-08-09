/* Exercício 6
Crie dois arrays, um com mais de 5 elementos e outro com menos 
Faça uma função que verifica o número de elementos 
Se possuir menos que 5, imprima "Poucos elementos" no console
Se tiver mais, imprima "Muitos elementos*/


// declaração de arrays  
let nums = [1,2,3,4,5,6];
let nums2 = [1,2,3];

//criação da função e (arr) como parâmetro
function verificaElementosArray(arr) {
  // estrutura condicional se (parâmetro (arr) .propriedade(.length) for maior ou igual 5
  if(arr.length >= 5) {
    console.log("Muitos elementos");
  } else {
    console.log("Poucos elementos");
  }
}

// imprimir resultado
verificaElementosArray(nums); // Muitos elementos
verificaElementosArray(nums2); // Poucos elementos
