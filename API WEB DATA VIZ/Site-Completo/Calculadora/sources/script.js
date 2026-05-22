function calcular() {

    let horas = Number(ipt_horas.value);
    let valorHora = Number(ipt_valorHora.value);
    let qtdEnfermeiros = Number(ipt_qtdEnfermeiros.value);
    let tempo = Number(ipt_tempo.value); // minutos
    let intervalo = Number(ipt_intervalo.value); // minutos

    let totalConta = horas * valorHora * qtdEnfermeiros * 30;

    let tempoPerdidoDia = tempo + intervalo;

    let horasPerdidasMes = (tempoPerdidoDia * qtdEnfermeiros) / 60;

   let valorPerdido = horasPerdidasMes * valorHora;

    let totalComDesconto = totalConta - valorPerdido;

    total.innerHTML = "R$ " + totalConta.toFixed(2);
    totalC.innerHTML = "R$ " + totalComDesconto.toFixed(2);

    div_hLivre.innerText = `${horasPerdidasMes.toFixed(0)} horas livres no mês`;
    div_dEco.innerText = `R$ ${valorPerdido.toFixed(2)} de produtividade`;
}