function hello() {
    const h2 = document.querySelector('h2')
    h2.style.display = 'block'
        setTimeout(() => {
        document.querySelector('h2').style.display = 'none'
    }, 5000)
}