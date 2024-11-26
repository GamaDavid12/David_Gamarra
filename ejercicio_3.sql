use clinica;
create table medico (
matricula int not null,
nombre varchar (30) not null,
apellido varchar (30) not null,
especialidad varchar (30) not null,
observacion text null,
primary key (matricula)
);
create table paciente(
nro_ss bigint(20) not null,
nombre varchar(30) not null,
apellido varchar(30) not null,
domicilio varchar(50) not null,
codigo_postal smallint(6) not null,
telefono varchar(16) not null,
nro_historial_clinico int(11) not null,
observaciones text null,
primary key (nro_historial_clinico)
);

create table ingreso(
id_ingreso int (11),
fecha_ingreso date,
nro_habitacion smallint (6),
nro_cama smallint (6),
observaciones text,
nro_historial_paciente int (11),
matricula_medico int (11),
primary key (id_ingreso),
foreign key (nro_historial_paciente) references paciente(nro_historial_clinico),
foreign key (matricula_medico) references medico(matricula)
);





