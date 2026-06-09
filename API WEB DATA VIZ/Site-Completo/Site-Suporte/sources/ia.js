window.onload = function () {

    const enfermeiro = sessionStorage.getItem("enfermeiro");

    if (!enfermeiro) {
        window.location.href = "../../Site-Cadastro/login.html";
        return;
    }
}

const erro = document.getElementById("erro");
const resultado = document.getElementById("resultado");

function verificarPrompt() {
  const valor = document.getElementById("ipt-prompt").value;

  if (valor.length <= 10) {
    if (erro.classList.contains("sumir"))
      erro.classList.replace("sumir", "aparecer");
    erro.innerHTML =
      "Erro! Comando menor que 10 caracteres! Descreva mais seu problema.";
    return false;
  }

  if (erro.classList.contains("aparecer"))
    erro.classList.replace("aparecer", "sumir");

  enviarPrompt(valor);
}

async function enviarPrompt(prompt) {
  const req = await fetch("/ia/perguntar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pergunta: prompt,
    }),
  });
  if(req.status === 503){
    if (erro.classList.contains("sumir"))
      erro.classList.replace("sumir", "aparecer");
    erro.innerHTML = "Erro! Modelo sobrecarregado atualmente! Tente novamente mais tarde.";
    return false;
  } else if(req.status === 429){
    if (erro.classList.contains("sumir"))
      erro.classList.replace("sumir", "aparecer");
    erro.innerHTML = "Erro! Tokens Esgatados! Tente novamente mais tarde.";
    return false;
  }

  if (!req.ok) {
    if (erro.classList.contains("sumir"))
      erro.classList.replace("sumir", "aparecer");
    erro.innerHTML = "Erro! Problema na requisição! Tente novamente.";
    return false;
  }

  if (erro.classList.contains("aparecer"))
    erro.classList.replace("aparecer", "sumir");

  const res = await req.json();

  resultado.innerHTML = res.resultado;
  salvarResultado(res.resultado);

  return true;
}

async function salvarResultado(res) {
    const salvar = await fetch("/ia/salvar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      resposta: res
    }),
  });
  if(!salvar.ok){
    if (erro.classList.contains("sumir"))
      erro.classList.replace("sumir", "aparecer");
    erro.innerHTML = "Erro ao salvar resposta da IA!";
    return false;
  }

  if (erro.classList.contains("aparecer"))
    erro.classList.replace("aparecer", "sumir");

  resultado.innerHTML += `<br><br><br>Resposta salva com sucesso!`
}