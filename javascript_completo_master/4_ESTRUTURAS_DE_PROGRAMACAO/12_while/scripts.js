// Estrutura de repetição 
// a ideia e repetir uma ação ate atingir uma condição
// ao inves de repetirmos o mesmo codigo varias vezes, criamos um statement que fará uma checagem em cada loop´
// também chamado de Loop

// Estrutura de repetição: WHILE

// declaração da variavel x que recebe 10
let x = 10;
// enquanto x for maior que 0 faça
while(x > 0) { 
  // 10 > 0 se imprimi
  // 9  > 0 se imprimi
  // 8  > 0 se imprimi
  // 7  > 0 se imprimi
  // 6  > 0 se imprimi
  // 5  > 0 se imprimi
  // 4  > 0 se imprimi
  // 3  > 0 se imprimi
  // 2  > 0 se imprimi
  // 1  > 0 se imprimi

  console.log("O x é " + x);
  //0 x é 10
  //0 x é 9
  //0 x é 8
  //0 x é 7
  //0 x é 6
  //0 x é 5
  //0 x é 4
  //0 x é 3
  //0 x é 2
  //0 x é 1

  x = x - 1;
  //10 - 1 = 9
  //9 - 1 = 8
  //8 - 1 = 7
  //7 - 1 = 6
  //6 - 1 = 5
  //5- 1 = 4
  //4 - 1 = 3
  //3 - 1 = 2
  //1 - 1 = 0 para de executar
 
}

// declaração da variavel y recebendo 0
let y = 0;
// enquanto y for menor ou igual faça
while(y <= 10) {
  console.log(y);
  y = y + 1;
}

// LOOP INFINITO
// variavel z recebe 10
// let z = 10;
// enquanto z for maior que 0 faça
// while(z > 0) {
//   console.log(z);
// }