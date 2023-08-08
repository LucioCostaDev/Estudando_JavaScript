/* Métodos Destructuring com array
Podemos deifnir variáveis com os valores de uma array utilizando o destructuring  */

// declaração de uma array
let numeros = [2,4,5,8];

// declaração de uma array, sendo valores declarados em numeros vai fazer parte de array declarados
let [num1, num2, num3, num4] = numeros;

// imprirmir resultado 
console.log(num1); // 2
console.log(num3); // 5