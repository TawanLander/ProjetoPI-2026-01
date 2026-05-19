function definirEstado() {

    let estadoDoPaciente = Math.round(Math.random() * 4 + 1); // 1 2 3 4 5

    if (estadoDoPaciente === 1) return 'abaixo'

    if (estadoDoPaciente === 5) return 'acima'
    return 'ideal'
}

function aleatorizarTemperatura() {
    let simulacao = Math.random();

    let estado;
    setInterval(() => {
        estado = definirEstado();
    }, 1000 * 60 * 20); // 20 minutos

    if (estado === 'abaixo') {
        simulacao = simulacao * 5 + 30;
        
    } else if (estado === 'acima') {
        simulacao = simulacao * 5 + 36.9

    } else {
        simulacao = simulacao * 1.9 + 35

    }

    return simulacao.toFixed(2);
}

let ultimoNúmero;
function aleatorizarValorDoSensor(valor) {
    let simulacao = Math.round(Math.random() * 3 + 1);
    let operacao = Math.random();

    let soma = valor + simulacao;
    let subtracao = valor - simulacao;

    if (operacao < 0.5) {
        if (ultimoNúmero + 2 < soma) {
            ultimoNúmero += 1;
            return ultimoNúmero + 1
        }

        ultimoNúmero = soma;
        return soma;
    }

    if (ultimoNúmero - 2 > subtracao) {
        ultimoNúmero -= 1;
        return ultimoNúmero - 1
    }

    ultimoNúmero = subtracao;
    return subtracao;
}