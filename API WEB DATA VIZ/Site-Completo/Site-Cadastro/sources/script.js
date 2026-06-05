function addClass(e, ...c){
    if(e) e.classList.add(...c);
}

function removeClass(e, ...c){
    if(e) e.classList.remove(...c);
}

function addErro(e, err){
    if(!e) return;

    e.innerHTML = err;
    removeClass(e, 'sumir');
}

//    CADASTRO - ETAPA 1

const CODIGO_SUPORTEN1 = "SUPN1";
const CODIGO_SUPORTEN2 = "SUPN2";
const CODIGO_SUPORTEN3 = "SUPN3";


let passouCodigo = false;
let passouEmail = false;
let passouNome = false;

let idHospital = null;
let nivelAcesso = null;

async function verificarCodigo() {

    const idInst = document.getElementById('ipt_idInst').value;

    const erroIdInst = document.getElementById('erro-idInst');

    if (!idInst || !erroIdInst) return;

    // CAMPO VAZIO
    if (idInst.length === 0) {

        addClass(erroIdInst, 'sumir');

        passouCodigo = false;

        return;
    }

    if (idInst === CODIGO_SUPORTEN1) {

        addClass(erroIdInst, 'sumir');

        passouCodigo = true;

        nivelAcesso = 1;

        idHospital = null;

        return;
    }

    if (idInst === CODIGO_SUPORTEN2) {

        addClass(erroIdInst, 'sumir');

        passouCodigo = true;

        nivelAcesso = 2;

        idHospital = null;

        return;
    }

    // SUPORTE N3
    if (idInst === CODIGO_SUPORTEN3) {

        addClass(erroIdInst, 'sumir');

        passouCodigo = true;

        nivelAcesso = 3;

        idHospital = null;

        return;
    }

    const resultado = await fetch("/enfermeiros/verificarCodigo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            codigoHospital: idInst
        }),
    });

    let r = await resultado.json();
    console.log(r);

    if (r.length === 0) {
        removeClass(erroIdInst, 'sumir');
        passouCodigo = false;

    } else {

        addClass(erroIdInst, 'sumir');
        passouCodigo = true;
        idHospital = r[0].id;
        nivelAcesso = null;
    }
}

function verificarEmail(){

    const email = document.getElementById('ipt_email');
    const erroEmail = document.getElementById('erro-email');

    if(!email || !erroEmail) return;

    let emailValor = email.value;

    let partes = emailValor.split('@');

    if(partes.length === 2){

        let primeiro = partes[0];
        let segundo = partes[1];

        let ponto = segundo.indexOf('.');

        if(
            !emailValor.includes(' ') &&
            primeiro.length >= 1 &&
            segundo.length >= 1 &&
            ponto >= 1 &&
            ponto !== segundo.length - 1
        ){
            addClass(erroEmail,'sumir');
            passouEmail = true;
            return;
        }
    }

    if(emailValor.length >= 5){
        removeClass(erroEmail,'sumir');
    }

    passouEmail = false;
}

function verificarNome(){

    const nome = document.getElementById('ipt_nome');

    if(!nome) return;

    passouNome = nome.value.trim().length >= 3;
}

function guardarValores(){

    const codigo = document.getElementById('ipt_idInst')?.value;
    const nome = document.getElementById('ipt_nome')?.value;
    const email = document.getElementById('ipt_email')?.value;

    const mensagem = document.getElementById('mensagem');

    if(!passouNome || !passouCodigo || !passouEmail){

        if(mensagem){
            mensagem.innerHTML = 'Por favor preencha todos os campos!';
        }

        return false;
    }

    sessionStorage.setItem(
        'dadosUser',
        JSON.stringify({
            codigo,
            nome,
            email,
            idHospital,
            nivelAcesso
        })
    );

    window.location.href = './cadastro-pt2.html';
}

//    CADASTRO - ETAPA 2
let passouSenha = false;

function verificarSenha(tipo){

    const senha = document.getElementById('input_senha');
    const senhaRepetir = document.getElementById('input_repetirSenha');

    const erroSenha = document.getElementById('erro-senha');
    const erroSenhaRepetir = document.getElementById('erro-repetirSenha');

    if(!senha) return;

    let senhaValor = senha.value;

    if(tipo !== 1){

        if(senhaValor.length < 10){

            addErro(erroSenha,'Senha menor que 10 caracteres!');
            passouSenha = false;

        }else if(
            senhaValor.toLowerCase() === senhaValor ||
            senhaValor.toUpperCase() === senhaValor
        ){

            addErro(
                erroSenha,
                'Senha precisa conter maiúsculas e minúsculas!'
            );

            passouSenha = false;

        }else if(!/[!@#$%&*.]/.test(senhaValor)){

            addErro(
                erroSenha,
                'Senha precisa conter caractere especial!'
            );

            passouSenha = false;

        }else if(!/[0-9]/.test(senhaValor)){

            addErro(
                erroSenha,
                'Senha precisa conter número!'
            );

            passouSenha = false;

        }else{

            addClass(erroSenha,'sumir');
            passouSenha = true;
        }

    }else{

        if(
            senhaRepetir &&
            senhaRepetir.value.length > 0 &&
            senhaRepetir.value !== senhaValor
        ){

            removeClass(erroSenhaRepetir,'sumir');
            passouSenha = false;

        }else{

            addClass(erroSenhaRepetir,'sumir');
        }
    }
}

async function cadastrar(){

    // if(!passouSenha) return;

    const dados =
        JSON.parse(
            sessionStorage.getItem('dadosUser')
        );

    if(!dados) return;

    const senha = document.getElementById('input_senha').value;
    const repetirSenha = document.getElementById('input_repetirSenha').value;

    if(senha !== repetirSenha){
        return;
    }

    await fetch('/enfermeiros/cadastrar',{

        method:'POST',

        headers:{
            'Content-Type':'application/json'
        },

        body:JSON.stringify({

            nomeServer:dados.nome,
            emailServer:dados.email,
            senhaServer:senha,
            hospitalServer:dados.idHospital,
            nivelServer:dados.nivelAcesso

        })

    });

    sessionStorage.removeItem('dadosUser');

    window.location.href = './login.html';
}