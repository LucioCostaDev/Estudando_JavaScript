/* Objetos: deletando e criando propriedades 
Podemos adicionar e deletar propriedades ao longo do nosso programa
*/

//declaração de variavel
let pessoa = {
  nome: "Matheus",
  idade: 29,
  profissao: "Programador",
}

// aqui vai imprimir o nome que esta dentro da variavel pessoa
console.log(pessoa.nome); // Matheus

// aqui deleta a propriedade .nome que está dentro da variavel pessoa
delete pessoa.nome;

// console aqui vai imprimir a varival porém da undefined devido  a propriedade ter sido excluida
console.log(pessoa.nome); // undefined

// aqui vai imprimir as variveis
console.log(pessoa); // { idade: 29, profissão: 'Programador' }
// aqui foi adicionado na variavel pessoa um propriedade .casado que receve false
pessoa.casado = false;
// aqui vai imprimir o resultado da declaraveis
console.log(pessoa.casado); // false