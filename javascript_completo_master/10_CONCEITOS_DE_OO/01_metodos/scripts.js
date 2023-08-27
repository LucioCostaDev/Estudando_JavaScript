/* O qué orientação a objetos ?
Um a forma de programa, que utiliza os objetos como seu princípio;
Além de utilizar conceitos e técnicas que envolve objetos;
A maioria dos softwares, na parte de back-end, são desenvolvidos em cima desse paradigma;
Grandes frameworks se aproveitam desta técnica: Laravel, Django e etc.
*/

/* Métodos 
Propriedades que servem como funções;
Ou seja, as funções dos objetos;
Invocamos os métodos da mesma maneira que funções */

/* Os metodos são separados por virgulas  */
const cachorro = {
  uivar: function() {
    console.log("Auuuuuuuuuuuu");
  },
  rosnar: function() {
    console.log("grrrrr");
  },
  soma: function() {
    console.log(typeof"oi");
  }, 
  variado: function() {
    console.log(typeof.1234);
  },
  contagem: function() {
    const nome = "Lucio";
      for (let i = 0; i < nome.length; i++) {
        console.log(nome[i]);  
    }
  }
}

cachorro.uivar();
cachorro.rosnar();
cachorro.soma();
cachorro.variado();
cachorro.contagem();