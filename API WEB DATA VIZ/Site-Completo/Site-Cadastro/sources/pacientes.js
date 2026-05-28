const select = document.getElementById('slct-pulseiras');
const info = document.getElementById('info');
const erro = document.getElementById('erro');

async function trazerPulseiras() {
    const resultado = await fetch('/pacientes/trazerPulseiras');

    for (let i = 0; i < resultado.length; ++i) {
        select.innerHTML += `
        <option> ${resultado[i].id} </option>
        `
    };
}