//Diferenças básicas entre var e let
//ECMAScript = padronização do js

var nome =  'Nome';
var nome = 'Carlos';
console.log(nome);  //Console sai Carlos, já que foi redeclarada

let nick = 'Apelido'
nick = 'Cadu' //Pra alterar sem ter que declarar é só não botar let no começo
console.log(nick)