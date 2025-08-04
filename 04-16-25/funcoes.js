const area_do_circulo = (raio) => Math.PI*Math.pow(raio, 2)

function triangulo(x, y ,z) {

    if (x+y > z && y+z > x && z+x > y){
        if (x === y === z){
            return 'equilateral'
        }
        else if (x === y || x === z || y === z ){
            return 'isósceles'
        }
        else return 'escaleno'
    }
    else return 'none'
}

function fibonacci(n) {
    if (n === 0)
        return ''
    else if (n === 1)
        return '0'
    else if (n === 2)
        return '0, 1'
    else if (n >= 3){
        const numeros = [0, 1]
        let antigo = 0
        let novo = 1 
        for(let i = 0; i < n; i++) {
            novo = antigo + novo
            antigo = novo - antigo
            numeros.push(novo)
        }
        return numeros.join(', ')
}
}

export {area_do_circulo, triangulo, fibonacci}