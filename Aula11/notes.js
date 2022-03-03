//Funções do console do site:
window.confirm('Confirmar a ação do usuário') //Valor boolean
window.prompt('Digitar alguma informação na caixa de texto')
window.alert('Mensagem de alerta')

//Sempre que eu chamo/executo uma função pode ou não retornar um valor
//No navegador não precisa digitar console.log(), pois ele mesmo já faz isso

/* 
Para transformar valores que são lidos como strings em números contáveis, e conseguindo fazer contas
num1 = parseFloat(num1)
100
num2 = parseFloat(num2)
50
num1 + num2 
150
*/

const num1 = prompt('Number 1')
const num2 = prompt('Outro número')
const num1 = parseFloat(num1)
const num2 = parseFloat(num2)

const resultado = num1 + num2
alert('O resultado foi ' + resultado) //Habilitando contas 