const primeiroNumero = 5; //Fora de aspas = number
const segundoNumero = 10;
const terceiroNumero = '4'; //Dentro de aspas é string

const resultado = primeiroNumero * segundoNumero; //+ - * /
const resultadoDuplicado = resultado * 2;

let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5; //O resultado original foi perdido mas pode ser modificado

console.log(resultadoTriplicado);
console.log(typeof primeiroNumero); //pra saber a classificação (typeof oque quer saber)
console.log(typeof terceiroNumero) ;
console.log(primeiroNumero + terceiroNumero); //number + strig = 510 (5 e 10)

console.log(typeof (primeiroNumero + terceiroNumero)); //Ambos tinham que ser numbers 