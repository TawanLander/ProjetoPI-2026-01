const bd = require("../database/config")

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT id, nome, email, cpf, fk_empresa as empresaId FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    return bd.executar(instrucaoSql);
}

function cadastrar(nome, email, senha, fkEmpresa, cpf) {

    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, fk_empresa, cpf) VALUES ('${nome}', '${email}', '${senha}', '${fkEmpresa}', '${cpf}');
    `;
    return bd.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};