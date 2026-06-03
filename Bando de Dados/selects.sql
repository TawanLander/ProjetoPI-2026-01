SELECT 
    hospital.nome AS NomeHospital
FROM hospital;

SELECT
    usuarios.nome AS NomeUsuario,
    nivelAcesso.tipo AS NivelAcesso,
    hospital.nome AS NomeHospital
FROM usuarios
JOIN hospital ON usuarios.fkHospital = hospital.id
JOIN nivelAcesso ON usuarios.fkNivelAcesso = nivelAcesso.idNivelAcesso;

SELECT
    usuarios.nome AS NomeUsuario,
    nivelAcesso.tipo AS NivelAcesso,
    hospital.nome AS NomeHospital
FROM usuarios
JOIN hospital ON usuarios.fkHospital = hospital.id
LEFT JOIN nivelAcesso ON usuarios.fkNivelAcesso = nivelAcesso.idNivelAcesso;

SELECT 
    paciente.nome AS NomePaciente,
    usuarios.nome AS NomeEnfermeiro
FROM paciente
LEFT JOIN usuarios ON paciente.fkEnfermeiro = usuarios.id;

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
    registroTemperatura.dataRegistro,
    registroTemperatura.horaRegistro
FROM registroTemperatura 
JOIN pulseira ON registroTemperatura.fkPulseira = pulseira.id
JOIN paciente ON paciente.fkPulseira = pulseira.id;

SELECT 
    paciente.nome AS NomePaciente,
    alertas.tempMax,
    alertas.tempMin
FROM alertas
JOIN registroTemperatura 
    ON alertas.fkRegistro = registroTemperatura.id
JOIN pulseira 
    ON registroTemperatura.fkPulseira = pulseira.id
JOIN paciente 
    ON paciente.fkPulseira = pulseira.id;

SELECT 
    paciente.nome,
    registroTemperatura.temperatura
FROM registroTemperatura
JOIN pulseira ON registroTemperatura.fkPulseira = pulseira.id
JOIN paciente ON paciente.fkPulseira = pulseira.id
WHERE registroTemperatura.temperatura > 30;

SELECT
    chamados.titulo,
    chamados.descc,
    chamados.statuss,
    usuarios.nome AS UsuarioAbertura
FROM chamados
JOIN usuarios
    ON chamados.fkUsuarioAbertura = usuarios.id;

SELECT
    contato.nome,
    contato.email,
    contato.mensagem
FROM contato;