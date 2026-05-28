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
nome VARCHAR(60) NOT NULL,
email VARCHAR(150) NOT NULL,
mensagem VARCHAR(250) NOT NULL
);

CREATE TABLE endereco (
id INT PRIMARY KEY AUTO_INCREMENT,
logradouro VARCHAR(100) NOT NULL,
numero VARCHAR(5) NOT NULL,
bairro VARCHAR(50) NOT NULL,
cep VARCHAR(10) NOT NULL,
complemento VARCHAR(100)
);

CREATE TABLE hospital (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60) NOT NULL,
email VARCHAR(150) NOT NULL,
senha VARCHAR(20) NOT NULL,
telefone VARCHAR(15) NOT NULL,
cnpj CHAR(15) NOT NULL,
codigoHospital INT NOT NULL
);

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

CREATE TABLE paciente (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60) NOT NULL,
dtNascimento DATE NOT NULL,
cpf VARCHAR(14) NOT NULL,
fkEnfermeiro INT NOT NULL,
CONSTRAINT fk_enfermeiro FOREIGN KEY (fkEnfermeiro) REFERENCES enfermeiro(id),
fkPulseira INT NOT NULL,
CONSTRAINT fk_pulseira FOREIGN KEY (fkPulseira) REFERENCES enfermeiro(id)
);

CREATE TABLE pulseira (
id INT PRIMARY KEY AUTO_INCREMENT,
intervaloMedicao INT,
statusPul VARCHAR(20),
fkHospital INT NOT NULL,
CONSTRAINT fk_hospital_pulseira FOREIGN KEY (fkHospital) REFERENCES hospital(id)
);

CREATE TABLE registroTemperatura (
id INT PRIMARY KEY AUTO_INCREMENT,
temperatura DECIMAL(4,1),
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
