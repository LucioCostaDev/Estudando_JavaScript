/* Exercicio 9 
criar uma array a partir de uma frase;
Imprima cada palavra do array no console por meio de um for;
 */


//declaração de uma array
const frase = "Ser um programador bom requer muita prática";

const arrFrase = frase.split(" ");

for(let i = 0; i < arrFrase.length; i++) {
  console.log(arrFrase[i]); 
  /* Ser
  um
  programdor
  bom
  requer
  muita
  prática */
}