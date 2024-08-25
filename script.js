function insert(x) {
    var num = document.querySelector('.resultado').innerHTML
    document.querySelector('.resultado').innerHTML = num + x
}

function clean() {
    document.querySelector('.resultado').innerHTML = ''
}

function back() {
    var resultado = document.querySelector('.resultado').innerHTML
document.querySelector('.resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function soma() {
    var resultado = document.querySelector('.resultado').innerHTML
    if (soma) {
        document.querySelector('.resultado').innerHTML = eval(resultado)
    }
}