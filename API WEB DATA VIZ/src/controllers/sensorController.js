const model = require('../models/sensorModel');

function inserir(req, res) {
    let valor = req.body.valor;

    if (valor === undefined) {
        return res.status(400).send('Valor não está definido!');
    }

    model.inserir().then(r => {

        if (r.ok) return res.json(r);

    }).catch(e => {
        return res.status(400).send(`Erro! ${e}`);
    });
}

module.exports = {
    inserir
}