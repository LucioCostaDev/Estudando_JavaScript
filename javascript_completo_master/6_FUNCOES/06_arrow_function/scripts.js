// Obs. frameworks como angular, react, vue
/* ARROW FUNCTIONS
Uma outra forma de escrever funções
Bem utilizada nos frameworks modernos
Porém não deve substituir as functions por completo (veremos mais tarde nos detalhes)
*/

let consoleTeste = () => {
  console.log("Olá mundo!");
};

consoleTeste();

let soma = (a,b) => {
  return a + b;
};

console.log(soma(10,20));