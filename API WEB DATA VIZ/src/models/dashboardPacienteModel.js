const bd = require("../database/config");

    function obterDados(idSensor) {
        var sql = `
            SELECT valor, dthr
            FROM medicao
            WHERE fkSensor = ${idSensor}
            ORDER BY dthr ASC
        `;
        // select feito com base na tabela de teste, ajustar para as tabelas oficiais mais tarde.
        return bd.executar(sql);
    }

module.exports = { 
  obterDados
};