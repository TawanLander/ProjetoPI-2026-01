const model = require("../models/dashboardPacienteModel");

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
    obterTemp
}