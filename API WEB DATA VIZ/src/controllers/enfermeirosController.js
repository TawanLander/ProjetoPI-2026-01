const model = require("../models/enfermeirosModel");

function autenticar(req, res) {
    const email = req.body.email;
    const senha = req.body.senha;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

    model.autenticar(email, senha)
        .then(() => {
            res.json({
                id: resultadoAutenticar[0].id,
                email: resultadoAutenticar[0].email,
                nome: resultadoAutenticar[0].nome,
                senha: resultadoAutenticar[0].senha,
                cpf: resultadoAutenticar[0].cpf,
        })
            }).catch(erro => {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } 

        model.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


function remover(req, res){
    model.remover(idEnfermeiro).then(r => {
        return res.json();
    }).catch(e => {
        console.log(e);
        return res.status(500).send(`Erro! ${e}`);
    })
}

module.exports = {
    autenticar,
    cadastrar,
    remover
}