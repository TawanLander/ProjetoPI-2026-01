CREATE DATABASE LifeSaver;
USE LifeSaver; 


/*Gabriel Ortiz dos Anjos Marsura – 01261144
Tawan Lander Da Fonseca Rodrigues De Paula Moura – 01261067
Gustavo de Souza Assis – 01261071
Vinícius Guimarães Menezes – 01261000
Leandro Bezerra Mendes – 01261051
Andressa Lustro - 01261005
*/

CREATE TABLE Hospital (
	id_Hospital INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    razaoSocial_Hospital VARCHAR(100) NOT NULL,
    endereco_Hospital VARCHAR(100) NOT NULL,
    email_Hospital VARCHAR(50) UNIQUE NOT NULL,
    senha_Hospital VARCHAR(20) NOT NULL,
    qtdPulseira_Hospital INT NOT NULL,
    CONSTRAINT chkEmail CHECK (email_Hospital LIKE '%@%')
);

CREATE TABLE Enfermeiro (
	id_Enfermeiro INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome_Enfermeiro VARCHAR(50) NOT NULL,
    numeroCracha_Enfermeiro INT NOT NULL,
    senha_Enfermeiro VARCHAR(20) NOT NULL,
    cargo_Enfermeiro VARCHAR(50) NOT NULL,
    CONSTRAINT chkEnfermeiro CHECK (cargo_enfermeiro IN('Enfermeiro', 'Enfermeiro-Chefe'))
);

CREATE TABLE Paciente (
	id_Paciente INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome_Paciente VARCHAR(50) NOT NULL,
    nomeEnfermeiro_Paciente VARCHAR(50) NOT NULL,
    dataNascimento_Paciente DATE NOT NULL,
    cpf_Paciente CHAR(15) NOT NULL,
    numeroQuarto_Paciente INT NOT NULL,
    idPulseira_Paciente INT NOT NULL
);

CREATE TABLE Pulseira (
	numero_Pulseira INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    intervaloMedicao_Pulseira INT NOT NULL
);

CREATE TABLE RegistroTemperatura (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    temperatura_RegistroTemperatura INT NOT NULL,
    data_RegistroTemperatura DATE NOT NULL,
    hora_RegistroTemperatura TIME NOT NULL,
    nome_Paciente VARCHAR(50) NOT NULL,
    numero_Pulseira INT NOT NULL
);

CREATE TABLE EntradaSaidaPaciente (
		id_EntradaSaidaPaciente INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        dataEntrada_Paciente DATE NOT NULL,
        horaEntrada_Paciente TIME NOT NULL,
        dataSaida_Paciente DATE NOT NULL,
		horaSaida_Paciente TIME NOT NULL
);

CREATE TABLE Leito (
	id_Leito INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    numeroQuarto_Leito INT NOT NULL,
    cama_Leito VARCHAR(50) NOT NULL
);

ALTER TABLE Hospital ADD COLUMN telefone_Hospital VARCHAR(15);

ALTER TABLE Enfermeiro MODIFY COLUMN senha_Enfermeiro VARCHAR(50);

ALTER TABLE RegistroTemperatura ADD CONSTRAINT chkTemperatura
	CHECK (temperatura_RegistroTemperatura BETWEEN 30 AND 45);
