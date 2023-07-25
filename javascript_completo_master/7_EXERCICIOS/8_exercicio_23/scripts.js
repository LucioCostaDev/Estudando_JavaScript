/* Exercicio de função 8
Escreva uma função que recebe uma string 
Se o texto conter mais de 10 caracteres imprima "Texto muito longo"
Se conter menos, imprima "Texto dentro do limite"
*/

// criação da função que recebe um parâmetro
function checarTamanhoTexto(texto) {
  // se o parâmetro texto que recebe uma propriedade length que verfica a quantidade de caracteres for > 10 faça ou seja imprima 
  if(texto.length > 10) {
    console.log("Texto muito longo");
    // se não imprima isso
  } else {
    console.log("Texto dentro do limite");
  }
  // com esse console aqui ele passa a quantidade de caracteres dos parâmetros passados
  console.log(texto.length);
}

checarTamanhoTexto("Teste"); // Texto dentro do limite
checarTamanhoTexto("Vamos testar se funciona"); // Texto muito longo
checarTamanhoTexto("10-"); // Texto dentro do limite

/* OBS. .length conta os espaços dados  */