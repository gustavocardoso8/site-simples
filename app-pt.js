'use strict'

const interruptor = document.querySelector('.btn-pt')

interruptor.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme-pt')

    var className = document.body.className;
    if (className == 'light-theme-pt') {
        this.textContent = 'Escuro;'
    }
    else {
        this.textContent = 'Claro'
    }
    console.log('nome da classe atual: ' + className)
});