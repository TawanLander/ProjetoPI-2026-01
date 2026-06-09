const bd = require("../database/config");

async function cadastrar(titulo, desc){
    const query = `insert into chamados values (${titulo}, ${desc})`;

    const resultado = await bd.executar(query)
    if(!resultado) return false;

    return resultado;
}

async function salvarResposta(resposta) {
    const query = `insert into ia (resposta) values ('${resposta}')`

    const resultado = await bd.executar(query)
    if(!resultado) return false;

    return resultado;
}

async function pegarRespostas() {
    const query = `select * from ia`

    const resultado = await bd.executar(query)
    if(!resultado) return false;

    return resultado;
}

async function contatos() {
    const query = 'select * from vw_ctt';
    const resultado = await bd.executar(query)
    if(!resultado) return false;

    return resultado;
}

module.exports = {
    cadastrar,
    salvarResposta,
    pegarRespostas,
    contatos
}