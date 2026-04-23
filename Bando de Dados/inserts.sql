INSERT INTO Endereco (logradouro, numero, bairro, cep, complemento) VALUES
('Rua Conselheiro Lafaiete', '123', 'Centro', '12345-000', 'Casa 1'),
('Rua Arcadia', '456', 'Vila Nova', '67890-000', NULL);

INSERT INTO Hospital (nome, email, senha, telefone, fkEndereco) VALUES
('Hospital MaisVita', 'maisvita@hospital.com', 'A1234@56b', '11999999999', 1),
('Hospital SaúdeMelhor', 'saudemelhor@hospital.com', '1aBc#def', '11888888888', 2);

INSERT INTO Enfermeiro (nome, numeroCracha, email, senha, cargo, fkHospital) VALUES
('Ariel Lima', 101, 'ariel@hospital.com', 'Ri123@', 'Enfermeiro', 1),
('Tina Souza', 102, 'tina@hospital.com', 'Ti456@', 'Gerente', 2);

INSERT INTO Quarto (ala, qtdCamas, fkHospital) VALUES
('A', 5, 1),
('B', 8, 2);

INSERT INTO Paciente (nome, dataNascimento, tipoSanguineo, sexo, cpf, fkEnfermeiro) VALUES
('Ronaldo Gaúcho', '1960-05-10', 'O+', 'M', '12345678901', 1),
('Anitta Silva', '1995-08-20', 'A-', 'F', '10987654321', 2);

INSERT INTO Pulseira (intervaloMedicao, statusPul, fkPaciente) VALUES
(10, 'Ativa', 1),
(5, 'Ativa', 2);

INSERT INTO Cama (fkQuarto, fkHospital, fkPaciente) VALUES
(1, 1, 1),
(2, 2, 2);

INSERT INTO RegistroTemperatura (temperatura, dataRegistro, horaRegistro, fkPulseira) VALUES
(36.5, '2026-04-21', '10:00:00', 1),
(38.2, '2026-04-21', '10:05:00', 2);

INSERT INTO Alertas (tempMax, tempMin, fkRegistro, fkPulseira) VALUES
(40, 35, 1, 1),
(39, 36, 2, 2);

INSERT INTO Acompanhante (nome, telefone, fkPaciente) VALUES
('Raul Seixas', '11911111111', 1),
('Pablo Vittar', '11922222222', 2);

INSERT INTO Contato (nome, email, mensagem) VALUES
('Hospital SVD', 'SVD@hospital.com', 'Gostaria de adquirir sua plataforma. Preciso de mais informações para fechar contrato.'),
('Clínica Anilife', 'anilife@hospital.com', 'Preciso de suporte.');