create database Hosteleria;
use Hosteleria;
create table habitacion(
piso int (11) null,
nro_habitacion int(11) null,
cantidad_camas int(11) null,
primary key (nro_habitacion)
);

create table reserva(
nro_reserva int (11) null,
desde date,
hasta date,
primary key (nro_reserva)
);

create table huesped(
nombre varchar (30) not null,
apellido varchar (30) not null,
nro_dni int (12) not null,
habitacion_asignada int (11) not null,
habitacion_reservada int (11) not null,
primary key (nro_dni),
foreign key (habitacion_asignada) references habitacion (nro_habitacion),
foreign key (habitacion_reservada) references reserva (nro_reserva)
);