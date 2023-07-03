// Pulando uma execução condicional do Loop: CONTINUE
// Dependendo da Lógica, pode ser pulado o resto da execução do loop
// Para e utilizado a palavra CONTINUE
// mais uma palavra reservada 

//condição i recebe 10; enquanto i for maior que 0 faça; i vai receber e reduzir (i - 1);
for(let i = 10; i > 0; i = i - 1) {

  // 1º 10 true executa console.log("Caiu no continue")
  // 2º 9 false executa console.log(9);
  // 3º 8 true executa console.log("Caiu no continue")
  // 4º 7 false executa console.log(7);
  // 5º 6 true executa console.log("Caiu no continue")
  // 6º 5 false executa console.log(5);
  // 7º 4 true executa console.log("Caiu no continue")
  // 8º 3 false executa console.log(3);
  // 9º 2 true executa console.log("Caiu no continue")
  // 10º 1 false executa console.log(1);

  // condição enquanto o resto for igual a 0 executa o bloco caso não pula 
  if(i % 2 == 0) {
    console.log("Caiu no continue");
    continue;
  }

  console.log(i);

}