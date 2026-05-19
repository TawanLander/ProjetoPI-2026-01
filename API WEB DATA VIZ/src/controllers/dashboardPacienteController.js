const model = require("../models/dashboardPacienteModel");


async function obterTemp(req, res) {
    var idSensor = req.params.idSensor;
    try {
        const idSensor = reqq.params.idSensor;

        const resultado = await model.obterDados(idSensor);

        res.json(resultado)
    }
        catch(erro) { res.status(500).json(erro)};
}

module.exports = {
    obterTemp
};
