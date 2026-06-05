const bd = require("../database/config")

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT usuarios.id, usuarios.nome, usuarios.email, ifnull(usuarios.fkNivelAcesso, 0) as 'cargo', hospital.id as idHospital
            FROM usuarios
                JOIN hospital
                    ON usuarios.fkHospital = hospital.id
            WHERE usuarios.email = '${email}' AND usuarios.senha = '${senha}';
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