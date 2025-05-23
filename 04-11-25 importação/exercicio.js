function ePrimo(numero) {
    let contador = 0
    for(let i=1; i <= numero; i++){
        if (Number.isInteger(numero/i))
            contador += 1
    }
    if (contador == 2)
        return true
    else
    return false
    // return true => se número primo
    // retunr false => se não primo
}

console.log(ePrimo(5))