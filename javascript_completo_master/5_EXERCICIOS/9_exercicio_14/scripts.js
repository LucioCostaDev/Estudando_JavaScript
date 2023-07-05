//Escreva um loop for ou while que exiba qual número é par e qual número e impar
//O contador deve iniciar em 0 e ir ate 50

for(let i = 0; i <= 50; i++) {
  
  if(i % 2 == 0) {
    console.log(`O numéro ${i} é par`);
  } else {
    console.log(`O numéro ${i} é ímpar`);
  }

}

// estrutura de repetição for 
for(num = 0; num <= 50; num++){
  //se resto for 0 igual a 0 então par, caso contrario impa
  if(num % 2 == 0){
    console.log(num + " e par ")
    
  }else
    console.log(num + " e ímpa ")
    
}

/* Verifique se o número é primo
  Um número primo, é um número natural, maior que 1 e apenas
  divisível por si próprio e por 1 */