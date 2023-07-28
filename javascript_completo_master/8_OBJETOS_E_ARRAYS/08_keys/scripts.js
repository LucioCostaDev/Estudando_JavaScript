/* KEYS - Obejeto: mais sobre objetos 
E também podemos verificar quais as chaves cada objeto possui

o metodo do objeto keys serve para identificar as chaves do programa
*/

// declaração ou seja estrutura de um objeto
let obj = {
  // chave e depois o valor da propriedade
  'chave1': 1,
  'chave2': 2,
  'chave3': 3,
}

// vai mostrar as chaves
console.log(obj); // { chave1: 1, chave2: 2, chave3: 3 }

// aqui vai imprimir no formato de array o que fica facil utilizar as Keys
console.log(Object.keys(obj)); //[ 'chave1', 'chave2', 'chave3' ]