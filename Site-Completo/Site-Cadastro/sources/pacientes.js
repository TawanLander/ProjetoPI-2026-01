const select = document.getElementById('select-pulseiras');
const info = document.getElementById('info');
const erro = document.getElementById('erro');

function verificarPulseira() {
    let sValor = select.value;

    if(sValor != 'Pulseira 3'){
        info.classList.remove('sumir')
        erro.classList.add('sumir');
    } else {
        info.classList.add('sumir')
        erro.classList.remove('sumir')
    }
}