window.onload = function () {

    const enfermeiro = sessionStorage.getItem("enfermeiro");

    if (!enfermeiro) {
        window.location.href = "../../Site-Cadastro/login.html";
        return;
    }
}

async function trazerContatos() {
  try {
    const ctt = await fetch("/ia/contatos");
    if (!ctt.ok) return false;

    const resposta = await ctt.json();

    plotar(resposta);
  } catch (e) {
    console.error(e);
  }
}

function plotar(contatos) {
  let msg = "";

  contatos.forEach((contato) => {
    msg += `
            <div class="card-chamado aberto">
                <div class="card-top">
                    <span class="status">ABERTO</span>
                    <span class="material-symbols-outlined icone">mark_email_unread</span>
                </div>
                <h2>${contato.Nome}</h2>
                <p>${contato.Mensagem}</p>
                <div class="infos">
                    <div class="info">
                        <span>ID:</span>
                        <p>#${String(contato.Id).padStart(3, "0")}</p>
                    </div>
                    <div class="info">
                        <span>Email:</span>
                        <p>${contato.Email}</p>
                    </div>
                </div>
            </div>
        `;
  });

  document.querySelector(".c_cards").innerHTML = msg;
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
