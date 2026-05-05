const bd = require('../database/config');

function inserir(){
    let query = '';

    return bd.executar(query);
}

module.exports = {
    inserir
}