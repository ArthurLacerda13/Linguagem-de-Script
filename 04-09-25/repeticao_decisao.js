const operando1 = 1
const operando2 = 2
const operador = '+'

/*
if (operador == '+') console.log(operando1 + operando2)
else if (operador == '-'){
    console.log(operando1 - operando2)
}
else if (operador == '*') console.log(operando1 * operando2)
else if (operador == '/') console.log(operando1 / operando2)
*/

switch(operador) {
    case '+': console.log( operando1 + operando2); break
    case '-': console.log(operando1 - operando2); break
    case '*': console.log(operando1 * operando2); break
    case '/': console.log(operando1 / operando2); break
    default: console.log ('operador não suportado');
}
// sem o uso do break nos cases, se passasse em um caso, passaria em todos os outros que viessem depois
//defalt é quando nenhum se encaixa dentro dos casos


//estrutura de repetição

for(let i = 0; i < 10; i++){
    console.log(i)
}

const str = 'teste'
let ContadorLetrasE = 0
for (let i = 0; i < str.length; i++){
    if(str.charAt(i) == 'e') ContadorLetrasE++;
}
console.log('contador de letras E: ' + ContadorLetrasE)