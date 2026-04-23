let identificador = 'EI$B928*%$'

const idInst = document.getElementById('ipt_idInst');
const nome = document.getElementById('ipt_nome');
const email = document.getElementById('ipt_email');
const senha = document.getElementById('input_senha');
const senhaRepetir = document.getElementById('input_repetirSenha');
const erroEmail = document.getElementById('erro-email');

const erroIdInst = document.getElementById('erro-idInst');
const erroSenha = document.getElementById('erro-senha');
const erroSenhaRepetir = document.getElementById('erro-repetirSenha');

function guardarValores() {
    window.location.href = './cadastro-pt2.html'
}

function verificarCodigo() {
    if (idInst.value.length === 0) {
        addClass(erroIdInst, 'sumir');
    } else if (idInst.value != identificador) {
        removeClass(erroIdInst, 'sumir')
    } else {
        addClass(erroIdInst, 'sumir')
    }
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
        } else {
            if (emailValor.length >= 10) {
                removeClass(erroEmail, 'sumir')
            }
        }
    }
}

function verificarSenha(tipo) {
    let senhaValor = senha.value;
    if (tipo != 1) {
        if (senhaValor.length > 0) {
            if (senhaValor.length < 10) {
                addErro(erroSenha, `Senha menor que 10 dígitos!`)
            } else if (senhaValor.toLowerCase() === senhaValor || senhaValor.toUpperCase() === senhaValor) {
                addErro(erroSenha, `Senha precisa contar ao menos uma letra maiúscula ou minúscula!`);
            } else if (!/[!@#$%&*.]/.test(senhaValor)) {
                addErro(erroSenha, `Senha precisa conter algarismos especiais!`);
            } else if (senhaValor.includes(' ')) {
                addErro(erroSenha, `Senha não pode conter espaço!`);
            } else if (!/[123456789]/.test(senhaValor)) {
                addErro(erroSenha, 'Senha precisa conter algum número')
            } else {
                addClass(erroSenha, 'sumir')
            }
        }
    } else {
        let senhaRepetirValor = senhaRepetir.value;
        if (senhaRepetirValor.length > 0) {
            if (senhaRepetirValor != senhaValor && senhaRepetirValor.length >= senhaValor.length) {
                removeClass(erroSenhaRepetir, 'sumir');
            } else {
                addClass(erroSenhaRepetir, 'sumir')
            }
        }
    }
}

function verificarNome() {
    let nomeValor = nome.value;

    let separar = nomeValor.split(' ');

    let nomeFormatado = '';

    for (let i = 0; i < separar.length; ++i) {
        nomeFormatado += `${separar[i].slice(0, 1).toUpperCase() + separar[i].slice(1).toLowerCase()} `
    }
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