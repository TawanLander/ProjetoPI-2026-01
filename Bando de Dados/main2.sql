CREATE DATABASE PI2UTI;
USE PI2UTI;

CREATE TABLE Hospital (
    idHospital INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(50) NOT NULL,
    telefone VARCHAR(15),
    CONSTRAINT chkEmail CHECK (email LIKE '%@%')
);

CREATE TABLE Enfermeiro (
    idEnfermeiro INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    numeroCracha INT NOT NULL,
    senha VARCHAR(50) NOT NULL,
    cargo VARCHAR(30) NOT NULL,
    fkHospital INT,
    CONSTRAINT chkCargo CHECK (cargo IN ('Enfermeiro', 'Enfermeiro-Chefe')),
    CONSTRAINT fkEnfermeiroHospital
        FOREIGN KEY (fkHospital) REFERENCES Hospital(idHospital)
);

CREATE TABLE Paciente (
    idPaciente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    dataNascimento DATE NOT NULL,
    cpf CHAR(11) NOT NULL,
    numeroQuarto INT NOT NULL,
    fkEnfermeiro INT,
    CONSTRAINT fkPacienteEnfermeiro
        FOREIGN KEY (fkEnfermeiro) REFERENCES Enfermeiro(idEnfermeiro)
);

CREATE TABLE Pulseira (
    idPulseira INT PRIMARY KEY AUTO_INCREMENT,
    intervaloMedicao INT NOT NULL
);

CREATE TABLE RegistroTemperatura (
    idRegistro INT PRIMARY KEY AUTO_INCREMENT,
    temperatura DECIMAL(4,1) NOT NULL,
    dataRegistro DATE NOT NULL,
    horaRegistro TIME NOT NULL,
    fkPaciente INT,
    CONSTRAINT fkRegistroPaciente
        FOREIGN KEY (fkPaciente) REFERENCES Paciente(idPaciente),
    CONSTRAINT chkTemp CHECK (temperatura BETWEEN 30 AND 45)
);