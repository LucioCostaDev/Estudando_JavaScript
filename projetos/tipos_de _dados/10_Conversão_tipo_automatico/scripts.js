// Conversão de tipo automaticos, no qual o sistema converte silenciosamente não mostrando erro

console.log(null)
console.log(undefined)
console.log("123" + 4) // 1234
console.log("30" - 20) // 10
console.log("ausd" * 3) // NaN


console.log(typeof ("123" + 4)) // string
console.log(typeof ("30" - 20)) // number
console.log(typeof ("ausd" * 3)) // number


