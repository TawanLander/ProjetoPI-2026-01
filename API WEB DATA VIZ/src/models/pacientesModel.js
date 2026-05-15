const bd = require('../database/config');

function cadastrar(){
    let query = 'insert into pacientes () values ()'

    return bd.executar(query);
}

function remover(){
    let query = 'delete from pacientes where idPacientes = ?'

    return bd.executar(query);
}

function listar(){
    let query = 'select * from pacientes'

    return bd.executar(query);
}

function atualizar(){
    let query = 'update pacientes set ? = ? where idPaciente = ?'

    return bd.executar(query);
}

module.exports = {
    cadastrar,
    remover,
    listar,
    atualizar
}