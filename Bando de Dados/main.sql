-- DROP DATABASE PI2UTI;
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
cep CHAR(10),
complemento VARCHAR(100)
);

CREATE TABLE hospital (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60),
email VARCHAR(150),
senha VARCHAR(250),
telefone VARCHAR(15),
cnpj CHAR(15),
codigoHospital INT
);

CREATE TABLE hospitalEndereco (
fkHospital INT,
fkEndereco INT,
PRIMARY KEY (fkHospital, fkEndereco),
CONSTRAINT fk_hospitalEndereco_hospital
FOREIGN KEY (fkHospital) REFERENCES hospital(id),
CONSTRAINT fk_hospitalEndereco_endereco
FOREIGN KEY (fkEndereco) REFERENCES endereco(id)
);

CREATE TABLE nivelAcesso (
idNivelAcesso INT PRIMARY KEY AUTO_INCREMENT,
tipo CHAR(2),
CONSTRAINT chkTipo
CHECK (tipo in('N1', 'N2', 'N3'))
);

CREATE TABLE usuarios (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60),
email VARCHAR(150),
senha VARCHAR(250),
fkHospital INT DEFAULT NULL,
fkNivelAcesso INT DEFAULT NULL,
CONSTRAINT fk_usuario_hospital
FOREIGN KEY (fkHospital) REFERENCES hospital(id),
CONSTRAINT fk_usuario_nivel
FOREIGN KEY (fkNivelAcesso) REFERENCES nivelAcesso(idNivelAcesso)
);

CREATE TABLE pulseira (
id INT PRIMARY KEY AUTO_INCREMENT,
intervaloMedicao INT,
statusPul VARCHAR(20),
CONSTRAINT chkPulseira CHECK (statusPul in('Ativa', 'Manutenção', 'Inativa')),
fkHospital INT,
CONSTRAINT fk_pulseira_hospital
FOREIGN KEY (fkHospital) REFERENCES hospital(id)
);

CREATE TABLE paciente (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60),
dataNascimento DATE,
cpf CHAR(11),
sexo VARCHAR(9),
statusPaciente TINYINT,
fkEnfermeiro INT,
fkPulseira INT DEFAULT NULL,
CONSTRAINT fk_paciente_enfermeiro
FOREIGN KEY (fkEnfermeiro) REFERENCES usuarios(id),
CONSTRAINT fk_paciente_pulseira
FOREIGN KEY (fkPulseira) REFERENCES pulseira(id)
);

ALTER TABLE paciente ADD COLUMN sexo VARCHAR(9);

CREATE TABLE registroTemperatura (
id INT PRIMARY KEY AUTO_INCREMENT,
temperatura DECIMAL(4,1),
dataRegistro DATE,
horaRegistro TIME,
fkPulseira INT,
CONSTRAINT fk_registro_pulseira
FOREIGN KEY (fkPulseira) REFERENCES pulseira(id)
);

CREATE TABLE alertas (
id INT PRIMARY KEY AUTO_INCREMENT,
tempMax DECIMAL(4,2),
tempMin DECIMAL(4,2),
fkRegistro INT,
CONSTRAINT fk_alerta_registro
FOREIGN KEY (fkRegistro) REFERENCES registroTemperatura(id)
);

CREATE TABLE ia (
id INT PRIMARY KEY AUTO_INCREMENT,
dthr DATETIME,
resposta VARCHAR(1000)
);
