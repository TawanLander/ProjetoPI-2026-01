const email = document.getElementById('ipt_email');
const senha = document.getElementById('ipt_senha');
const erroEmail = document.getElementById('erro-email');
const erroSenha = document.getElementById('erro-senha');


async function login() {
    const fetchLogin = await fetch("/enfermeiros/autenticar", {
        "method": "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email.value,
            senha: senha.value,
        })
    });

    // if (!fetchLogin.ok) {
    //     document.getElementById('mensagem').innerHTML = "Email ou senha incorretos!";
    //     return false;
    // }
    
    // Não precisa de else por causa do return acima;
    let dados = await fetchLogin.json();
    sessionStorage.setItem('enfermeiro', JSON.stringify(dados));
    
    setTimeout(() => {
        if(dados.cargo === 0){
            window.location.href = '../Site-Pacientes/pacientes.html'
        } else {
            window.location.href = '../Site-Suporte/chamados.html'
        }
    }, 1000);
}


function addClass (e, ...c){
    e.classList.add(...c)
}
function removeClass (e, ...c){
    e.classList.remove(...c)
}

function addErro(e, err){
    e.innerHTML = err;
    removeClass(e, 'sumir');
}

function verificarEmail() {
    let emailValor = email.value;

    let partes = emailValor.split('@');
    
    if (partes.length === 2) {
        let primeiro = partes[0];
        let segundo = partes[1];
        let ponto = partes[1].indexOf('.');
        if (!emailValor.includes(' ') && 
            primeiro.length >= 1 && primeiro.length <= 64 &&
            segundo.length >= 1 && segundo.length <= 64 &&
            ponto >= 1 && ponto != segundo.length - 1) {
            addClass(erroEmail, 'sumir');

            passouEmail = true;
            return;
        } else if (emailValor.length >= 10) {
                removeClass(erroEmail, 'sumir')
                passouEmail = false
            }
        
    }

    
}

function verificarSenha() {
    let senhaValor = senha.value;
    if (senhaValor.length > 0) {
        if (senhaValor.length < 10) {
            addErro(erroSenha, `Senha menor que 10 dígitos!`)
            passouSenha = false;
        } else if (senhaValor.toLowerCase() === senhaValor || senhaValor.toUpperCase() === senhaValor) {
            addErro(erroSenha, `Senha precisa contar ao menos uma letra maiúscula ou minúscula!`);
            passouSenha = false;
        } else if (!/[!@#$%&*.]/.test(senhaValor)) {
            addErro(erroSenha, `Senha precisa conter algarismos especiais!`);
            passouSenha = false;
        } else if (senhaValor.includes(' ')) {
            addErro(erroSenha, `Senha não pode conter espaço!`);
            passouSenha = false;
        } else if (!/[123456789]/.test(senhaValor)) {
            addErro(erroSenha, 'Senha precisa conter algum número')
            passouSenha = false;
        } else {
            addClass(erroSenha, 'sumir')
            passouSenha = true;
        }
    }
}