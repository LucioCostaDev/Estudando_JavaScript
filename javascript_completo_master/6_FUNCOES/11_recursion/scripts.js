/* Recursion 
Uma funcionalidade que permite uma função se chmar novamente;
Isso pode ser um problema caso a função se chame muitas vezes;
*/

// criação de função
function recursao(n) {

  if(n < 2) {
  // 39 - 1 < 2
    console.log("Recursão parou");
  } else if(n % 2 != 0) {
  // 39 / 2 = resto 1 != 0 ou seja diferente de 0
    console.log("Número ímpar " + n); // numero impar 39
    recursao(n - 1) // 39 - 1 = 38
  } else {
    console.log("Número par " + n); // Numero par 38
    recursao(n - 2); // 38 - 2 = 36
  }

}

recursao(39);
recursao(10);
recursao(55);