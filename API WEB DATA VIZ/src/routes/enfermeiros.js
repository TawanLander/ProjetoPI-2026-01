const express = require("express");
const router = express.Router();

const controller = require("../controllers/enfermeirosController");

router.post("/cadastrar", (req, res) => {
    controller.cadastrar(req, res);
});

router.post("/verificarCodigo", (req, res) => {
    controller.verificarCodigo(req, res);
});

router.post("/autenticar", (req, res) => {
    controller.autenticar(req, res);
});

router.post("/remover", (req, res) => {
    controller.remover(req, res);
});

module.exports = router
