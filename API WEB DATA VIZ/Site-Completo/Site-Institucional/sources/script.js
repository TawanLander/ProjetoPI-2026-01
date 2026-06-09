const nome = document.getElementById('ipt-nome');
const email = document.getElementById('ipt-email');
const mensagem = document.getElementById('ipt-mensagem');

function verificarInput() {
    let nvalor = nome.value;
    let evalor = email.value;
    let mvalor = mensagem.value;
    if (nvalor.length < 3 || evalor.length < 3 || mvalor.length < 10) return false;

    cadastrarContato(nvalor, evalor, mvalor);
}

async function cadastrarContato(n, e, m) {
    const cadastro = await fetch('/empresas/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: n,
            email: e,
            mensagem: m
        })
    });

    if(!cadastro.ok) return false;

    alert('Mensagem enviada com sucesso!');
}