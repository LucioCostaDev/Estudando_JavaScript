/* MUTAÇÃO - Mutability
Um objeto pode ser herdar todas as características do outro, virando uma referência ao mesmo;

OBS. pode criar um objeto novo com todas as carcteristica do mesmo ou seja A para B porém não igual
*/

// criação de um objeto pessoa
let pessoa = {
  nome: "Matheus"
}

// declaraçao de variavel que vai mostra que são iguais
let pessoa2 = pessoa;

// criação de outro objeto que vai mostrar que ao comparar esse vai ser diferente de outro objeto
let pessoa3 = {
  nome: "Matheus"
}

// impressão 
console.log(pessoa == pessoa2); // true
console.log(pessoa3 == pessoa); // false
console.log(pessoa3 == pessoa2); // false

// variavel 
pessoa2.nome = "Pedro";

console.log(pessoa.nome); // Pedro 

pessoa.nome = "Maria";

console.log(pessoa2.nome); // Maria 

/* Ou seja o conceito de mutabilidade e conseguir criar um objeto identico e com refência ao antigo */
