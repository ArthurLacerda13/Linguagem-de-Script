function sum(array) {
    let soma = 0
    for (let valor of array) {
        soma += valor
    }
    return soma
}

function sumOdds(array) {
    let soma = 0;
    for (let numero of array) { 
        if (numero % 2 !== 0) {
            soma += numero;
        }
    }
    return soma;
}

function product(array){
    let produto = 1
    for (let numero of array) {
        produto *= numero
    }
    return produto
}

let lista = [1,2,5]
console.log(sum(lista))
console.log(sumOdds(lista))
console.log(product(lista))