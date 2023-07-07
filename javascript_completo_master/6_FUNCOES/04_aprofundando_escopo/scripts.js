/* Mais sobre escopo
Atualemte com let e const, qualquer bloco de código pode separar seu escopo (um if por exemplo)
Isso é muito bom pois separa os contextos, com var isso não acontecia
Ou seja, Podemos ter escopos diferentes não só com funções */

// Declaração de variavel
let x = 10;

//estrutura de condição / no qual mostra que o bloco do if não interfere no resultado global
// se x for maior que 5 true executa
if(x > 5) {
  // inicia x = 20 
  let x = 20;
  //acresenta mais um 
  x++;
  // imprimir x = 21 
  console.log(x); // escopo if

}

// imprimi o valor da variavel global que está fora do bloco de if 
console.log(x); // escopo global
// 10