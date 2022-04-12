function clicar() {
    let num = document.getElementById('ntxt')       
    let tab = document.getElementById('seltab')
    let sub = document.querySelector('.subtitulo')
    if (num.value.length == 0) {
        window.alert('[ERRO] Digite um número')
    } else {
        let n = (num.value)
        sub.innerHTML = `Abaixo está a tabuada do ${n}`
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item) // adi
            c++
        }
    }
}