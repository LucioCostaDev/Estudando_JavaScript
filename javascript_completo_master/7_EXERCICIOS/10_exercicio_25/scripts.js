/* Exercicio de função 10 
Escreva uma função que recebe um númerom, e o decremento de 1 em 1 com um loop
Além disso imprima somente os números pares no console */


// criação de uma função com um parâmetro 
function imprimePar(num) {

  // utilizando estrutura de repetição for
  // variavel i = num; se i for maior ou igual a 0; i-- decrementa ou seja diminui 1
  for(let i = num; i >= 0; i--) {
    // estrutura codicional 
    // se i resto 2 for igual a 0 faça 
    if(i % 2 == 0) { 
      // vai imprimir apenas os pares
      console.log(i); 
    }
  }
}

imprimePar(11); // 10
imprimePar(21); // 20
imprimePar(31); // 30

