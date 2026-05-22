const bd = require("../database/config")

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT id, nome, email, cpf, fk_empresa as empresaId FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    return bd.executar(instrucaoSql);
}

function cadastrar(nome, email, senha) {

    var instrucaoSql = `
        INSERT INTO enfermeiro (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    return bd.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};