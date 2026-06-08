<<<<<<< HEAD
SELECT 
=======
USE PI2UTI;

-- seleciona o nome dos hospitais
SELECT 
    hospital.nome AS NomeHospital
FROM hospital;

-- select do endereco dos hospitais
SELECT
>>>>>>> 8a0c97033952863f55e7f2b4058aa06a44f5f757
    hospital.nome AS NomeHospital,
    endereco.logradouro,
    endereco.numero,
    endereco.bairro,
<<<<<<< HEAD
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

=======
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
>>>>>>> 8a0c97033952863f55e7f2b4058aa06a44f5f757
SELECT 
    paciente.nome,
    registroTemperatura.temperatura
FROM registroTemperatura
<<<<<<< HEAD
JOIN pulseira ON registroTemperatura.fkPulseira = pulseira.id
JOIN paciente ON paciente.fkPulseira = pulseira.id
WHERE registroTemperatura.temperatura > 30;

=======
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
>>>>>>> 8a0c97033952863f55e7f2b4058aa06a44f5f757
SELECT
    contato.nome,
    contato.email,
    contato.mensagem
FROM contato;
<<<<<<< HEAD
=======

-- select das respostas da ia
SELECT
    ia.dthr,
    ia.resposta
FROM ia;
>>>>>>> 8a0c97033952863f55e7f2b4058aa06a44f5f757
