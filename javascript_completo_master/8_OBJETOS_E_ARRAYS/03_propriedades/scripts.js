/* Propriedades
Propriedades são informações que podem ser verificados de um valor
Quase todos os valores de javascript tem propriedades, menos null e undefined
Podemos acessar as propriedades de duas maneiras

Obs. o length ver o comprimento de um array ou string, verifica a quantidade de elemetos ou verificada os elementos nos posicinamentos

Obs. toda vez digita um ponto(.) e um nome e uma propriedade ou ['length'] ou [1] são propriedades
*/


// declaração de variavel String
let nome = "João";

// propriedade length vai verifica a quanidade de carcteres
console.log(nome.length); // 4

// declaração de variavel com arrays que contem numeros
let numeros = [1,23,34,5,6,7,8];

//quantidade de elementos dentro da array
console.log(numeros.length); // 7
// outra forma de verificar quantidade de elementos de uma array
console.log(numeros['length']); // 7
// verficando o segundo elemento da array visto que inicia indice 0
console.log(numeros[1]); // 23
