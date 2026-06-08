const bd = require('../database/config');

function cadastrar(nome, dtNascimento, genero, fkPulseira) {
    var instrucaoSql = `
        insert into paciente (nome, dataNascimento, sexo, statusPaciente fkPulseira) values 
            ('${nome}', '${dtNascimento}', '${genero}', 1, ${Number(fkPulseira) + 1});
    `;
    return bd.executar(instrucaoSql);
}

function remover(idPulseira) {
    let instrucaoSql = `
    UPDATE paciente
    SET fkPulseira = NULL, statusPaciente = 0
    WHERE fkPulseira = ${idPulseira + 1};
    `;
    // NOTA: Essa query ja esta atualizada para a nova modelagem, não precisa mexer denovo quando for reajustar as querys!!!
    return bd.executar(instrucaoSql);
}

function listar(id) {
    let instrucaoSql = `SELECT 
            paciente.id,
            paciente.nome,
            paciente.sexo,
            paciente.dataNascimento,
            paciente.fkPulseira

        FROM paciente
        JOIN pulseira
        ON pulseira.id = paciente.fkPulseira

        WHERE pulseira.fkHospital = ${Number(id)}
            AND paciente.statusPaciente = 1;
    `;

    return bd.executar(instrucaoSql);
}

function atualizar() {
    let instrucaoSql = `update pacientes set ? = ? where idPaciente = ?`

    return bd.executar(instrucaoSql);
}

function obterTemp(idPaciente) {
    const instrucaoSql = `
        SELECT 
            paciente.nome,
            paciente.sexo,
            registroTemperatura.id AS idRegistro,
            registroTemperatura.temperatura,
            registroTemperatura.horaRegistro,

            TIMESTAMPDIFF(YEAR, paciente.dataNascimento, CURDATE()) AS idade,
            (
                SELECT MAX(temperatura)
                FROM registroTemperatura
                JOIN pulseira
                    ON registroTemperatura.fkPulseira = pulseira.id
                WHERE pulseira.id = paciente.fkPulseira
            ) AS tempMax,

            (
                SELECT MIN(temperatura)
                FROM registroTemperatura
                JOIN pulseira
                    ON registroTemperatura.fkPulseira = pulseira.id
                WHERE pulseira.id = paciente.fkPulseira
            ) AS tempMin

        FROM paciente

        JOIN pulseira
            ON paciente.fkPulseira = pulseira.id

        JOIN registroTemperatura
            ON registroTemperatura.fkPulseira = pulseira.id

        WHERE paciente.id = ${idPaciente}

        ORDER BY registroTemperatura.id;
    `;

    return bd.executar(instrucaoSql);
}

async function trazerPulseiras(idUsuario, idHospital) {
    try {
        let queryMax = `
        SELECT 
                MAX(pulseira.id) AS maiorID
            FROM pulseira
                JOIN hospital
                    ON pulseira.fkHospital = hospital.id
                JOIN usuarios
                    ON usuarios.fkHospital = hospital.id
            WHERE usuarios.id = ${idUsuario}
                AND hospital.id = ${idHospital};`

        const rMax = await bd.executar(queryMax);
        if (!rMax) return false;

        let maxId = rMax.length > 0 && rMax[0].maiorID != null ? rMax[0].maiorID : 0

        let query = `
        SELECT 
                pulseira.id AS id,
                pulseira.fkHospital AS hospital,

                CASE
                    WHEN paciente.fkPulseira IS NULL THEN 'Livre'
                    ELSE 'Alocada'
                END AS situacao,

                paciente.id AS pacienteId,
                paciente.nome AS pacienteNome,
                paciente.dataNascimento AS pacienteDtNasc,
                paciente.statusPaciente AS statusPaciente

            FROM pulseira

                JOIN hospital
                    ON pulseira.fkHospital = hospital.id

                JOIN usuarios
                    ON usuarios.fkHospital = hospital.id

                LEFT JOIN paciente
                    ON pulseira.id = paciente.fkPulseira

            WHERE usuarios.id = ${idUsuario}
                AND hospital.id = ${idHospital};`

        const pulseiras = await bd.executar(query)
        if(!pulseiras) return 0;

        return [maxId, pulseiras];
    }
    catch (error) {
        console.log(error);
    }
}

function cadastrarAlerta(temperatura, situacao, fkRegistro) {

    const instrucaoSql = `
        INSERT INTO alertas(tempRegistrada, situacao, fkRegistro) VALUES
            (${temperatura}, '${situacao}', ${fkRegistro});
    `;

    return bd.executar(instrucaoSql);
}


module.exports = {
    cadastrar,
    remover,
    listar,
    obterTemp,
    atualizar,
    trazerPulseiras,
    cadastrarAlerta
}