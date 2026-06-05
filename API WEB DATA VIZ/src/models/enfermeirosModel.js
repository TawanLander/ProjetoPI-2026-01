const bd = require("../database/config")

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT usuarios.id, usuarios.nome, usuarios.email, IFNULL(usuarios.fkNivelAcesso, 0) AS cargo, hospital.id AS idHospital
        FROM usuarios
        LEFT JOIN hospital
            ON usuarios.fkHospital = hospital.id
        WHERE usuarios.email = '${email}' 
        AND usuarios.senha = '${senha}';
    `;
    return bd.executar(instrucaoSql);
}

function cadastrar(nome,email,senha, fkHospital, fkNivelAcesso) {

    var instrucaoSql = `
        INSERT INTO usuarios (nome, email, senha, fkHospital, fkNivelAcesso) VALUES 
            ('${nome}', '${email}', '${senha}', ${fkHospital}, ${fkNivelAcesso});
    `;
    return bd.executar(instrucaoSql);
}

function verificarCodigo(codigoHospital) {

    let instrucaoSql = `
        SELECT *
        FROM hospital
        WHERE codigoHospital = '${codigoHospital}';
    `;

    return bd.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    verificarCodigo
};