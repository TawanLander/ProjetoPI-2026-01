const model = require("../models/dashboardPacienteModel");

async function obterTemp(req, res) {
    const idPaciente = req.params.idPaciente;

    try {
        const resultado = await model.obterDados(idPaciente);

        res.json(resultado);

    } catch (erro) {
        res.status(500).json(erro);
    }
}

module.exports = {
    obterTemp
};