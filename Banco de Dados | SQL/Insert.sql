INSERT INTO Hospital (razaoSocial_Hospital, endereco_Hospital, email_Hospital, senha_Hospital, qtdPulseira_Hospital) VALUES
('Hospital São Paulo', 'Av. Paulista, 1000', 'contato@hospitalsaopaulo.com.br', 'senha123', 50),
('Hospital das Clínicas', 'Rua Dr. Arnaldo, 1250', 'info@hcdasclinicas.com.br', 'senha456', 30),
('Hospital Universitário', 'Rua Universitária, 500', 'suporte@hu.com.br', 'senha789', 40),
('Hospital Regional', 'Av. Brasil, 200', 'contato@hospitalregional.com.br', 'senhaabc', 20),
('Hospital de Câncer', 'Rua das Flores, 750', 'info@hospitaldecancer.com.br', 'senhadef', 60);

INSERT INTO Enfermeiro (nome_Enfermeiro, numeroCracha_Enfermeiro, senha_Enfermeiro, cargo_Enfermeiro) VALUES
('Ana Souza', 101, 'senhaAna', 'Enfermeiro-Chefe'),
('Bruno Silva', 102, 'senhaBruno', 'Enfermeiro'),
('Carla Oliveira', 103, 'senhaCarla', 'Enfermeiro'),
('Daniel Costa', 104, 'senhaDaniel', 'Enfermeiro'),
('Fernanda Lima', 105, 'senhaFernanda', 'Enfermeiro-Chefe');

INSERT INTO Paciente (nome_Paciente, nomeEnfermeiro_Paciente, dataNascimento_Paciente, cpf_Paciente, numeroQuarto_Paciente, idPulseira_Paciente) VALUES
('João Pereira', 'Ana Souza', '1985-05-15', '12345678901', 101, 1),
('Maria Ferreira', 'Bruno Silva', '1990-10-20', '23456789012', 102, 2),
('Carlos Almeida', 'Carla Oliveira', '1978-02-25', '34567890123', 201, 3),
('Juliana Mendes', 'Daniel Costa', '1983-07-30', '45678901234', 202, 4),
('Fernanda Rocha', 'Fernanda Lima', '1995-01-05', '56789012345', 301, 5);

INSERT INTO Pulseira (intervaloMedicao_Pulseira) VALUES
(5),
(10),
(15),
(30),
(60);

INSERT INTO RegistroTemperatura (temperatura_RegistroTemperatura, data_RegistroTemperatura, hora_RegistroTemperatura, nome_Paciente, numero_Pulseira) VALUES
(36, '2023-10-01', '08:00:00', 'João Pereira', 1),
(37, '2023-10-01', '09:00:00', 'Maria Ferreira', 2),
(38, '2023-10-01', '10:00:00', 'Carlos Almeida', 3),
(36, '2023-10-01', '08:30:00', 'Juliana Mendes', 4),
(37, '2023-10-01', '09:30:00', 'Fernanda Rocha', 5);

INSERT INTO EntradaSaidaPaciente (dataEntrada_Paciente, horaEntrada_Paciente, dataSaida_Paciente, horaSaida_Paciente) VALUES
('2023-10-01', '08:00:00', '2023-10-05', '09:00:00'),
('2023-10-02', '09:00:00', '2023-10-06', '10:00:00'),
('2023-10-01', '10:00:00', '2023-10-08', '11:00:00'),
('2023-10-03', '08:30:00', '2023-10-07', '09:30:00'),
('2023-10-01', '07:00:00', '2023-10-05', '08:00:00');

INSERT INTO Leito (numeroQuarto_Leito, cama_Leito) VALUES
('101', 'Cama 1'),
('101', 'Cama 2'),
('102', 'Cama 1'),
('201', 'Cama 1'),
('202', 'Cama 1');