/* JSON - estrutura de dodos 
JSON = javaScipt Object Notation 
Utilizado para comunicação entre serviços, ex: back end <-> front end
Basicamente um tipo de dado padronizadom que lembra muito os objetos do javaScript 
Obs. vai ser utilzado para comunicar via API ou receber dados via API e uma padronização de tipo de dado (serviços)
utiliza bem a sintaxes aspas duplas, abrir e fechar as chaves, conjuto de propriedades e valores que não tem metodos
*/

// declaração de variavel em propriedade
let pessoa = {
  "nome": "Matheus",
  "idade": 28
}
// Obs. não e um objeto e uma notação de objeto, ou seja e um tipo de dado que serve para comunicação entre servidor e front end, e pode receber arquivo em json e ler esses arquivos e transforma em dados

// imprimir resultado
console.log(pessoa.nome); // Matheus
console.log(pessoa.idade); // 28