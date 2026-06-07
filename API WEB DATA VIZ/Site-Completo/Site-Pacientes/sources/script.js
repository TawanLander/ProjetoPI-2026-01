window.onload = async () => {
  if (!sessionStorage.getItem('enfermeiro')) {
    window.location.href = "../../Site-Cadastro/login.html";
    return;
  }

  await listarPacientes();
};


async function listarPacientes() {
    const c_cards = document.getElementById("c_cards");
    
  try {
    const idHospital = JSON.parse(sessionStorage.getItem('enfermeiro')).idHospital;

    const resposta = await fetch("/pacientes/listar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idHospital
      }),
    });
    if(!resposta.ok) return false;
    
    const pacientes = await resposta.json();

    c_cards.innerHTML = "";

    if (!pacientes || pacientes.length == 0) {
      c_cards.innerHTML = "<h1>Você não tem pacientes cadastrados</h1>";
      return;
    }

    for (let i = 0; i < pacientes.length; i++) {
      let classe = "";

      if (pacientes[i].temperatura < 35) {
        classe = "blue";
      } else if (pacientes[i].temperatura > 36.7) {
        classe = "red";
      }

      c_cards.innerHTML += `
                <div class="card ${classe}" onclick="abrirDashboard(${pacientes[i].id})" style="cursor: pointer;">
                    
                    <h3 class="titulo">Pulseira ${pacientes[i].id}</h3>

                    <div class="info">
                        <p>${pacientes[i].nome}</p>
                        <p>${pacientes[i].quarto}</p>
                    </div>

                    <span class="informacao">Temperatura nas últimas 24 horas</span>

                    <div class="temperaturas">
                        
                        <div class="temp-box atual">
                            <span class="label">Temp Atual</span>
                            <span class="valor">${pacientes[i].temperatura}°</span>
                        </div>

                        <div class="temp-box max">
                            <span class="label">Temp Max</span>
                            <span class="valor">${pacientes[i].tempMax}°</span>
                        </div>

                        <div class="temp-box min">
                            <span class="label">Temp Min</span>
                            <span class="valor">${pacientes[i].tempMin}°</span>
                        </div>

                    </div>
                </div>
            `;
    }
  } catch (e) {
    c_cards.innerHTML = "<h1>Você não tem pacientes cadastrados</h1>";
    console.log(e);
  }
}

function abrirDashboard(id) {
  window.location.href = `../Site-DashBoard/dashboard.html?id=${id}`;
}
