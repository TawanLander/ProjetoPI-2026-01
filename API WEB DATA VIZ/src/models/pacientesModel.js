const bd = require('../database/config');

function cadastrar(nome, dtNascimento, cpf, fkEnfermeiro, fkPulseira) {
    var instrucaoSql = `
        insert into paciente (nome, dtNascimento, cpf, fkEnfermeiro, fkPulseira) values = '(${nome}, ${dtNascimento}, ${cpf}, ${fkEnfermeiro}, ${fkPulseira}.; )';
    `;
    return bd.executar(instrucaoSql);
}

function remover(idPaciente) {
    var instrucaoSql = `delete from paciente where ${idPaciente} = ()`;

    return bd.executar(instrucaoSql);
}

function listar() {
    let instrucaoSql = `select * from paciente`

    return bd.executar(instrucaoSql);
}

function atualizar() {
    let instrucaoSql = `update pacientes set ? = ? where idPaciente = ?`

    return bd.executar(instrucaoSql);
}

function obterTemp(idPaciente) {

    const instrucaoSql = `
        SELECT id, temperatura, horaRegistro
        FROM registroTemperatura
        WHERE id = ${idPaciente};
    `;

    return bd.executar(instrucaoSql);
}

async function trazerPulseiras() {
    try {
        const query = `select id from pulseira where fkPaciente is null;`

        const resultado = await bd.executar(query);

        if (!resultado) return false;

        return resultado;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    cadastrar,
    remover,
    listar,
    obterTemp,
    atualizar,
    trazerPulseiras
}