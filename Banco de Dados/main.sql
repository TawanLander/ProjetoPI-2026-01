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

INSERT INTO hospital VALUES (1, 'Casa de Saúde', 'casa@saude.com', '1234', '1191918787', '123123123123123', 0917)
ON DUPLICATE KEY UPDATE id = id;

CREATE TABLE IF NOT EXISTS link_endereços (
hospital_id INT,
endereco_id INT,
PRIMARY KEY (hospital_id, endereco_id)
);

CREATE TABLE IF NOT EXISTS enfermeiro (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60) NOT NULL,
email VARCHAR(150) NOT NULL,
senha VARCHAR(20) NOT NULL,
fkHospital INT NOT NULL,
CONSTRAINT fk_hospital FOREIGN KEY (fkHospital) REFERENCES hospital(id)
);

INSERT INTO enfermeiro VALUES (1, 'Teste', 'teste@usuario.com', 'SenhaMegaforte1#', 1)
ON DUPLICATE KEY UPDATE id = id;

CREATE TABLE IF NOT EXISTS pulseira (
id INT PRIMARY KEY AUTO_INCREMENT,
intervaloMedicao INT,
statusPul VARCHAR(20),
fkHospital INT NOT NULL,
CONSTRAINT fk_hospital_pulseira FOREIGN KEY (fkHospital) REFERENCES hospital(id)
);

CREATE TABLE IF NOT EXISTS paciente (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60) NOT NULL,
dtNascimento DATE NOT NULL,
genero VARCHAR(20) NOT NULL,
fkPulseira INT NOT NULL,
CONSTRAINT fk_pulseira FOREIGN KEY (fkPulseira) REFERENCES pulseira(id)
);

INSERT INTO pulseira (id, fkHospital) VALUES (1, 1) ON DUPLICATE KEY UPDATE id = id;
INSERT INTO pulseira (id, fkHospital) VALUES (2, 1) ON DUPLICATE KEY UPDATE id = id;
INSERT INTO pulseira (id, fkHospital) VALUES (3, 1) ON DUPLICATE KEY UPDATE id = id;

INSERT INTO paciente VALUES (1, 'Teste', '2007-04-02', '12389176525', 1, 2)

CREATE TABLE IF NOT EXISTS registroTemperatura (
id INT PRIMARY KEY AUTO_INCREMENT,
temperatura DECIMAL(4,1),
dtRegistro DATE,
horaRegistro TIME,
fkPulseira INT,
CONSTRAINT fk_pulseira_temperatura FOREIGN KEY (fkPulseira) REFERENCES pulseira(id),
fkHospital INT,
CONSTRAINT fk_hospital_id FOREIGN KEY (fkHospital) REFERENCES hospital(id)
);

CREATE TABLE IF NOT EXISTS alertas (
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

CREATE TABLE IF NOT EXISTS ia (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dthr DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    resposta VARCHAR(1000) NOT NULL
);