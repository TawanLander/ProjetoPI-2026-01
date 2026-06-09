const bd = require("../database/config");

async function cadastrar(nome, email, mensagem) {
    const query = `insert into contato (nome, email, mensagem) values ('${nome}', '${email}', '${mensagem}')`

    const resultado = await bd.executar(query);
    if(!resultado) return false;

    return resultado
}

module.exports = { 
  cadastrar
};
