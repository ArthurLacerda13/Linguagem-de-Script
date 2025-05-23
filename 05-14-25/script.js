function GenerateList() {
    const input = document.querySelector('input[name=qtd_itens]');
    const ul = document.querySelector('.itens_gerados');
    const value = input.value;
    if(Number.isNaN(value)) {
        console.log('Input precisa ser um número')
        ul.innerHTML = '';
        const erro = '<p style="color: red">Valor inválido!</p>';
        ul.insertAdjacentHTML('beforebegin', erro);
        return;
    }
    let itens = ''
    for(let i = 0; i < value; i++) {
        itens += `<li>Item ${i+1}</li>`
    }
    ul.innerHTML = itens;
    input.value = ''
}
function inserirH1() {
    const h1 = document.createElement('h1')
    const textNode = document.createTextNode(text);
    h1.appendChild(textNode)
    // document.body.appendChild(h1)
    document.body.insertAdjacentElement('afterbegin', h1);
}   