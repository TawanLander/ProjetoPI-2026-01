<<<<<<< HEAD
=======
-- DROP DATABASE PI2UTI; 
>>>>>>> 8a0c97033952863f55e7f2b4058aa06a44f5f757
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
<<<<<<< HEAD
CREATE TABLE contato (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60) NOT NULL,
email VARCHAR(150) NOT NULL,
mensagem VARCHAR(250) NOT NULL
=======

CREATE TABLE contato (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60),
email VARCHAR(150),
mensagem VARCHAR(250)
>>>>>>> 8a0c97033952863f55e7f2b4058aa06a44f5f757
);

CREATE TABLE endereco (
id INT PRIMARY KEY AUTO_INCREMENT,
<<<<<<< HEAD
logradouro VARCHAR(100) NOT NULL,
numero VARCHAR(5) NOT NULL,
bairro VARCHAR(50) NOT NULL,
cep VARCHAR(10) NOT NULL,
=======
logradouro VARCHAR(100),
numero VARCHAR(5),
bairro VARCHAR(50),
cep CHAR(10),
>>>>>>> 8a0c97033952863f55e7f2b4058aa06a44f5f757
complemento VARCHAR(100)
);

CREATE TABLE hospital (
id INT PRIMARY KEY AUTO_INCREMENT,
<<<<<<< HEAD
nome VARCHAR(60) NOT NULL,
email VARCHAR(150) NOT NULL,
senha VARCHAR(20) NOT NULL,
telefone VARCHAR(15) NOT NULL,
cnpj CHAR(15) NOT NULL,
codigoHospital INT NOT NULL
);

insert into hospital values (1, 'Casa de Saúde', 'casa@saude.com', '1234', '1191918787', '123123123123123', 0917);

create table link_endereços (
hospital_id int,
endereco_id int,
primary key (hospital_id, endereco_id)
);

CREATE TABLE enfermeiro (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60) NOT NULL,
email VARCHAR(150) NOT NULL,
senha VARCHAR(20) NOT NULL,
fkHospital INT NOT NULL,
CONSTRAINT fk_hospital FOREIGN KEY (fkHospital) REFERENCES hospital(id)
);

insert into enfermeiro values (1, 'Teste', 'teste@usuario.com', 'SenhaMegaforte1#', 1);

CREATE TABLE paciente (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60) NOT NULL,
dtNascimento DATE NOT NULL,
genero VARCHAR(20) NOT NULL,
fkPulseira INT NOT NULL,
CONSTRAINT fk_pulseira FOREIGN KEY (fkPulseira) REFERENCES pulseira(id)
);

insert into paciente values (1, 'Teste', '2007-04-02', '12389176525', 1, 2);

CREATE TABLE pulseira (
id INT PRIMARY KEY AUTO_INCREMENT,
intervaloMedicao INT,
statusPul VARCHAR(20),
fkHospital INT NOT NULL,
CONSTRAINT fk_hospital_pulseira FOREIGN KEY (fkHospital) REFERENCES hospital(id)
);

insert into pulseira (id, fkHospital) values (1, 1);
insert into pulseira (id, fkHospital) values (2, 1);
insert into pulseira (id, fkHospital) values (3, 1);
=======
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
fkHospital INT,
CONSTRAINT fk_pulseira_hospital
FOREIGN KEY (fkHospital) REFERENCES hospital(id)
);

CREATE TABLE paciente (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60),
dataNascimento DATE,
sexo VARCHAR(9),
statusPaciente TINYINT,
fkEnfermeiro INT,
fkPulseira INT DEFAULT NULL,
CONSTRAINT fk_paciente_enfermeiro
FOREIGN KEY (fkEnfermeiro) REFERENCES usuarios(id),
CONSTRAINT fk_paciente_pulseira
FOREIGN KEY (fkPulseira) REFERENCES pulseira(id)
);
>>>>>>> 8a0c97033952863f55e7f2b4058aa06a44f5f757

CREATE TABLE registroTemperatura (
id INT PRIMARY KEY AUTO_INCREMENT,
temperatura DECIMAL(4,1),
<<<<<<< HEAD
dtRegistro DATE,
horaRegistro TIME,
fkPulseira INT,
CONSTRAINT fk_pulseira_temperatura FOREIGN KEY (fkPulseira) REFERENCES pulseira(id),
fkHospital INT,
CONSTRAINT fk_hospital_id FOREIGN KEY (fkHospital) REFERENCES hospital(id)
);

CREATE TABLE alertas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    pulseira_id INT NOT NULL,
    registroTemperatura_id INT NOT NULL,
    paciente_id INT NOT NULL,
    tempMax FLOAT NOT NULL,
    tempMin FLOAT NOT NULL,
    CONSTRAINT fk_alerta_pulseira FOREIGN KEY (pulseira_id) REFERENCES pulseira(id),
    CONSTRAINT fk_alerta_registro FOREIGN KEY (registroTemperatura_id) REFERENCES registroTemperatura(id),
    CONSTRAINT fk_alerta_paciente FOREIGN KEY (paciente_id) REFERENCES paciente(id)
);

CREATE TABLE chamados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(75) NOT NULL,
    descc VARCHAR(500) NOT NULL,
    statuss TINYINT NOT NULL DEFAULT 0,
    dthr DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ia (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dthr DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    resposta VARCHAR(1000) NOT NULL
);
=======
dataRegistro DATE,
horaRegistro TIME,
fkPulseira INT,
CONSTRAINT fk_registro_pulseira
FOREIGN KEY (fkPulseira) REFERENCES pulseira(id)
);

CREATE TABLE alertas (
id INT PRIMARY KEY AUTO_INCREMENT,
tempRegistrada DECIMAL(4,2),
situacao VARCHAR(9),
fkRegistro INT,
CONSTRAINT fk_alerta_registro
FOREIGN KEY (fkRegistro) REFERENCES registroTemperatura(id)
);

CREATE TABLE ia (
id INT PRIMARY KEY AUTO_INCREMENT,
dthr DATETIME,
resposta VARCHAR(1000)
);
>>>>>>> 8a0c97033952863f55e7f2b4058aa06a44f5f757
