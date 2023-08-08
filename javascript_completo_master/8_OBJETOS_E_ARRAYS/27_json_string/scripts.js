/* Json 
Rigoroso na estrutura, ou seja, você deve seguir o padrão imposto por este formato
Apenas aspas duplas
Não aceita comentários
Podemos converter o JSON para uma string de forma facil 
Ou tambem uma strig pata JSON*/

// declaração de variavel em json
let pessoa = {
  "nome": "Matheus",
  "idade": 28,
  "profissao": "Programador",
  "hobbies": ["Video game", "Leitura", "Correr"] // uma array
}

// declaração de variavel no qual transforma em uma string
let pessoaTexto = JSON.stringify(pessoa); //converte em texto

// imprimir resultado em string
console.log(pessoaTexto); //{"nome":"Matheus","idade":28,"profissao":"Programador","hobbies":["Video game","Leitura","Correr"]}
{

// console.log(pessoaTexto.nome);

//declaração que transforma em json o que pode ser acessado
let pessoaJSON = JSON.parse(pessoaTexto);


console.log(pessoaJSON); // Video game
/* /* {
  nome: 'Matheus',
  idade: 28,
  profissao: 'Programador',
  hobbies: [ 'Video game', 'Leitura', 'Correr' ] */

//imprimir resultado
console.log(pessoaJSON.hobbies[0]); //Video game


