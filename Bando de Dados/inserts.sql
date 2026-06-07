USE PI2UTI;

INSERT INTO endereco (logradouro, numero, bairro, cep, complemento) VALUES 
('Rua Muito Foda', '67', 'Centro', '01010-000', 'Próx. ao Carrefour');

INSERT INTO hospital (nome, email, senha, telefone, cnpj, codigoHospital) VALUES 
('TechVita', 'tcontato@techvita.com', '123456', '(11)99999-9999', '42781563000197', 1001);

INSERT INTO nivelAcesso (tipo) VALUES 
('N1'), ('N2'), ('N3');


INSERT INTO usuarios (nome, email, senha, fkHospital, fkNivelAcesso) VALUES 
('Enfermeiro Teste', 'enfermeiro@techvita.com', '123456', 1, NULL),
('Suporte Teste', 'suporte@techvita.com', '123456', NULL, 3);

INSERT INTO pulseira (fkHospital) VALUES 
(1),
(1),
(1),
(1),
(1);

INSERT INTO paciente (nome, dataNascimento, sexo, statusPaciente, fkEnfermeiro, fkPulseira) VALUES 
('Vini Fiote', '2010-10-10', 'Masculino', 1, 1, 1),
('Gustavo Souza', '2007-03-23', 'Masculino', 1, 1, 2);

INSERT INTO registroTemperatura (temperatura, dataRegistro, horaRegistro, fkPulseira) VALUES 
(34.2, '2026-05-20', '16:30:00', 1),
(36.7, '2026-05-20', '14:30:00', 1),
(36.9, '2026-05-20', '15:00:00', 1),
(37.2, '2026-05-20', '15:30:00', 1),
(38.9, '2026-05-20', '16:00:00', 1),
(36.6, '2026-05-20', '16:30:00', 1),
(34.2, '2026-05-20', '16:30:00', 2),
(36.7, '2026-05-20', '14:30:00', 2),
(36.9, '2026-05-20', '15:00:00', 2),
(37.2, '2026-05-20', '15:30:00', 2),
(38.9, '2026-05-20', '16:00:00', 2),
(36.6, '2026-05-20', '16:30:00', 2);

INSERT INTO alertas (tempRegistrada, situacao, fkRegistro) VALUES 
(39.0, 'Alta', 1);

INSERT INTO ia (dthr, resposta) VALUES 
('2026-05-20 15:10:00', 'Verifique a conexão da pulseira e reinicie o dispositivo.');

INSERT INTO contato (nome, email, mensagem) VALUES 
('Visitante TechVita', 'visitante@email.com', 'Mim ajuda :(');