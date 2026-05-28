const bd = require("../database/config");

async function cadastrar(titulo, desc){
    const query = `insert into chamados values (${titulo}, ${desc})`;

    const resultado = await bd.executar(query)
    if(!resultado) return false;

    return resultado;
}

module.exports = {
    cadastrar
}