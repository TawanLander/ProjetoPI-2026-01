const model = require('../models/pacientesModel');

async function cadastrar(req, res) {
    let nome = req.body.nome;
    let genero = req.body.genero;
    let dtNascimento = req.body.dtNascimento;
    let pulseira = req.body.id;

    if(nome === undefined) return res.status(400).send('Nome undefined');
    if(genero === undefined) return res.status(400).send('Genero undefined');
    if(dtNascimento === undefined) return res.status(400).send('Data Nascimento undefined');
    if(pulseira === undefined) return res.status(400).send('Pulseira undefined');

    const resultado = await model.cadastrar(nome, dtNascimento, genero, pulseira);
    if(!resultado) return res.status(400).send(false)

    return res.status(200).send(true);
}

async function remover(req, res) {
    const idPulseira = req.body.id;
    if (idPulseira === undefined) return res.status(400).send('Id Pulseira Undefined');

    try {
        const resultado = await model.remover(idPulseira);
        if (!resultado) return res.status(400).send(false);
        return res.status(200).send(true);
    } catch(e) {
        return res.status(500).send(`Erro! ${e}`);
    }
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

async function trazerPulseiras(req, res) {
    const idEnfermeiro = req.body.id;
    const idHospital = req.body.idHospital;
    if(idEnfermeiro === undefined) return res.status(400).send('Id Undefined');
    if(idHospital === undefined) return res.status(400).send('Id Hospital Undefined');

    try {
        const resultado = await model.trazerPulseiras(idEnfermeiro, idHospital);
    
        if(!resultado) return res.status(400).send(false);
    
        return res.status(200).send(resultado);
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    cadastrar,
    remover,
    listar,
    obterTemp,
    atualizar,
    trazerPulseiras
}