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

async function trazerPulseiras(idEnfermeiro, idHospital) {
    try {
        let queryMax = `
        select max(pulseira.id) as maiorID
            from pulseira 
                join hospital 
                    on pulseira.fkHospital = hospital.id
                join enfermeiro 
                    on enfermeiro.fkHospital = hospital.id
            where enfermeiro.id = ${idEnfermeiro} and hospital.id = ${idHospital}`

        const rMax = await bd.executar(queryMax);
        if (!rMax) return false;

        let maxId = rMax.length > 0 ? rMax[0].maiorID : 0

        let query = `
        select * 
            from pulseira
                join hospital 
                    on pulseira.fkHospital = hospital.id
                join enfermeiro 
                    on enfermeiro.fkHospital = hospital.id
            where enfermeiro.id = ${idEnfermeiro} and hospital.id = ${idHospital}`

        const pulseiras = await bd.executar(query)
        if(!pulseiras) return 0;

        return [maxId, pulseiras];
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