/*
 Aritiméticos + - / * 
 Add ou concatenação, Sub, Div e Mult
 Incremento: ++
 Decremento: --
*/

const num1 = '5'; //String
const num2 = 10; //Number
const num3 = 15;
const num4 = 20;
console.log(num1 + num2); //Unir 2 valores sem soma-los (Concatenação se for string)

console.log(num3 - num4); //Sub
console.log(num3 + num4); //Add
console.log(num3 / num4); //Divi
console.log(num3 * num4); //Mult
console.log(num3 ** num4); //Potenciação
console.log(num3 % num4); //Resto da divisão

console.log(num2 + num2 + num3 * num3 - num2);
console.log(num2 + num2 + num3 * (num3 - num2)); //Entre parenteses tem prioridade


//Nan=N -Not a number
const numb1 = 10;
const numb2 = '5';
console.log(num1 + num2);
console.log(typeof num2);

//ou para transformar uma string em um numeral (Só conta se não for strings literais)
const numb1 = 10;
const numb2 = parseInt('5'); //Isso se torna um number, mas não conta com número flutuante (Só pode ser inteiro)
console.log(num1 + num2);
console.log(typeof num2);

//para funcionar om números não inteiros:
const numb1 = 10;
const numb2 = parseFloat('5.2'); //Nesse caso funciona com números flutuantes
console.log(num1 + num2);
console.log(typeof num2);

//para ser mais simples, pode ser substituído com 'Number'
const numb1 = 10;
const numb2 = Number('5.2'); 
console.log(num1 + num2);
console.log(typeof num2); 
