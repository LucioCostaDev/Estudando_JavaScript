/* Função
Função são estruturas de codigos menores que são reaprovadas durante a execução/construção de um programa
Principal objetivo: poupar repetição de código
Podem ser consideradas subprograsmas */

// Uma função tem uma estrutura um pouco mais complexa
// Devemos declarar a função sempre com a palavra (function)
// Uma função deve ter um (nome)
// Pode conter argumentos/parâmetros, definidos entre()
// O corpo da função é definido entre {}
// Geralmente uma função retorna um valor
// É possivel declarar funções em variáveis

// criação de uma função: para imprimir Olá mundo (Básico)
function imprimirNoConsole() {
  console.log("Olá mundo!");
}

// aqui está chamando a função para executar
imprimirNoConsole();

// criação de função com objetivo de imprimir um numero que for colocado com orgumento ( Intermediario)
function imprimirUmNumero(num) {
  console.log("O número é: " + num);
}

// imprimindo os numeros que estão como argumento entre ()
imprimirUmNumero(2);
imprimirUmNumero(4);
imprimirUmNumero(6);
imprimirUmNumero(8);

// criação de uma função para imprimir numeros aleatorios
// declaração da variavel numeroAleatorio = function() que vai imprimir com uma outra função da biblioteca Math (Math.random) (Avançado)
const numeroAleatorio = function() {
  console.log(Math.random());
}
 // chamamda da função
numeroAleatorio();
numeroAleatorio();
