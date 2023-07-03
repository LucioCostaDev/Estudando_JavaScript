// Incremento a variavel: forma fácil
// Pode ser incrementado uma variavel de forma facil; x += 1
// ou ate mesmo (x++) porém só adiciona ou reduz menos 1

// declaração dea varialvel numero recebendo = 5
let numero = 5;


// 1º estrutura de repetição enquanto
while(numero < 50) {

  console.log(numero);
  // incremento fácail com uma maior quntidade
  numero += 10;

  // 1º imprimi 5
  // 2º imprimi 15
  // 3º imprimi 25
  // 4º imprimi 35
  // 5º imprimi 45

}

// 2º estrutura de repetição for
// a varialvel i recebe 0; equanto i menor que 0 faça; incremento i++
for(let i = 0; i < 10; i++) {
  console.log("O i é " + i);
  //O i é 0
  //O i é 1
  //O i é 2
  //O i é 3
  //O i é 4
  //O i é 5
  //O i é 6
  //O i é 7
  //O i é 8
  //O i é 9
  //O i é 10
}

// 3º estruta de repetição for
// variavel i recebe 10; enquanto i for maior que 0 faça; descremento i--
for(let i = 10; i > 0; i--) {
  console.log("O i é " + i);
  //O i é 10
  //O i é 9
  //O i é 8
  //O i é 7
  //O i é 6
  //O i é 5
  //O i é 4
  //O i é 3
  //O i é 2
  //O i é 1
}