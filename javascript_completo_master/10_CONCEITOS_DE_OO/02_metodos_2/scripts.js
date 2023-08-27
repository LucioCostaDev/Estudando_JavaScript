/* Mais sobre Métodos 
Normalmente os métodos integram com os objetos;
Até mudando os valores das suas propriedades para corresponder a lógica do programa desenvolvido; */

// declaração de metodos
const cachorro = {
  raca: 'SRD',
  uivar: function() {
    console.log("Auuuuuuuuuuuu");
  },
  rosnar: function() {
    console.log("grrrrr");
  },
  setRaca: function(raca) {
    this.raca = raca;
    //  this significa que ele está falando do contexto recebido ou seja referencia do proprio objeto
  },
  getRaca: function() {
    return "A raça é " + this.raca;
  }
}
// imprimindo a raça do cachorro
console.log(cachorro.raca); // SRD

// metodos get set 
cachorro.setRaca('Pastor Alemão'); 
console.log(cachorro.raca); // Pastor Alemão 

console.log(cachorro.getRaca()); // A raça é Pastor Alemão 




/* let pessoa = { 
  nome: '',
  setNome: function(novoNome) {
    this.nome = novoNome;
  },
  getNome: function() {
    return this.nome;
  }
}

pessoa.setNome("Matheus");

console.log(pessoa.getNome()); */