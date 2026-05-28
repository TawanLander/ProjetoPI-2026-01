const bd = require("../database/config")

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT id, nome, email  FROM enfermeiro WHERE email = '${email}' AND senha = '${senha}';
    `;
    return bd.executar(instrucaoSql);
}

function cadastrar(nome,email,senha, telefone, cnpj, codigoHospital) {

    var instrucaoSql = `
        INSERT INTO hospital (nome, email, senha, telefone, cnpj, codigoHospital) VALUES ('${nome}', '${email}', '${senha}', '${telefone}', '${cnpj}','${codigoHospital}'.);
    `;
    return bd.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};