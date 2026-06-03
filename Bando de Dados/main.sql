DROP DATABASE PI2UTI;
>>>>>>> c04603e (Ajustes no Script BD)
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

CREATE TABLE contato (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60),
email VARCHAR(150),
mensagem VARCHAR(250)
);

CREATE TABLE endereco (
id INT PRIMARY KEY AUTO_INCREMENT,
<<<<<<< HEAD
logradouro VARCHAR(100) NOT NULL,
numero VARCHAR(5) NOT NULL,
bairro VARCHAR(50) NOT NULL,
cep VARCHAR(10) NOT NULL,
logradouro VARCHAR(100),
numero VARCHAR(5),
bairro VARCHAR(50),
cep VARCHAR(10),
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
fkHospital INT NOT NULL,
CONSTRAINT fk_hospital_pulseira FOREIGN KEY (fkHospital) REFERENCES hospital(id)
);

insert into pulseira (id, fkHospital) values (1, 1);
insert into pulseira (id, fkHospital) values (2, 1);
insert into pulseira (id, fkHospital) values (3, 1);
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
