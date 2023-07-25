/*  Exercicio de função 6
Escreva uma função que detecta o tipo de dados passado
Verifica se é um: number, boolean ou string
E retorne uma mensagem para cada tipo 
Execute uma função para cada caso
*/

// criado a funçao recebendo um parâmetro
function verificaTipoDeDado(dado) {

  // se typeof que verifica que tipo de arquivo no qual o dado ainda vai ser adicionado for iguql `string`
  if(typeof dado === 'string') {
    // imprimi"Este dado é uma string
    console.log("Este dado é uma string");
    //se não se "Este dado é um number"
  } else if(typeof dado === 'number') {
    console.log("Este dado é um number");
    //se não se "Este dado é um boolean"
  } else if(typeof dado === 'boolean') {
    console.log("Este dado é um boolean");
  }

}

verificaTipoDeDado(true); // Este dado é um boolean
verificaTipoDeDado(23); // Este dado é um number
verificaTipoDeDado("teste"); // Este dado é uma string