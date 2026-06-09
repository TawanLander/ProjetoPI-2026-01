window.onload = function () {

    const enfermeiro = sessionStorage.getItem("enfermeiro");

    if (!enfermeiro) {
        window.location.href = "../../Site-Cadastro/login.html";
        return;
    }
}

function verDetalhes(idChamado) {

    alert("Abrindo detalhes do chamado #" + idChamado);

}

function pesquisar() {

    var pesquisa = document.getElementById("ipt_pesquisa").value.toLowerCase();

    var cards = document.getElementsByClassName("card-chamado");

    for (var i = 0; i < cards.length; i++) {

        var textoCard = cards[i].innerText.toLowerCase();

        if (textoCard.includes(pesquisa)) {

            cards[i].style.display = "flex";

        } else {

            cards[i].style.display = "none";

        }

    }

}


function voltar() {

    window.location.href = "../Site-Pacientes/pacientes.html";

}

function abrirIA() {

    window.location.href = "./ia.html";

}

function abrirChamados() {

    window.location.href = "./chamados.html";

}

function abrirHistorico() {

    window.location.href = "./historico_respostas.html";

}