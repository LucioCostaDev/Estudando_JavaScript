/* Argumentos com valor default
Podemos pre-determina um valor para um argumento ou seja caso seja colocado argumento no lugar do padrao vai ser calculado
*/

// função criada para calcular potencia (ao quadrado)
function potencia(base, exp=2) {
  return Math.pow(base, exp);
}


console.log(potencia(2)); // (base 2 * exp=2 que vai ter resulta do 4)

console.log(potencia(2,2)); // base 2 * 2 que vai ter resultado 4

console.log(potencia(2,3)); // base 2 * 3 ou seja o exp=2 declarado como default, foi alterado por 3