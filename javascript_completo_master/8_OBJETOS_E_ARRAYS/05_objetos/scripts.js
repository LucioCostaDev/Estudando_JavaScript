/* OBjetos 
Uma coleção de propriedades, parceiros com arrays 
Podemos acessar estas propriedades
*/

/* declaração de variavel porem vai ser a criação de uma propriedade ou seja vai ser convertido para um objeto,
A utilização de chaves declara que e a criação de um objeto
E utilizado os dois pontos (:) na hora da declaração

*/
let cachorro = {
  patas: 4,
  nome: 'Shark',
  latir: function() {
    console.log("Au Au");
  }
};

// imprimir a variavel declarada ou seja aqui e de cachorro e após a propriedade .patas
console.log(cachorro.patas); // 4
// aqui vai imprimir a variavel cachorro, visto da propriedade .nome ou seja
console.log(cachorro.nome); // Shark
// dentro da variavel visto convertida em objeto pode ser colocado um metodo ou sejá um função com string 
cachorro.latir(); // Au Au

// [] = array
// {} = obj