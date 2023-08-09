/* Exercicio 4
Adicione a propriedade janelas no ônibus, com o valor de 20
Delete a propriedade rodas
Imprima a propriedade janelas no console */

// declaração de um objeto
let onibus = {
  rodas: 8,
  limitePassageiros: 40,
  portas: 2
};

// deletando um propriedade no objeto (delete)
delete onibus.rodas;
// consultar pra ver se foi deletado
console.log(onibus.rodas); // undefined
// adicionando propriedade janela ao objeto onibus e atribuindo 20
// obs. a criação e muito importante, não precisa instanciar 
onibus.janelas = 20;
// mostrar as propriedades do onibus
console.log(onibus); // { limitePassageiros: 40, portas: 2, janelas: 20 }
// mostrar o valor da propriedade janela
console.log(onibus.janelas); // 20



// let onibus {
//   rodas = 8,
//   passageiros = 40,
//   portas = 2 
// };

// console.log()

