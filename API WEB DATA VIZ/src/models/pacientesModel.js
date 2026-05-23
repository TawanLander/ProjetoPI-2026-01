const bd = require('../database/config');

function cadastrar(nome, dtNascimento, cpf, fkEnfermeiro, fkPulseira) {
    var instrucaoSql = `
        insert into paciente (nome, dtNascimento, cpf, fkEnfermeiro, fkPulseira) values = '(${nome}, ${dtNascimento}, ${cpf}, ${fkEnfermeiro}, ${fkPulseira}.; )';
    `;
    return bd.executar(query);
}

function remover(idPaciente) {
    var instrucaoSql = 'delete from paciente where id = ()';

    return bd.executar(query);
}

function listar() {
    let query = 'select * from paciente'

    return bd.executar(query);
}

function atualizar() {
    let query = 'update pacientes set ? = ? where idPaciente = ?'

    return bd.executar(query);
}

module.exports = {
    cadastrar,
    remover,
    listar,
    atualizar
}