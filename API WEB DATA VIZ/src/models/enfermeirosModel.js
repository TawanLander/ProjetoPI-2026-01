const bd = require("../database/config")

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT id, nome, email  FROM enfermeiro WHERE email = '${email}' AND senha = '${senha}';
    `;
    return bd.executar(instrucaoSql);
}

function cadastrar(nome,numeroCracha, email, senha, fkHospital) {

    var instrucaoSql = `
        INSERT INTO enfermeiro (nome, numeroCracha, email, senha, fkHospital) VALUES ('${nome}', '${numeroCracha}', '${email}', '${senha}'.  '${fkHospital}');
    `;
    return bd.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};