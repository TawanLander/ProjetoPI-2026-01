
function sair() {
    sessionStorage.clear();

    window.location.href = "../../Site-Institucional/index.html";
}

window.onload = async () => {
  let enfermeiro = sessionStorage.getItem("enfermeiro");

    console.log(enfermeiro);

    if (!enfermeiro) {
        window.location.href = "../../Site-Cadastro/login.html";
        return;
    }

  await listarPacientes();

  setInterval(async () => {
    await listarPacientes();
  }, 30000);
};

const c_cards = document.getElementById("c_cards");

async function listarPacientes() {
  let totalPacientes = 0;
  let tempAlta = 0;
  let tempBaixa = 0;
  let tempNormal = 0;

  try {
    const idHospital = JSON.parse(
      sessionStorage.getItem("enfermeiro"),
    ).idHospital;
    const resposta = await fetch("/pacientes/listar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idHospital,
      }),
    });
    if (!resposta.ok) return false;

    const pacientes = await resposta.json();

    c_cards.innerHTML = "";

    if (!pacientes || pacientes.length == 0) {
      c_cards.innerHTML = "<h1>Você não tem pacientes cadastrados</h1>";
      return;
    }

    for (let i = 0; i < pacientes.length; i++) {
      totalPacientes++;
      const paciente = pacientes[i];

      const resposta = await fetch(`/pacientes/obterTemp/${paciente.id}`);

      const dadosTemp = await resposta.json();
      console.log(dadosTemp);

      let tempAtual = "--";
      let tempMax = "--";
      let tempMin = "--";

      const ultimoRegistro = dadosTemp[dadosTemp.length - 1];

      if (dadosTemp.length > 0) {
        tempAtual = ultimoRegistro.temperatura;
        tempMax = dadosTemp[0].tempMax;
        tempMin = dadosTemp[0].tempMin;
      }

      if (tempAtual < 35 || tempAtual > 36.7) {
        let situacao = "";

        if (tempAtual < 35) {
          situacao = "Baixa";
        } else {
          situacao = "Alta";
        }

        await fetch("/pacientes/cadastrarAlerta", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            temperatura: tempAtual,
            situacao: situacao,
            fkRegistro: ultimoRegistro.idRegistro,
          }),
        });
      }

      let classe = "";

      if (tempAtual < 35) {
        tempBaixa++;
        classe = "blue";
      } else if (tempAtual > 36.7) {
        tempAlta++;
        classe = "red";
      } else if (tempAtual <= 36.7 && tempAtual >= 35) {
        tempNormal++;
      }

      c_cards.innerHTML += `
                <div class="card ${classe}" onclick="abrirDashboard(${paciente.id})" style="cursor: pointer;">
                    
                    <h3 class="titulo">Pulseira ${paciente.fkPulseira}</h3>

                    <div class="info">
                        <p>${paciente.nome}</p>
                    </div>

                    <span class="informacao">Temperatura nas últimas 24 horas</span>

                    <div class="temperaturas">
                        
                        <div class="temp-box atual">
                            <span class="label">Temp Atual</span>
                            <span class="valor">${tempAtual === null ? 0 : tempAtual}°</span>
                        </div>

                        <div class="temp-box max">
                            <span class="label">Temp Max</span>
                            <span class="valor">${tempMax === null ? 0 : tempMax}°</span>
                        </div>

                        <div class="temp-box min">
                            <span class="label">Temp Min</span>
                            <span class="valor">${tempMin === null ? 0 : tempMin}°</span>
                        </div>

                    </div>
                </div>
            `;
    }

    document.querySelector("#Kpi1").innerHTML = totalPacientes;
    document.querySelector("#Kpi2").innerHTML = tempAlta;
    document.querySelector("#Kpi3").innerHTML = tempBaixa;
    document.querySelector("#Kpi4").innerHTML = tempNormal;
  } catch (e) {
    c_cards.innerHTML = "<h1>Você não tem pacientes cadastrados</h1>";
    console.log(e);
  }
}

function abrirDashboard(id) {
  sessionStorage.setItem('id-paciente', id);
  window.location.href = `../Site-DashBoard/dashboard.html`;
}
