const bd = require("../database/config")

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT enfermeiro.id, enfermeiro.nome, enfermeiro.email, hospital.id as idHospital
            FROM enfermeiro 
                JOIN hospital
                    ON enfermeiro.fkHospital = hospital.id
            WHERE enfermeiro.email = '${email}' AND enfermeiro.senha = '${senha}';
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