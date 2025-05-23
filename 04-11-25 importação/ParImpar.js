function ePar(numero){
    if (numero % 2 === 0)
        return true
    else
        return false
}
function eImpar(numero){
    if (numero % 2 !== 0)
        return true
}
// console.log(ePar(7))
// console.log(eImpar(7))


export {eImpar, ePar}