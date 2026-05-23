const database = require("../database/config");

function obterTemp(idPaciente) {

    const instrucaoSql = `
        SELECT nome, temperatura
        FROM paciente
        WHERE idPaciente = ${idPaciente};
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    obterTemp
}