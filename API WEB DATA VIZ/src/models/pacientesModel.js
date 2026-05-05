const bd = require('../database/config');

function cadastrar(){
    let query = ''

    return bd.executar(query);
}

function remover(){
    let query = ''

    return bd.executar(query);
}

function listar(){
    let query = ''

    return bd.executar(query);
}

function atualizar(){
    let query = ''

    return bd.executar(query);
}

module.exports = {
    cadastrar,
    remover,
    listar,
    atualizar
}