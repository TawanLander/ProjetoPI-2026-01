USE PI2UTI;

INSERT INTO endereco (logradouro, numero, bairro, cep, complemento) VALUES 
('Rua Muito Foda', '67', 'Centro', '01010-000', 'Próx. ao Carrefour');

INSERT INTO hospital (nome, email, senha, telefone, cnpj, codigoHospital) VALUES 
('TechVita', 'tcontato@techvita.com', '123456', '(11)99999-9999', '42781563000197', 1001);

INSERT INTO nivelAcesso (tipo) VALUES 
('N1'), ('N2'), ('N3');


INSERT INTO usuarios (nome, email, senha, fkHospital, fkNivelAcesso) VALUES 
('Carlos Silva', 'carlos.silva@techvita.com', '123456', 1, 2),
('Ana Souza', 'ana.souza@techvita.com', '123456', 1, 1),
('Lucas Pereira', 'lucas.pereira@techvita.com', '123456', 1, 3);

INSERT INTO usuarios (nome, email, senha, fkHospital, fkNivelAcesso) VALUES 
('Robson Braga', 'robao.silva@techvita.com', '123456', 1, NULL);

INSERT INTO pulseira (intervaloMedicao, statusPul, fkHospital) VALUES 
(15, 'Inativa', 1);

INSERT INTO paciente (nome, dataNascimento, cpf, fkEnfermeiro, fkPulseira) VALUES 
('Mariana Souza', '1995-08-20', '12345678900', 1, 1);

INSERT INTO registroTemperatura (temperatura, dataRegistro, horaRegistro, fkPulseira) VALUES 
(36.7, '2026-05-20', '14:30:00', 1);

INSERT INTO registroTemperatura (temperatura, dataRegistro, horaRegistro, fkPulseira) VALUES 
(36.9, '2026-05-20', '15:00:00', 1),
(37.2, '2026-05-20', '15:30:00', 1),
(38.9, '2026-05-20', '16:00:00', 1),
(34.2, '2026-05-20', '14:30:00', 1);

INSERT INTO alertas (tempMax, tempMin, fkRegistro) VALUES 
(39.0, 35.0, 1);

INSERT INTO ia (dthr, resposta) VALUES 
('2026-05-20 15:10:00', 'Verifique a conexão da pulseira e reinicie o dispositivo.');

INSERT INTO contato (nome, email, mensagem) VALUES 
('Visitante TechVita', 'visitante@email.com', 'Mim ajuda :(');