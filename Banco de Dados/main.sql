CREATE DATABASE IF NOT EXISTS PI2UTI;
USE PI2UTI;

/*
Andressa Lustro - 01261005
Gabriel Ortiz dos Anjos Marsura – 01261144
Gustavo de Souza Assis – 01261071
Leandro Bezerra Mendes – 01261051
Tawan Lander Da Fonseca Rodrigues De Paula Moura – 01261067
Vinícius Guimarães Menezes – 01261000
*/
CREATE TABLE IF NOT EXISTS contato (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60) NOT NULL,
email VARCHAR(150) NOT NULL,
mensagem VARCHAR(250) NOT NULL
);

CREATE TABLE IF NOT EXISTS endereco (
id INT PRIMARY KEY AUTO_INCREMENT,
logradouro VARCHAR(100) NOT NULL,
numero VARCHAR(5) NOT NULL,
bairro VARCHAR(50) NOT NULL,
cep VARCHAR(10) NOT NULL,
complemento VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS hospital (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60) NOT NULL,
email VARCHAR(150) NOT NULL,
senha VARCHAR(20) NOT NULL,
telefone VARCHAR(15) NOT NULL,
cnpj CHAR(15) NOT NULL,
codigoHospital INT NOT NULL
);

INSERT INTO hospital VALUES (1, 'Casa de Saúde', 'casa@saude.com', '1234', '1191918787', '123123123123123', 0917);

CREATE TABLE IF NOT EXISTS link_enderecos (
hospital_id INT,
endereco_id INT,
PRIMARY KEY (hospital_id, endereco_id)
);

CREATE TABLE IF NOT EXISTS nivelAcesso(
    idNivelAcesso INT PRIMARY KEY AUTO_INCREMENT,
    tipo char(2)
);

insert into nivelAcesso (tipo) values 
('N1'),
('N2'),
('N3');

CREATE TABLE IF NOT EXISTS usuarios (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60) NOT NULL,
email VARCHAR(150) NOT NULL,
senha VARCHAR(20) NOT NULL,
fkHospital INT NOT NULL,
CONSTRAINT fk_hospital FOREIGN KEY (fkHospital) REFERENCES hospital(id),
fkNivelAcesso INT DEFAULT NULL,
CONSTRAINT fk_nivel_acesso FOREIGN KEY (fkNivelAcesso) REFERENCES nivelAcesso(idNivelAcesso)
);

INSERT INTO usuarios (id, nome, email, senha, fkHospital) VALUES (1, 'Teste', 'teste@usuario.com', 'SenhaMegaforte1#', 1);
INSERT INTO usuarios (id, nome, email, senha, fkHospital, fkNivelAcesso) VALUES (3, 'Teste', 'teste@usuario.com', 'SenhaMegaforte1#', 1, 3);
CREATE TABLE IF NOT EXISTS pulseira (
id INT PRIMARY KEY AUTO_INCREMENT,
fkHospital INT NOT NULL,
CONSTRAINT fk_hospital_pulseira FOREIGN KEY (fkHospital) REFERENCES hospital(id)
);

CREATE TABLE IF NOT EXISTS paciente (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60) NOT NULL,
dataNascimento DATE NOT NULL,
sexo VARCHAR(20) NOT NULL,
statusPaciente TINYINT,
fkPulseira INT NOT NULL,
CONSTRAINT fk_pulseira FOREIGN KEY (fkPulseira) REFERENCES pulseira(id)
);

INSERT INTO pulseira (id, fkHospital) VALUES (1, 1);
INSERT INTO pulseira (id, fkHospital) VALUES (2, 1);
INSERT INTO pulseira (id, fkHospital) VALUES (3, 1);

CREATE TABLE IF NOT EXISTS registroTemperatura (
id INT PRIMARY KEY AUTO_INCREMENT,
temperatura DECIMAL(4,1),
dataRegistro DATE,
horaRegistro TIME,
fkPulseira INT,
CONSTRAINT fk_pulseira_temperatura FOREIGN KEY (fkPulseira) REFERENCES pulseira(id)
);

CREATE TABLE IF NOT EXISTS alertas (
    id INT PRIMARY KEY AUTO_INCREMENT,
   tempRegistrada DECIMAL(4, 2),
   situacao VARCHAR(9),
   fkRegistro INT,
   CONSTRAINT fk_alerta_registro
   FOREIGN KEY (fkRegistro) REFERENCES registroTemperatura(id)
);

CREATE TABLE IF NOT EXISTS ia (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dthr DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    resposta VARCHAR(1000) NOT NULL
);

CREATE VIEW vw_ctt AS 
SELECT contato.nome AS 'Nome', contato.email AS 'Email', contato.mensagem AS 'Mensagem', contato.id AS 'Id' FROM contato;