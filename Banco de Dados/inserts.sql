USE PI2UTI;
INSERT INTO endereco (logradouro,numero,bairro,cep,complemento) VALUES 
('Rua das Inovações','101','Centro','01010-000','Esse é o primeiro insert!');
INSERT INTO hospital (nome,email,senha,telefone,cnpj,fkEndereco) VALUES 
('TechVita','tcontato@techvita.com','123456','(11)99999-9999','42781563000197',1);
INSERT INTO enfermeiro (nome,cracha,email,senha,fkHospital) VALUES 
('Carlos Silva','TV-001','carlos.silva@techvita.com','123456',1);
INSERT INTO pulseira (intervaloMedicao,statusPul) VALUES 
(15,'Ativa');
INSERT INTO paciente (nome,dtNascimento,cpf,fkEnfermeiro,fkPulseira) VALUES 
('Mariana Souza','1995-08-20','123.456.789-00',1,1);
INSERT INTO registroTemperatura (temperatura,dtRegistro,horaRegistro,fkPulseira) VALUES 
(36.7, '2026-05-20', '14:30:00', 1);
INSERT INTO alertas (tempMax,tempMin,fkRegistro,fkPulseira) VALUES 
(39.0,35.0,1,1);
INSERT INTO contato (nome,email,mensagem) VALUES 
('Visitante TechVita','visitante@email.com','Esse é o primeiro insert!'
);
