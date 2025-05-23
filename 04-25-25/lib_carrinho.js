function RemoveIntensQtdZero(produtos) {
    let resultado = []
    for(const item of produtos) {
        if(item[2] !== 0) resultado.push(item)
    }
    return resultado
}

export {RemoveIntensQtdZero}