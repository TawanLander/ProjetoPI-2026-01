// window.onload = function () {

//     if (!sessionStorage.ID_USUARIO) {
//         window.location.href = "../../Site-Cadastro/login.html";
//         return;
//     }
// }

const c_cards = document.getElementById('c_cards');

window.onload = async () => {
    await listarPacientes();

    setInterval(async () => {
        await listarPacientes();
    }, 10000);
}


async function listarPacientes() {
    
    let totalPacientes = 0;
    let tempAlta = 0;
    let tempBaixa = 0;
    let tempNormal = 0;
    
    try {

        const resposta = await fetch('http://127.0.0.1:3333/pacientes/listar');
        const pacientes = await resposta.json();

        c_cards.innerHTML = '';

        if (!pacientes || pacientes.length == 0) {
            c_cards.innerHTML = '<h1>Você não tem pacientes cadastrados</h1>';
            return;
        }


        for (let i = 0; i < pacientes.length; i++) {

            totalPacientes++;
            const paciente = pacientes[i];

            const resposta = await fetch(`http://127.0.0.1:3333/pacientes/obterTemp/${paciente.id}`);

            const dadosTemp = await resposta.json();
            console.log(dadosTemp);

            let tempAtual = '--';
            let tempMax = '--';
            let tempMin = '--';

            if (dadosTemp.length > 0) {
                tempAtual = dadosTemp[dadosTemp.length-1].temperatura;
                tempMax = dadosTemp[0].tempMax;
                tempMin = dadosTemp[0].tempMin;
            }

            let classe = '';

            if (tempAtual < 35) {
                tempBaixa++;
                classe = 'blue';
            } else if (tempAtual > 36.7) {
                tempAlta++;
                classe = 'red';
            } else {
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
                            <span class="valor">${tempAtual}°</span>
                        </div>

                        <div class="temp-box max">
                            <span class="label">Temp Max</span>
                            <span class="valor">${tempMax}°</span>
                        </div>

                        <div class="temp-box min">
                            <span class="label">Temp Min</span>
                            <span class="valor">${tempMin}°</span>
                        </div>

                    </div>
                </div>
            `;
        }

        document.querySelector('#Kpi1').innerHTML = totalPacientes;
        document.querySelector('#Kpi2').innerHTML = tempAlta;
        document.querySelector('#Kpi3').innerHTML = tempBaixa;
        document.querySelector('#Kpi4').innerHTML = tempNormal;

    } catch (e) {
        c_cards.innerHTML = '<h1>Você não tem pacientes cadastrados</h1>';
        console.log(e);
    }
}

function abrirDashboard(id) {
    window.location.href = `../Site-DashBoard/dashboard.html?id=${id}`;
}




