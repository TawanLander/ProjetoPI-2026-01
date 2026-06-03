let pulseiras;

async function pegarDados() {
  // retorna array [maxId, pulseiras];
  // if (!sessionStorage.getItem("enfermeiro")) return (window.location.href = "pacientes.html");
  let id = JSON.parse(sessionStorage.getItem("enfermeiro")).id;
  let idHospital = JSON.parse(sessionStorage.getItem("enfermeiro")).idHospital;

  const resultado = await fetch("/pacientes/trazerPulseiras", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, idHospital }),
  });

  let r = await resultado.json();

  console.log(r)
  pegarQtdPulseiras(r[0]);
  pulseiras = r[1];
}

function pegarQtdPulseiras(maxId) {
  let msg = "";

  for (let i = 0; i < maxId; ++i) {
    msg += `<option>${i + 1}</option>`;
  }

  document.getElementById("slct-pulseiras").innerHTML += msg;
}

async function verificarPulseira() {
  const selecionada = Number(document.getElementById("slct-pulseiras").value) - 1;
  if (isNaN(selecionada)) return false;

  sessionStorage.setItem('paciente-selecionado', selecionada);

  let pulseira = pulseiras[selecionada];

  if (pulseira.situacao === 'Alocada') {
    document.getElementById('erro').classList.remove('sumir');
    document.getElementById('info').classList.add('sumir');

    document.getElementById('span-nome').textContent = pulseira.pacienteNome;
    document.getElementById('span-genero').textContent = pulseira.pacienteGenero;
    let dtNasc = new Date(pulseira.pacienteDtNasc);
    document.getElementById('span-nascimento').textContent = dtNasc.toLocaleDateString('pt-BR');

    return;
  }
  document.getElementById('erro').classList.add('sumir');
  document.getElementById('info').classList.remove('sumir');


}

async function desvincularPaciente() {
    let id = sessionStorage.getItem('paciente-selecionado');
    if (id === null) return false;

    const resposta = await fetch('/pacientes/remover', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: Number(id) }),
    });

    const resultado = await resposta.text();

    if (resultado === 'true') {
        pulseiras[Number(id)].situacao = 'Livre';
        pulseiras[Number(id)].pacienteNome = null;

        document.getElementById('erro').classList.add('sumir');
        document.getElementById('info').classList.remove('sumir');

        document.getElementById('ipt-nome').value = '';
        document.getElementById('ipt-dtNascimento').value = '';

    } else {
        alert('Erro ao desvincular paciente!');
    }
}

async function cadastrarPaciente() {
  let id = sessionStorage.getItem('paciente-selecionado');
  let nome = document.getElementById('ipt-nome').value;
  let genero = document.getElementById('slct-genero').value;
  let dtNascimento = document.getElementById('ipt-dtNascimento').value;
  if(nome === '' || dtNascimento === '') return false;

  const cadastro = await fetch('/pacientes/cadastrar', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({nome, genero, dtNascimento, id}),
  });

  const resultado = await cadastro.text();

  if (resultado === 'true') {
        const numeroPulseira = Number(id) + 1;

        document.getElementById('msg-sucesso').innerHTML = 
            `Paciente ${nome} cadastrado com sucesso! <br> Pulseira ${numeroPulseira} agora está em uso`;
        document.getElementById('info').classList.add('sumir');
        document.getElementById('sucesso').classList.remove('sumir');

    } else {
        alert('Erro ao cadastrar paciente!');
    }

  console.log(resultado)
}