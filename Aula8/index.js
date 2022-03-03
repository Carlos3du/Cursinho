/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kilos, tem 1.8 de altura e 
seu IMC é de 25.925925925925924 e nasceu em 1922
*/

const nome = 'Luis Otávio';
const sobreNome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaMetros = 1.80; 

let indiceMassaCorporal; 
let anoNascimento;

anoNascimento = 2022 - idade; //ano atual-idade
indiceMassaCorporal = peso / (alturaMetros * alturaMetros);

console.log(anoNascimento);
console.log (indiceMassaCorporal);

//template strings ${} --> tudo que for variavel ou const fica entre esse símbolo pra ficar mais simples

console.log(`${nome} ${sobreNome} tem ${idade} anos pesa ${peso} quilos`) 
console.log(`tem ${alturaMetros} de altura e seu imc é de ${indiceMassaCorporal}`)
console.log(`nasceu em ${anoNascimento}.`)
