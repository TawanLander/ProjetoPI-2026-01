let identificador = 'EI$B928*%$'

const idInst = document.getElementById('ipt_idInst');
const nome = document.getElementById('ipt_nome');
const email = document.getElementById('ipt_emai');
const erroIdInst = document.getElementById('erro-idInst');

function guardarValores() {
    window.location.href = './cadastro-pt2.html'
}

function verificarCodigo() {
    if (idInst.value.length === 0) {
        addC(erroIdInst, 'sumir');
    } else if (idInst.value != identificador) {
        rmC(erroIdInst, 'sumir')
    } else {
        addC(erroIdInst, 'sumir')
    }
}
function verificarEmail() {

}
function verificarNome() {

}

function addC (e, ...c){
    e.classList.add(...c)
}
function rmC (e, ...c){
    e.classList.remove(...c)
}

/*
let senha = input_senha.value;
    let repetirSenha = input_repetirSenha.value;

    if (senha.length > 8 && senha.includes('@') && repetirSenha == senha) {
        alert(`Usuário logado com sucesso`)
        div_mensagem.innerHTML = `Cadastro realizado com sucesso!`
    }
    else if (senha.length < 8 || !senha.includes(`@`)) {
        alert(`Sua senha deve conter pelo menos 8 caracteres e @`)
    }
    else if (senha != repetirSenha) {
        alert(`As senhas não coincidem`)
    }
*/ 