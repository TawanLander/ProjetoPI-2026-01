SELECT * FROM Hospital;

SELECT razaoSocial_Hospital, email_Hospital FROM Hospital;

SELECT * FROM Hospital WHERE qtdPulseira_Hospital > 40;

SELECT * FROM Enfermeiro;

SELECT nome_Enfermeiro, cargo_Enfermeiro FROM Enfermeiro;

SELECT * FROM Enfermeiro WHERE cargo_Enfermeiro = 'Enfermeiro-Chefe';

SELECT * FROM Paciente;

SELECT nome_Paciente, nomeEnfermeiro_Paciente FROM Paciente;

SELECT * FROM Paciente WHERE dataNascimento_Paciente < '1985-01-01';

SELECT * FROM Pulseira;

SELECT numero_Pulseira, intervaloMedicao_Pulseira FROM Pulseira;

SELECT * FROM Pulseira WHERE intervaloMedicao_Pulseira < 15;

SELECT * FROM RegistroTemperatura;

SELECT temperatura_RegistroTemperatura, data_RegistroTemperatura, hora_RegistroTemperatura 
FROM RegistroTemperatura 
WHERE nome_Paciente = 'João Pereira';

SELECT * FROM RegistroTemperatura WHERE temperatura_RegistroTemperatura > 37;

SELECT * FROM EntradaSaidaPaciente;

SELECT * FROM EntradaSaidaPaciente 
WHERE MONTH(dataSaida_EntradaSaidaPaciente) = 10;

SELECT dataEntrada_EntradaSaidaPaciente, horaSaida_EntradaSaidaPaciente 
FROM EntradaSaidaPaciente 
WHERE horaSaida_EntradaSaidaPaciente = '09:00:00';

SELECT * FROM Leito;

SELECT cama_Leito FROM Leito WHERE numeroQuarto_Leito = 101;

SELECT numeroQuarto_Leito AS totalCamas 
FROM Leito 
ORDER BY numeroQuarto_Leito DESC;

SELECT nome_Paciente, temperatura_RegistroTemperatura,
    CASE
        WHEN temperatura_RegistroTemperatura < 37 THEN 'Temperatura Normal'
        WHEN temperatura_RegistroTemperatura BETWEEN 37 AND 38 THEN 'Estado de Atenção'
        ELSE 'Febre Alta'
		END AS status_temperatura FROM RegistroTemperatura;
        
SELECT nome_Enfermeiro, cargo_Enfermeiro,
    CASE
        WHEN cargo_Enfermeiro = 'Enfermeiro-Chefe' THEN 'Responsável pela equipe'
        ELSE 'Enfermeiro da equipe'
		END AS funcao FROM Enfermeiro;
        
SELECT numero_Pulseira, intervaloMedicao_Pulseira,
    CASE
        WHEN intervaloMedicao_Pulseira <= 10 THEN 'Monitoramento Intensivo'
        WHEN intervaloMedicao_Pulseira <= 30 THEN 'Monitoramento Moderado'
        ELSE 'Monitoramento Básico'
		END AS tipo_monitoramento FROM Pulseira;
        
SELECT 
    CONCAT(razaoSocial_Hospital, ' - End: ', endereco_Hospital) AS informacoes FROM Hospital;

SELECT 
    CONCAT('Paciente ', nome_Paciente, ' está no quarto ', numeroQuarto_Paciente) AS info_paciente FROM Paciente;