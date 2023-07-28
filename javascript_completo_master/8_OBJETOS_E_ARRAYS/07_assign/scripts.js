/* ASSIGN - Objetos: mais usados sobre objetos 
Podemos copiar todas as propriedades de um objetos para outro
*/

// Objetos carro e suas propriedades 
let carro = {
  portas: 2,
  portamalas: '200l',
  motor: '2.0'
}
// imprimindo os resultados 
console.log(carro); // { portas: 2, portamalas: '200l', motor: '2.0' }

// Objeto adicionando outras propriedades
let adicionais = {
  tetosolar: true,
  arcondicionado: true,
}

// adicionando propriedades do objeto adicionais ao objeto carro 
Object.assign(carro, adicionais);
// aqui vai mostrar as propriedades que foram adicionadas 
console.log(carro); 
/* {
  portas: 2,
  portamalas: '200l',
  motor: '2.0',
  tetosolar: true,
  arcondicionado: true
} */

// adiconando inverso de carro para adicionais
Object.assign(adicionais, carro);
// imprimir adicionais
console.log(adicionais);
// imprimir carro
console.log(carro)