function calcular() {

    let horas = Number(ipt_horas.value);
    let valorHora = Number(ipt_valorHora.value);
    let qtdEnfermeiros = Number(ipt_qtdEnfermeiros.value);
    let tempo = Number(ipt_tempo.value);
    let totalConta = horas * valorHora * qtdEnfermeiros * 30;
    let tempoEconomia = (tempo/60) * valorHora * qtdEnfermeiros;
    let totalComDesconto = totalConta - tempoEconomia;
    total.innerHTML = "R$ " + totalConta.toFixed(2);
    totalC.innerHTML = "R$ " + totalComDesconto.toFixed(2);
    div_diferenca.innerHTML = totalConta - totalComDesconto;

    
}