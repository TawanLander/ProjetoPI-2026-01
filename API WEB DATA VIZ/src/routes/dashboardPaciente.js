const express = require('express');
const router = express.Router();

const controller = require('../controllers/dashboardPacienteController');

router.get('dashboardPaciente/obterTemp', (req,res) => {
    controller.obterTemp(req,res);
});