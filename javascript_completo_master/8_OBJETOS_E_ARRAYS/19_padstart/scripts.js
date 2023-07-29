/* Métodos de sting: padStart 
Inserir caracteres antes da string ou pode padronizar sting adicionando 
*/

// declaraçao de varivel
let sku = "34";
//imprimi na tela criando um padrão de 6 numeros, com zeros e o exemplo 
console.log(sku.padStart(6, "0")); // 000034

// declarando sku2
let sku2 = "7348";
// imprimir um padrão de 6 numeros com zeros porem add o valor declaro em sku2
console.log(sku2.padStart(6, "0")); // 007348
