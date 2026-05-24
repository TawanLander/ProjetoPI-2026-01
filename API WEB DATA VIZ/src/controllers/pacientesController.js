const model = require('../models/pacientesModel');

function cadastrar(req, res) {
    model.cadastrar().then(r => {

        if (r.ok) return res.json(r);

    }).catch(e => {
        return res.status(400).send(`Erro! ${e}`);
    });
}

function remover(req, res) {
    model.remover().then(r => {

        if (r.ok) return res.json(r);

    }).catch(e => {
        return res.status(400).send(`Erro! ${e}`);
    });
}

function listar(req, res) {
    model.listar().then(r => {

        if (r.ok) return res.json(r);

    }).catch(e => {
        return res.status(400).send(`Erro! ${e}`);
    });
}

function atualizar(req, res) {
    model.atualizar().then(r => {

        if (r.ok) return res.json(r);

    }).catch(e => {
        return res.status(400).send(`Erro! ${e}`);
    });
}

function obterTemp(req, res) {

    const idPaciente = req.params.idPaciente;

    model.obterTemp(idPaciente)
        .then(function(resultado) {

            res.json(resultado);

        }).catch(function(erro) {

            console.log(erro);
            res.status(500).json(erro);

        });

}

module.exports = {
    cadastrar,
    remover,
    listar,
    obterTemp,
    atualizar
}