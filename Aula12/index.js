//Exercícos variáveis

let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

A = 15
B = 5
C = 10
varC = 15
varA = 5
varB = 10
console.log(varA, varB, varC)

//ou

let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

const varANow = varA //Constante não muda
varA = varB
varB = varC
varC = varANow
console.log(varA, varB, varC) 

//ou da maneira moderna:

let varA = 'A'
let varB = 'B'
let varC = 'C'

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);