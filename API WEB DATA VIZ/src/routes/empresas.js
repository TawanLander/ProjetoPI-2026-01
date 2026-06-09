const express = require('express');
const router = express.Router();

const controller = require('../controllers/empresasController');

router.get('/pacientes/listar', (req, res) => {
    controller.listar(req, res);
});

router.post('/pacientes/atualizar', (req, res) => {
    controller.atualizar(req, res);
});

router.post('/cadastrar', (req, res) => {
    controller.cadastrar(req, res);
});

module.exports = router