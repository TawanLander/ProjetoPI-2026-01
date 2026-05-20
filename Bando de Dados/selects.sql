SELECT 
    hospital.nome AS NomeHospital,
    endereco.logradouro,
    endereco.numero,
    endereco.bairro,
    endereco.cep
FROM hospital 
JOIN endereco ON hospital.fkEndereco = endereco.id;
    
SELECT
    enfermeiro.nome AS NomeEnfermeiro,
    enfermeiro.cracha,
    hospital.nome AS NomeHospital
FROM enfermeiro 
JOIN hospital ON enfermeiro.fkHospital = hospital.id;
    
SELECT 
    paciente.nome AS NomePaciente,
    enfermeiro.nome AS NomeEnfermeiro
FROM paciente
LEFT JOIN enfermeiro ON paciente.fkEnfermeiro = enfermeiro.id;
    
SELECT 
    paciente.nome AS NomePaciente,
    pulseira.id AS IdPulseira,
    pulseira.intervaloMedicao,
    pulseira.statusPul
FROM paciente LEFT JOIN pulseira
    ON paciente.fkPulseira = pulseira.id;

SELECT 
    paciente.nome AS NomePaciente,
    registroTemperatura.temperatura,
    registroTemperatura.dtRegistro,
    registroTemperatura.horaRegistro
FROM registroTemperatura 
JOIN pulseira ON registroTemperatura.fkPulseira = pulseira.id
JOIN paciente ON paciente.fkPulseira = pulseira.id;
    
SELECT 
    paciente.nome AS NomePaciente,
    alertas.tempMax,
    alertas.tempMin
FROM alertas 
JOIN pulseira ON alertas.fkPulseira = pulseira.id
JOIN paciente ON paciente.fkPulseira = pulseira.id;

SELECT 
    paciente.nome,
    registroTemperatura.temperatura
FROM registroTemperatura
JOIN pulseira ON registroTemperatura.fkPulseira = pulseira.id
JOIN paciente ON paciente.fkPulseira = pulseira.id
WHERE registroTemperatura.temperatura > 30;

SELECT
    contato.nome,
    contato.email,
    contato.mensagem
FROM contato;
