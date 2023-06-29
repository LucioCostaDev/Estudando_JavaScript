
// O que um programa, e um conjunto de declarações(statements)
// Statements são conjuntos de expressões (expressions)
// Expression é todo frgmento de código que produz um valor
// Salvamos valores em variáveis (isso é um statement) ex. let laranjas = 5 
// Após criamos expressões ex. console.log()

//declaração da variavel com let nova versão
let nome = "Matheus";
//imprimi a variavel na tela
console.log(nome);
//resulta e imprimir com template literal e interpolando a varial ${}
console.log(`O meu nome é ${nome}`);

// delcaração de variavel
let laranjas = 5;
// imprimir o resultado 
console.log(laranjas * laranjas);

//visto que após declarado o valor da variavel e sol alterar o valor
nome = "João";
// imprimir o valor da varivel declarada
console.log(nome);


// alterado o valor da laranja o que ocasiona de alterar os resultas após
laranja = 83284;
// imprimir o valor da variavel
console.log(laranja);

// valor alterado 
laranja = "Laranja";
// imprimir
console.log(laranja);

// várias declarações sendo declarada
let um = 1, dois = 2, tres = 3;
// imprimir resultado
console.log(um + dois + tres);