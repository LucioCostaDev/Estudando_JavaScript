/* Escopo de uma função
O que acontece dentro de uma função fica separado do escopo global
O escopo global seria todo o arquivo de JavaScript*/

// declaração de varivel global, varival y = 10
let y = 10;

// criação de função imprimir, visto com uma declaração de variavel y = 150 visto que dentro da função
function imprimir() {
  let y = 150;

  console.log(y);
}

//chamada da função 
imprimir();
//chamada atraves do console.log()
console.log(y);

// Obs.: Independete da variável ser igual não interfere nos resultados visto que vai ser mostrado de acordo com a ordem de chamada, ou seja o escopo não altera o valor de uma ou outra 
