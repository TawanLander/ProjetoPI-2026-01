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

CREATE TABLE Endereco (
    idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    logradouro VARCHAR(45) NOT NULL,
    numero VARCHAR(5) NOT NULL,
    bairro VARCHAR(45) NOT NULL,
    cep VARCHAR(10) NOT NULL,
    complemento VARCHAR(30)
);

CREATE TABLE Hospital (
    idHospital INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    CONSTRAINT chkEmail CHECK (email LIKE '%@%' AND email LIKE '%.com%'),
    senha VARCHAR(50) NOT NULL,
    telefone VARCHAR(15),
	fkEndereco INT,
	FOREIGN KEY (fkEndereco) REFERENCES Endereco(idEndereco)
);

CREATE TABLE Quarto (
	idQuarto INT PRIMARY KEY AUTO_INCREMENT,
    ala VARCHAR(5),
    qtdCamas INT NOT NULL,
    fkHospital INT,
    CONSTRAINT fkQuartoHospital
    FOREIGN KEY (fkHospital) REFERENCES Hospital(idHospital)
);

CREATE TABLE Enfermeiro (
    idEnfermeiro INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    numeroCracha INT NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    CONSTRAINT chkEmail CHECK (email LIKE '%@%' AND email LIKE '%.com%'),
    senha VARCHAR(50) NOT NULL,
    cargo VARCHAR(30) NOT NULL,
    CONSTRAINT chkCargo CHECK (cargo IN ('Enfermeiro', 'Gerente')),
    fkHospital INT,
    CONSTRAINT fkEnfermeiroHospital
        FOREIGN KEY (fkHospital) REFERENCES Hospital(idHospital)
);

CREATE TABLE Paciente (
    idPaciente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    dataNascimento DATE NOT NULL,
    tipoSanguineo VARCHAR(3) NOT NULL,
    sexo CHAR(1) NOT NULL,
    cpf CHAR(11) NOT NULL,
    fkEnfermeiro INT,
    CONSTRAINT fkPacienteEnfermeiro
        FOREIGN KEY (fkEnfermeiro) REFERENCES Enfermeiro(idEnfermeiro)
);

CREATE TABLE Cama (
	idCama INT PRIMARY KEY AUTO_INCREMENT,
    fkQuarto INT,
    CONSTRAINT fkCamaQuarto
		FOREIGN KEY (fkQuarto) REFERENCES Quarto(idQuarto),
	fkHospital INT,
    CONSTRAINT fkCamaHospital
		FOREIGN KEY (fkHospital) REFERENCES Hospital(idHospital),
	fkPaciente INT,
    CONSTRAINT fkCamaPaciente
		FOREIGN KEY (fkPaciente) REFERENCES Paciente(idPaciente)
);

CREATE TABLE Pulseira (
    idPulseira INT PRIMARY KEY AUTO_INCREMENT,
    intervaloMedicao INT NOT NULL,
    statusPul VARCHAR(20),
    fkPaciente INT UNIQUE,
    CONSTRAINT fkPulseiraPaciente
		FOREIGN KEY (fkPaciente) REFERENCES Paciente(idPaciente)
);

CREATE TABLE RegistroTemperatura (
    idRegistro INT PRIMARY KEY AUTO_INCREMENT,
    temperatura DECIMAL(4,1) NOT NULL,
    dataRegistro DATE NOT NULL,
    horaRegistro TIME NOT NULL,
    fkPulseira INT,
    CONSTRAINT fkRegistroPulseira
        FOREIGN KEY (fkPulseira) REFERENCES Pulseira(idPulseira),
    CONSTRAINT chkTemp CHECK (temperatura BETWEEN 30 AND 45)
);

CREATE TABLE Alertas (
	idAlerta INT PRIMARY KEY AUTO_INCREMENT,
    tempMax FLOAT NOT NULL,
    tempMin FLOAT NOT NULL,
    fkRegistro INT,
    CONSTRAINT fkAlertaRegistro
		FOREIGN KEY (fkRegistro) REFERENCES RegistroTemperatura(idRegistro),
	fkPulseira INT,
    CONSTRAINT fkAlertaPulseira
		FOREIGN KEY (fkPulseira) REFERENCES Pulseira(idPulseira)
);

CREATE TABLE Acompanhante (
	idAcompanhante INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    telefone VARCHAR(13),
    fkPaciente INT,
    CONSTRAINT fkAcompanhantePaciente
    FOREIGN KEY (fkPaciente) REfERENCES Paciente(idPaciente)
);

CREATE TABLE Contato (
	nome VARCHAR(50),
    email VARCHAR(50),
    mensagem VARCHAR(250)
);
