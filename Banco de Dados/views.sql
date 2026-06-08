USE PI2UTI;

-- view pacientes que estao em alerta
CREATE VIEW vwPacientesAlerta AS
SELECT paciente.id, paciente.nome, registroTemperatura.temperatura
FROM paciente
JOIN pulseira 
ON paciente.fkPulseira = pulseira.id
JOIN registroTemperatura 
ON registroTemperatura.fkPulseira = pulseira.id
WHERE paciente.statusPaciente = 1 AND (registroTemperatura.temperatura > 39 OR registroTemperatura.temperatura < 35);

SELECT * FROM vwPacientesAlerta;

-- view quantidade de pacientes em alerta
CREATE VIEW vwQtdPacientesAlerta AS
SELECT COUNT(DISTINCT paciente.id) AS qtdPacientesAlerta
FROM paciente
JOIN pulseira 
ON paciente.fkPulseira = pulseira.id
JOIN registroTemperatura 
ON registroTemperatura.fkPulseira = pulseira.id
WHERE paciente.statusPaciente = 1 AND (registroTemperatura.temperatura > 39 OR registroTemperatura.temperatura < 35);

SELECT * FROM vwQtdPacientesAlerta;

-- view pacientes estaveis
CREATE VIEW vwPacientesEstaveis AS
SELECT paciente.id, paciente.nome, registroTemperatura.temperatura
FROM paciente
JOIN pulseira 
ON paciente.fkPulseira = pulseira.id
JOIN registroTemperatura 
ON registroTemperatura.fkPulseira = pulseira.id
WHERE paciente.statusPaciente = 1 AND registroTemperatura.temperatura BETWEEN 35 AND 39;

SELECT * FROM vwPacientesEstaveis;

-- view quantidade de pacientes estaveis
CREATE VIEW vwQtdPacientesEstaveis AS
SELECT COUNT(DISTINCT paciente.id) AS qtdPacientesEstaveis
FROM paciente
JOIN pulseira 
ON paciente.fkPulseira = pulseira.id
JOIN registroTemperatura 
ON registroTemperatura.fkPulseira = pulseira.id
WHERE paciente.statusPaciente = 1 AND registroTemperatura.temperatura BETWEEN 35 AND 39;

SELECT * FROM vwQtdPacientesEstaveis;

-- view quantidade de pulseiras em uso
CREATE VIEW vwPulseirasEmUso AS
SELECT COUNT(*) AS qtdPulseirasEmUso
FROM pulseira
WHERE statusPul = 'Ativa';

SELECT * FROM vwPulseirasEmUso;

-- view quantidade total de pacientes internados
CREATE VIEW vwTotalPacientesInternados AS
SELECT COUNT(*) AS totalPacientesInternados
FROM paciente
WHERE statusPaciente = 1;

SELECT * FROM vwTotalPacientesInternados;

-- view historico de registros dos pacientes
CREATE VIEW vwRegistroPaciente AS
SELECT paciente.id, paciente.nome, paciente.cpf, registroTemperatura.temperatura, registroTemperatura.dataRegistro, registroTemperatura.horaRegistro
FROM paciente
JOIN pulseira 
ON paciente.fkPulseira = pulseira.id
JOIN registroTemperatura 
ON registroTemperatura.fkPulseira = pulseira.id;

SELECT * FROM vwRegistroPaciente WHERE id = 3;

-- view ultima temperatura registrada de cada paciente
CREATE VIEW vwUltimaTemperaturaPaciente AS
SELECT paciente.id, paciente.nome, MAX(registroTemperatura.temperatura) AS ultimaTemperatura, 
MAX(registroTemperatura.dataRegistro) AS ultimaDataRegistro, MAX(registroTemperatura.horaRegistro) AS ultimaHoraRegistro
FROM paciente
JOIN pulseira 
ON paciente.fkPulseira = pulseira.id
JOIN registroTemperatura 
ON registroTemperatura.fkPulseira = pulseira.id
GROUP BY paciente.id, paciente.nome;

SELECT * FROM vwUltimaTemperaturaPaciente;

-- view temperatura maxima e minima de cada paciente
CREATE VIEW vwMinMaxPaciente AS
SELECT paciente.id, paciente.nome, MAX(registroTemperatura.temperatura) AS temperaturaMaxima, MIN(registroTemperatura.temperatura) AS temperaturaMinima
FROM paciente
JOIN pulseira 
ON paciente.fkPulseira = pulseira.id
JOIN registroTemperatura 
ON registroTemperatura.fkPulseira = pulseira.id
GROUP BY paciente.id, paciente.nome;

SELECT * FROM vwMinMaxPaciente;

-- view quantidade de alertas por paciente
CREATE VIEW vwQtdAlertasPaciente AS
SELECT paciente.id, paciente.nome, COUNT(alertas.id) AS qtdAlertas
FROM paciente
JOIN pulseira 
ON paciente.fkPulseira = pulseira.id
JOIN registroTemperatura 
ON registroTemperatura.fkPulseira = pulseira.id
JOIN alertas 
ON alertas.fkRegistro = registroTemperatura.id
GROUP BY paciente.id, paciente.nome;

SELECT * FROM vwQtdAlertasPaciente;

-- view status atual do paciente baseado na temperatura
CREATE VIEW vwStatusPaciente AS
SELECT paciente.id, paciente.nome, registroTemperatura.temperatura,
CASE
	WHEN registroTemperatura.temperatura > 39 THEN 'ALERTA'
	WHEN registroTemperatura.temperatura < 35 THEN 'ALERTA'
	ELSE 'ESTAVEL'
END AS statusAtual
FROM paciente
JOIN pulseira 
ON paciente.fkPulseira = pulseira.id
JOIN registroTemperatura 
ON registroTemperatura.fkPulseira = pulseira.id
WHERE paciente.statusPaciente = 1;

SELECT * FROM vwStatusPaciente;

-- view maior temperatura registrada do paciene
CREATE VIEW vwPacienteMaiorTemperatura AS
SELECT paciente.nome, MAX(registroTemperatura.temperatura) AS maiorTemperatura
FROM paciente
JOIN pulseira 
ON paciente.fkPulseira = pulseira.id
JOIN registroTemperatura 
ON registroTemperatura.fkPulseira = pulseira.id
GROUP BY paciente.nome;

SELECT * FROM vwPacienteMaiorTemperatura;

-- view quantidade total de alertas registrados
CREATE VIEW vwTotalAlertas AS
SELECT COUNT(*) AS totalAlertas
FROM alertas;

SELECT * FROM vwTotalAlertas;

--


    
    