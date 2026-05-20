const bd = require("../database/config");

    function obterDados(idSensor) {
        var sql = `
            SELECT temperatura, horaRegistro
            FROM registroTemperatura
            WHERE fkPulseira = ${idSensor}
            ORDER BY horaRegistro ASC
        `;
        // select feito com base na tabela de teste, ajustar para as tabelas oficiais mais tarde.
        return bd.executar(sql);
    }

module.exports = { 
  obterDados
};
