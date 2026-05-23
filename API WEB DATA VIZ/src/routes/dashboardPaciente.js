const express = require('express');
const router = express.Router();

const controller = require('../controllers/dashboardPacienteController');

router.get('/obterTemp/:idPaciente', (req,res) => {
    controller.obterTemp(req,res);
});

module.exports = router;