// comparações
// && - and -> para ser true , os dois tem que ser true ou seja afirmações verdadeiras
// || - or -> para ser true, basta um lado ser true ou seja ambas parte sendo true, confirma a operação
// ! - not -> inverte os valores, ou seja caso afirmação seja true ela se torna false, ambos 

console.log(5 > 3 && 3 == 2) // false
console.log(3 > 5 && 2 == 3) // false
console.log(3 > 5 || 2 == 3) // false
console.log(5 > 3 || 3 == 2) // true
console.log(!5 > 3 || 3 == 2) // false
console.log(5 > 3 || !3 == 2) // true
console.log(3 == 3 && "Matheus" == "Matheus") // true
console.log("Felipe" == "João" || false) // false
console.log(!(!(true && true))); // true

// console.log(typeof (true && true))
// console.log(typeof (true && false))
// console.log(typeof (false || false))
// console.log(typeof (!true))


