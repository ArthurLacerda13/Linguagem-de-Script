//junção sem concatenação
/*
const nome = 'Arthur'
console.log('Olá, ' + nome)
console.log(`Olá, ${nome}`)
*/

//uso das aspas
function criarTagImg(srcImage) {
    return "<img src=\" + srcImage + \">"
}
console.log( criarTagImg('ifpb.png'))

//quebra de linha
console.log('linha1\nlinha2')

//uso dos caracteres especiais usando \u (unicode)
console.log('I \u2661 JavaScript')


console.log(`2 === 2? ${2 === 2}`)


console.log('teste'.length)


console.log('teste'.includes('e'))


console.log('Lorem ipsum\n'.repeat(5))


console.log('teste'.substring(-1,3))


console.log(
    'Linguagem de script'.split(' ').join('_')
)

console.log(
    'teste'.replace('e', 'E')
)

console.log(
    'teste'.replaceAll('e', 'E')
)