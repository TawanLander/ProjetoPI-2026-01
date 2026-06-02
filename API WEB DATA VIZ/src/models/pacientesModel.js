const bd = require('../database/config');

function cadastrar(nome, dtNascimento, genero, fkPulseira) {
    var instrucaoSql = `
        insert into paciente (nome, dtNascimento, genero, fkPulseira) values ('${nome}', '${dtNascimento}', '${genero}', ${Number(fkPulseira) + 1});
    `;
    return bd.executar(instrucaoSql);
}

function remover(idPaciente) {
    var instrucaoSql = `delete from paciente where ${idPaciente} = id`;

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

        let maxId = rMax.length > 0 && rMax[0].maiorID != null ? rMax[0].maiorID : 0

        let query = `
        select 
            pulseira.id as id, 
            pulseira.intervaloMedicao as intervalo, 
            pulseira.statusPul as stts, 
            pulseira.fkHospital as hospital,  
        case 
            when paciente.fkPulseira is null then 'Livre'
            else 'Alocada'
        end as 'situacao',
        paciente.id AS pacienteId,  
        paciente.nome AS pacienteNome,      
        paciente.genero AS pacienteGenero,  
        paciente.dtNascimento AS pacienteDtNasc
            from pulseira
                join hospital 
                    on pulseira.fkHospital = hospital.id
                join enfermeiro 
                    on enfermeiro.fkHospital = hospital.id
                left join paciente
                    on pulseira.id = paciente.fkPulseira
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