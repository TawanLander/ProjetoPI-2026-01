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
  
  pegarQtdPulseiras(r[0]);
  pulseiras = r[1];
}

function pegarQtdPulseiras(maxId) {
  if (!maxId) return false;

  let msg = "";

  for (let i = 0; i < maxId; ++i) {
    msg += `<option>${i + 1}</option>`;
  }

  document.getElementById("slct-pulseiras").innerHTML = msg;
}

async function verificarPulseira() {
  const selecionada = Number(document.getElementById("slct-pulseiras").value) - 1;
  if (isNaN(selecionada)) return false;

  let pulseira = pulseiras[selecionada];


}