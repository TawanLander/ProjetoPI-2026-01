const express = require("express");
const app = express.Router();

const controller = require("../controllers/enfermeiroController");

app.post("/cadastrar", function (req, res) {
    controller.cadastrar(req, res);
});

app.post("/autenticar", function (req, res) {
    controller.autenticar(req, res);
});

module.exports = {
    app
};