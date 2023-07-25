/*  CLOUSERE
Uma função que lembra do ambiente em que ela foi criada

ele vai lembrar resultado, usado para simular metodos privados (conceito a metodos orientados a objetos )
*/


// cria a função que vai receber um argumento 
function lembrarSoma(x) {
  // retorna função
  return function(y) {
    return x + y;
  }
}

//declaração da variavel soma1 que recebe a função lembrarsoma() que esta com argumento 2 e com isso vai retorna somando por 5

let soma1 = lembrarSoma(2);

console.log(soma1(5)); // resultado 7

let soma2 = lembrarSoma(5); 

console.log(soma2(7)); // resultado 12

function contador(i) {
  let cont = i;
  let somarContador = function() {
    console.log(cont);
    cont++;
  }
  return somarContador;
}

let meuContador = contador(5);
meuContador(); //5
meuContador(); //6
meuContador(); //7
meuContador(); //8
meuContador(); //9

let meuContador2 = contador(1);
meuContador2(); //1
meuContador2(); //2
meuContador2(); //3