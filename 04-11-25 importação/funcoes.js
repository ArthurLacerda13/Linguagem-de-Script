function adição(x, y){
    return x+y
}
console.log(adição(1,2));

const additionForma2 = function(param1, param2) {
    return param1 +param2
}
console.log(additionForma2(5, 10))

const additionArrowFunction = (param1, param2) => {
    return param1 + param2
}

const additionArrowFunctionF2 = (p1, p2) => p1 + p2


function additionRest(...parametroAsArray){
    let resultado = 0 

    for(const elem of parametroAsArray){
        resultado += elem
    }
    return resultado
}
console.log( additionRest(1,2,3))



function calculadora(op1,op2, callback){
    return callback(op1,op2)

}

let resultado = calculadora(5,10,(x,y) => x+y)
resultado = calculadora(5,10,(x,y) => x-y)
resultado = calculadora(5,10,(x,y) => x*y)
resultado = calculadora(5,10,(x,y) => x/y)

