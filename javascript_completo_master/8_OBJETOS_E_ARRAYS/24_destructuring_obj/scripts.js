/* Métodos: Destructuring com objetos
Podemos definir variaveis com propriedades do objetos com uma notação diferente, chamada destructuring

Obs.: bastante usado em Angular, Reactr
*/

// declaração de variavel em um objeto
let obj = {
  rodas: 4,
  portas: 4,
  tetosolar: true,
  motor: '2.0'
}

//  aqui e realizado 
const {rodas: vRodas, portas: vPortas, tetosolar: vTetoSolar, motor: vMotor} = obj;

console.log(vRodas); // 4
console.log(vPortas); // 4 