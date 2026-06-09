const model = require("../models/empresasModel");

async function cadastrar(req, res) {
    const nome = req.body.nome;
    const email = req.body.email;
    const mensagem = req.body.mensagem;

    if(nome === undefined || email === undefined || mensagem === undefined) return res.status(400).send('Valor(es) undefined');

    const cadastro = model.cadastrar(nome, email, mensagem);

    if(!cadastro) return res.status(400).send(false);

    return res.status(200).json(cadastro);
}


module.exports = {
    cadastrar
};
