function clicar() {
    let num = document.getElementById('ntxt')       
    let tab = document.querySelector('.tabuada')
    let sub = document.querySelector('.subtitulo')
    if (num.value.length == 0) {
        window.alert('[ERRO] Digite um número')
    } else {
        let n = (num.value)
        sub.innerHTML = `<hr>Abaixo está a tabuada do ${n}<hr>`
        sub.style.padding = '5px'
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            tab.innerHTML += `${n} x ${c} = ${n*c} <br>`
            c++
        }
    }
}