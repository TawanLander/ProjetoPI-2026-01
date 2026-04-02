create database sensor;
use sensor;

create table medicao(
idMedicao int auto_increment,
valor float,
datahr datetime default current_timestamp(),
fkSensor int,
constraint pkDupla primary key (idMedicao, fkSensor),
constraint fkSensor_const foreign key (fkSensor) references sensor(idSensor)
);

create table sensor(
idSensor int primary key auto_increment
);

insert into sensor values (1), (2);

select valor as 'Medição', date_format(datahr, '%h:%iHrs') as 'Data' from medicao where fkSensor = 1;