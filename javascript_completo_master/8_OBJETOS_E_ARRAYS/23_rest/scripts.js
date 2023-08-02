/* Rest operator
Uma forma de uma função receber indefinidos parâmentros 
O operador rest vai virar ou transforma em uma array
O parâmetro é definido por nome 
*/

// declaração de varias variaveis 
let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

// criação de uma função com uma estrutura de repetição
function imprimirNumeros(...args) {
  for(let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

imprimirNumeros(num,num1,num2); 
console.log('pausa'); //1 5 3
imprimirNumeros(num2,num3);
console.log('pausa');// 3 4
imprimirNumeros(2,6,7,8,9,5,3,2,5,6,2,4,5); //