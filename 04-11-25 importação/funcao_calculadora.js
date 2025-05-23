function calculadora(x, y, operador) {
    switch (operador){
        case '+': return x+y;
        case '-': return x-y;
        case '*': return x*y;
        case '/': return x/y;
    }
;
}
console.log(calculadora(1,2,'+'))

export {calculadora}