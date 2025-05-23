import { RemoveIntensQtdZero } from "./lib_carrinho.js"

const produtos = [[1,10.00,2],[2,10.00,2],[3,10.00,2],[4,10,0]]
let total = 0
for(let i = 0; i < produtos.length; i++){
    total += produtos[i][1]*produtos[i][2]
    // console.log(produtos[i])
}
let resultado = 0
for (const item of produtos){
    resultado += item[1] *item[2]
}

// console.log(produtos)
// console.log(total)
// console.log(resultado)
// console.log(RemoveIntensQtdZero(produtos))

// console.log('Programação funcional')

resultado = 0

produtos.forEach( (item) => resultado += item[1] * item[2] )



console.log(produtos.map(
    (item) => `ID: ${item[0]}, Preço Unitário: ${item[1]}, Quantidade: ${item[2]}`
))
console.log(`Total da compra: ${total}`)