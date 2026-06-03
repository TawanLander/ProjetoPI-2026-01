DROP DATABASE PI2UTI;
CREATE DATABASE PI2UTI;
USE PI2UTI;

/*
Andressa Lustro - 01261005
Gabriel Ortiz dos Anjos Marsura – 01261144
Gustavo de Souza Assis – 01261071
Leandro Bezerra Mendes – 01261051
Tawan Lander Da Fonseca Rodrigues De Paula Moura – 01261067
Vinícius Guimarães Menezes – 01261000
*/

CREATE TABLE contato (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60),
email VARCHAR(150),
mensagem VARCHAR(250)
);

CREATE TABLE endereco (
id INT PRIMARY KEY AUTO_INCREMENT,
logradouro VARCHAR(100),
numero VARCHAR(5),
bairro VARCHAR(50),
cep VARCHAR(10),
complemento VARCHAR(100)
);

CREATE TABLE hospital (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60),
email VARCHAR(150),
senha VARCHAR(20),
telefone VARCHAR(15),
cnpj CHAR(15),
codigoHospital INT
);

CREATE TABLE nivelAcesso (
idNivelAcesso INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(45)
);

CREATE TABLE usuarios (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60),
email VARCHAR(150),
senha VARCHAR(20),
fkHospital INT,
fkNivelAcesso INT,
CONSTRAINT fk_usuario_hospital
FOREIGN KEY (fkHospital) REFERENCES hospital(id),
CONSTRAINT fk_usuario_nivel
FOREIGN KEY (fkNivelAcesso) REFERENCES nivelAcesso(idNivelAcesso)
);

CREATE TABLE pulseira (
id INT PRIMARY KEY AUTO_INCREMENT,
intervaloMedicao INT,
statusPul VARCHAR(20),
fkHospital INT,
CONSTRAINT fk_pulseira_hospital
FOREIGN KEY (fkHospital) REFERENCES hospital(id)
);

CREATE TABLE paciente (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60),
dataNascimento DATE,
cpf VARCHAR(11),
fkEnfermeiro INT,
fkPulseira INT,
CONSTRAINT fk_paciente_enfermeiro
FOREIGN KEY (fkEnfermeiro) REFERENCES usuarios(id),
CONSTRAINT fk_paciente_pulseira
FOREIGN KEY (fkPulseira) REFERENCES pulseira(id)
);

CREATE TABLE registroTemperatura (
id INT PRIMARY KEY AUTO_INCREMENT,
temperatura DECIMAL(4,1),
dataRegistro DATE,
horaRegistro TIME,
fkPulseira INT,
CONSTRAINT fkPulseira
FOREIGN KEY (fkPulseira) REFERENCES hospital(id)
);

CREATE TABLE alertas (
id INT PRIMARY KEY AUTO_INCREMENT,
tempMax DECIMAL(4,2),
tempMin DECIMAL(4,2),
fkRegistro INT,
CONSTRAINT fkRegistro
FOREIGN KEY (fkRegistro) REFERENCES registroTemperatura(id)
);

CREATE TABLE chamados (
id INT AUTO_INCREMENT,
titulo VARCHAR(75),
descc VARCHAR(500),
statuss TINYINT,
dthr DATETIME,
fkUsuarioAbertura INT,
fkUsuarioResponsavel INT,
CONSTRAINT fk_chamado_usuario_abertura
FOREIGN KEY (fkUsuarioAbertura)
REFERENCES usuarios(id),
CONSTRAINT fk_chamado_usuario_responsavel
FOREIGN KEY (fkUsuarioResponsavel)
REFERENCES usuarios(id),
PRIMARY KEY (id)
);

CREATE TABLE ia (
id INT PRIMARY KEY AUTO_INCREMENT,
dthr DATETIME,
resposta VARCHAR(1000)
);
