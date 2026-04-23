-- mostra a localização de cada hospital
SELECT 
    Hospital.nome AS NomeHospital,
    Endereco.logradouro,
    Endereco.numero,
    Endereco.bairro,
    Endereco.cep
FROM Hospital
JOIN Endereco
    ON Hospital.fkEndereco = Endereco.idEndereco;
  
-- mostra quem trabalha em qual hospital
SELECT 
    Enfermeiro.nome AS NomeEnfermeiro,
    Enfermeiro.cargo,
    Hospital.nome AS NomeHospital
FROM Enfermeiro
JOIN Hospital
    ON Enfermeiro.fkHospital = Hospital.idHospital;
 
-- mostra o paciente e seu enfermeiro, e quem não tem enfermeiro também
SELECT 
    Paciente.nome AS NomePaciente,
    Enfermeiro.nome AS NomeEnfermeiro
FROM Paciente
LEFT JOIN Enfermeiro
ON Paciente.fkEnfermeiro = Enfermeiro.idEnfermeiro;

-- mostra a localização completa do paciente
SELECT 
    Paciente.nome AS NomePaciente,
    Cama.idCama,
    Quarto.idQuarto,
    Quarto.ala,
    Hospital.nome AS NomeHospital
FROM Paciente
LEFT JOIN Cama
    ON Cama.fkPaciente = Paciente.idPaciente
LEFT JOIN Quarto
    ON Cama.fkQuarto = Quarto.idQuarto
LEFT JOIN Hospital
    ON Quarto.fkHospital = Hospital.idHospital;
 
-- mostra o paciente e sua pulseira
SELECT 
    Paciente.nome AS NomePaciente,
    Pulseira.idPulseira,
    Pulseira.intervaloMedicao,
    Pulseira.statusPul
FROM Paciente
LEFT JOIN Pulseira
    ON Pulseira.fkPaciente = Paciente.idPaciente;
   
-- Mostra o paciente e os dados de sua temperatura
SELECT 
    Paciente.nome AS NomePaciente,
    RegistroTemperatura.temperatura,
    RegistroTemperatura.dataRegistro,
    RegistroTemperatura.horaRegistro
FROM RegistroTemperatura
JOIN Pulseira
    ON RegistroTemperatura.fkPulseira = Pulseira.idPulseira
JOIN Paciente
    ON Pulseira.fkPaciente = Paciente.idPaciente;
   
-- mostra os alertas de temperatura do paciente
SELECT 
    Paciente.nome AS NomePaciente,
    Alertas.tempMax,
    Alertas.tempMin
FROM Alertas
JOIN Pulseira
    ON Alertas.fkPulseira = Pulseira.idPulseira
JOIN Paciente
    ON Pulseira.fkPaciente = Paciente.idPaciente;
    
-- mostra paciente e seu acompanhante
SELECT 
    Paciente.nome AS NomePaciente,
    Acompanhante.nome AS NomeAcompanhante,
    Acompanhante.telefone
FROM Acompanhante
JOIN Paciente
    ON Acompanhante.fkPaciente = Paciente.idPaciente;
 
-- pacientes com temperatura muito alta (acima de 38)
SELECT 
    Paciente.nome,
    RegistroTemperatura.temperatura
FROM RegistroTemperatura
JOIN Pulseira
    ON RegistroTemperatura.fkPulseira = Pulseira.idPulseira
JOIN Paciente
    ON Pulseira.fkPaciente = Paciente.idPaciente
WHERE RegistroTemperatura.temperatura > 38;