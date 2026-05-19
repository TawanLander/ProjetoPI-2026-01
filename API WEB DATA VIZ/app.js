// const ambiente_processo = 'producao';
const ambiente_processo = 'desenvolvimento';

const caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: caminho_env });
const PORTA_APP = process.env.APP_PORT;
const HOST_APP = process.env.APP_HOST;

const app = express();

const enfermeirosRouter = require("./src/routes/enfermeiros");
const empresasRouter = require("./src/routes/empresas");
const pacientesRouter = require("./src/routes/pacientes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../Site-Completo")));

app.use(cors());

app.use("/enfermeiros", enfermeirosRouter);
app.use("/empresas", empresasRouter);
app.use('/pacientes', pacientesRouter);

app.listen(PORTA_APP, () => {
    console.log(`
    ########  ########  ########  ##    ##        ##       ##  ##  ########  ########
       ##     ##        ##        ##    ##         ##     ##   ##     ##     ##    ##
       ##     ########  ##        ########  ####    ##   ##    ##     ##     ##    ##
       ##     ##        ##        ##    ##           ## ##     ##     ##     ########
       ##     ########  ########  ##    ##            ###      ##     ##     ##    ##
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto.\n\n`);
});
