const serialport = require('serialport');
const express = require('express');
const mysql = require('mysql2');

const SERIAL_BAUD_RATE = 9600;
const SERVIDOR_PORTA = 3300;

const TOTAL_PULSEIRAS = 5;

let temperaturaBase = null;
let simuladorIniciado = false;

const poolBancoDados = mysql.createPool({
    host: '10.18.33.196',
    user: 'cliente',
    password: 'Urubu@2025',
    database: 'PI2UTI',
    port: 3307
}).promise();


async function iniciarArduino(valoresSensor) {
    const portas = await serialport.SerialPort.list();

    const portaArduino = portas.find(
        (p) => p.vendorId == 2341 && p.productId == 43
    );

    if (!portaArduino) {
        console.log("⚠ Arduino não encontrado (modo simulação)");
        return false;
    }

    const arduino = new serialport.SerialPort({
        path: portaArduino.path,
        baudRate: SERIAL_BAUD_RATE
    });

    console.log(`Arduino conectado em ${portaArduino.path}`);

    arduino.pipe(
        new serialport.ReadlineParser({ delimiter: '\r\n' })
    ).on('data', async (data) => {

        const sensorDigital = parseFloat(data);

        if (isNaN(sensorDigital)) return;

        valoresSensor.push(sensorDigital);
        temperaturaBase = sensorDigital;

        await poolBancoDados.execute(`
            INSERT INTO registroTemperatura
            (temperatura, dataRegistro, horaRegistro, fkPulseira)
            VALUES (?, CURDATE(), CURTIME(), 1)
        `, [sensorDigital]);

        iniciarSimulacao();
    });
    arduino.on('error', (err) => {
        console.error("Erro Arduino:", err);
    });
    return true;
}

function iniciarSimulacao() {

    if (simuladorIniciado) return;
    simuladorIniciado = true;
    
    console.log("Simulador de pulseiras iniciado");

    setInterval(async () => {
        const base = temperaturaBase ?? (36 + Math.random() * 2);
        for (let id = 2; id <= TOTAL_PULSEIRAS; id++) {
            const variacao = (Math.random() * 2) - 2;
            const temperatura = Number((base + variacao).toFixed(1));
            await poolBancoDados.execute(`
                INSERT INTO registroTemperatura
                (temperatura, dataRegistro, horaRegistro, fkPulseira)
                VALUES (?, CURDATE(), CURTIME(), ?)
            `, [temperatura, id]);
        }
    }, 2000);
}

function servidor(valoresSensor) {
    const app = express();

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });
    app.listen(SERVIDOR_PORTA, () => {
        console.log(`API rodando na porta ${SERVIDOR_PORTA}`);
    });
    app.get('/sensores/digital', (_, res) => {
        res.json(valoresSensor);
    });
}

(async () => {
    const valoresSensor = [];
    await iniciarArduino(valoresSensor);
    servidor(valoresSensor);
})();