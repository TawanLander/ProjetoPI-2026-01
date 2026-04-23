const select = document.getElementById('select-pulseiras');
const info = document.getElementById('info');

function verificarPulseira() {
    let sValor = select.value;

    if(sValor != 'Pulseira 3'){
        info.classList.remove('sumir')
    } else {
        info.classList.add('sumir')
    }
}