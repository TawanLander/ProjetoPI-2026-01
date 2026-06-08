USE PI2UTI;

-- seleciona o nome dos hospitais
SELECT 
    hospital.nome AS NomeHospital
FROM hospital;

-- select do endereco dos hospitais
SELECT
    hospital.nome AS NomeHospital,
    endereco.logradouro,
    endereco.numero,
    endereco.bairro,
    endereco.cep,
    endereco.complemento
FROM hospitalEndereco
JOIN hospital
    ON hospitalEndereco.fkHospital = hospital.id
JOIN endereco
    ON hospitalEndereco.fkEndereco = endereco.id;

-- usuarios cadastrados e suas afiliacoes
SELECT
    usuarios.nome AS NomeUsuario,
    nivelAcesso.tipo AS NivelAcesso,
    hospital.nome AS NomeHospital
FROM usuarios
JOIN hospital 
    ON usuarios.fkHospital = hospital.id
LEFT JOIN nivelAcesso 
    ON usuarios.fkNivelAcesso = nivelAcesso.idNivelAcesso;

-- select do paciente e do enfermeiro que cadastrou ele
SELECT 
    paciente.nome AS NomePaciente,
    usuarios.nome AS NomeEnfermeiro
FROM paciente
LEFT JOIN usuarios 
    ON paciente.fkEnfermeiro = usuarios.id;

-- select do paciente e a pulseira que ele está utilizadno
SELECT 
    paciente.nome AS NomePaciente,
    pulseira.id AS IdPulseira
FROM paciente
LEFT JOIN pulseira
    ON paciente.fkPulseira = pulseira.id;

-- temperaturas dos pacientes
SELECT 
    paciente.nome AS NomePaciente,
    registroTemperatura.temperatura,
    registroTemperatura.dataRegistro,
    registroTemperatura.horaRegistro
FROM registroTemperatura 
JOIN pulseira 
    ON registroTemperatura.fkPulseira = pulseira.id
JOIN paciente 
    ON paciente.fkPulseira = pulseira.id;

-- alertas dos pacientes
SELECT 
    paciente.nome AS NomePaciente,
    alertas.tempRegistrada,
    alertas.situacao
FROM alertas
JOIN registroTemperatura 
    ON alertas.fkRegistro = registroTemperatura.id
JOIN pulseira 
    ON registroTemperatura.fkPulseira = pulseira.id
JOIN paciente 
    ON paciente.fkPulseira = pulseira.id;

-- pacientes que tiveram a temperatura acima de 37
SELECT 
    paciente.nome,
    registroTemperatura.temperatura
FROM registroTemperatura
JOIN pulseira 
    ON registroTemperatura.fkPulseira = pulseira.id
JOIN paciente 
    ON paciente.fkPulseira = pulseira.id
WHERE registroTemperatura.temperatura > 37;

-- pacientes que tiveram a temperatura abaixo de 35
SELECT 
    paciente.nome,
    registroTemperatura.temperatura
FROM registroTemperatura
JOIN pulseira 
    ON registroTemperatura.fkPulseira = pulseira.id
JOIN paciente 
    ON paciente.fkPulseira = pulseira.id
WHERE registroTemperatura.temperatura < 35;

-- select das mensagens de contato
SELECT
    contato.nome,
    contato.email,
    contato.mensagem
FROM contato;

-- select das respostas da ia
SELECT
    ia.dthr,
    ia.resposta
FROM ia;