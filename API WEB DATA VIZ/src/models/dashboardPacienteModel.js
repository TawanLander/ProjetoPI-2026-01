const database = require("../database/config");

function obterTemp(idPaciente) {

    const instrucaoSql = `
        SELECT id, temperatura, horaRegistro
        FROM registroTemperatura
        WHERE id = ${idPaciente};
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    obterTemp
}