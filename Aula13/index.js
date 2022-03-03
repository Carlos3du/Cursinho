//               01234567 --> índice
let umaString = "Um texto";
console.log(umaString[3]); // = t

console.log(umaString.charAt(8)) //valor vazio com essa função

console.log(umaString.concat(' em uma linha')) //concat = +
console.log(`${umaString} em um lindo dia`) //template strings
console.log(umaString.indexOf('texto')) //achar o indice da palavra
console.log(umaString.lastIndexOf('o'))

console.log(umaString.replace('Um', 'Outra')) //Substituição de palavras
console.log(umaString.replace(/Um/, 'Outra')) 
console.log(umaString.replace(/t/g, 'l')) //Substituir todos os elementos

console.log(umaString.length) //Contado a partir do 1

console.log(umaString.slice(2, 6));
