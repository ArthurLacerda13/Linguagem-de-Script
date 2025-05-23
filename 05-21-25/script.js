function tratarEvento() {
  alert('Eita mofi, aperte não')
}
window.tratarEvento = tratarEvento

function handleInput() {
    const P = document.querySelector('p');
    const Input = document.querySelector('input')
    P.innerHTML = Input.value.toUpperCase()
    Input.value = Input.value.toUpperCase()
}


document.querySelector('input').addEventListener('input', () => { handleInput() })

document.querySelector('input').addEventListener('input', () => { 
    const value = document.querySelector('input').value;
    console.log(value.split('A').length);
} )