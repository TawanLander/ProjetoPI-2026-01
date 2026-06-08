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

function verificarCodigo(codigo) {

    if (codigo == process.env.CODIGO_SUPORTEN1) {
        return Promise.resolve([{
            valido:true,
            nivel:1,
            id: null
        }]); 
    } else if (codigo == process.env.CODIGO_SUPORTEN2) {
        return Promise.resolve([{
            valido:true,
            nivel:2,
            id: null
        }]); 
    } else if (codigo == process.env.CODIGO_SUPORTEN3) {
        return Promise.resolve([{
            valido:true,
            nivel:3,
            id: null
        }]); 
    } else {
        let instrucaoSql = `
            SELECT * FROM hospital
            WHERE codigoHospital = '${codigo}';
        `;
    
        return bd.executar(instrucaoSql);
    }

}

module.exports = {
    autenticar,
    cadastrar,
    verificarCodigo
};