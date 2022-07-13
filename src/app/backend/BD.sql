create database Horario;
use Horario;

Create Table horario(
id_hora int auto_increment primary key not null,
inicial varchar (50) not null,
final varchar (50) not null,
tipo varchar (50) not null
);

insert into horario values(default,'7:00','15:00','Matutino');
insert into horario values(default,'15:00','23:00','Vespertino');
insert into horario values(default,'7:00','13:00','Sabatino Matutino');
insert into horario values(default,'13:00','19:00','Sabatino Vespertino');
insert into horario values(default,'9:00','17:00','Jornada Normal');
insert into horario values(default,'9:00','15:00','Sabatino Normal');

Create table dias(
id_dia int auto_increment primary key not null,
descripcion varchar(50)
);

insert into dias values(default,'Lunes a Viernes');
insert into dias values(default,'Sabado');
insert into dias values(default,'Domingo');

create table departamentos(
id_depto int auto_increment primary key not null,
descripcion varchar(50)
);

insert into departamentos values(default,'Recursos Humanos');
insert into departamentos values(default,'Ventas');
insert into departamentos values(default,'Contabilidad');
insert into departamentos values(default,'Produccion');

create table usuarios(
id_usuario int auto_increment primary key not null,
nombre varchar(50),
apellidos varchar(50),
email varchar(50),
celular varchar(50),
calle varchar(50),
ciudad varchar(50),
cp varchar(10),
departamento int,
foreign key(departamento) references departamentos (id_depto)
);

insert into usuarios values(default,'Armando','Trujillo Romero', 'trujipollo@gmail.com','5510423011','Don celes','CDMX','15200',4);
insert into usuarios values(default,'Aime','Benitez Romero', 'benirom@gmail.com','5600423011','Policarpio #20','CDMX','10750',4);
insert into usuarios values(default,'Susana Valeria','Rodriguez Sanchez', 'sanchi12@gmail.com','554523011','San Hipolito 22','CDMX','17330',4);
insert into usuarios values(default,'Abigail','Lodeiro Sanatana', 'santiabi@gmail.com','5510420013','Corregidora 16','CDMX','15100',4);
insert into usuarios values(default,'Leonardo','Del angel Medina', 'dicaprio0@gmail.com','5510423011','Nativitas s/n','Edo. Mex','20330',4);
insert into usuarios values(default,'Carlos','Perez Diaz', 'carlito11@gmail.com','5536523013','San juan #100','CDMX','15100',4);
insert into usuarios values(default,'Silvia','Benitez Romero', 'silvale@gmail.com','5610023022','Los remos 90','CDMX','15200',1);
insert into usuarios values(default,'Maricela del Angel','Muñoz Ruiz', 'mar12@gmail.com','5510023011','Sur 70','Edo. Mex','14211',1);
insert into usuarios values(default,'Nohemi','Sanchez Gutierrez', 'noe97@gmail.com','5511923066','Cerrada  Martino','CDMX','11330',2);
insert into usuarios values(default,'Ximena Lilia','Luna Romero', 'ximeloli@gmail.com','5511623011','Ampliacion Benito J.','CDMX','11400',2);
insert into usuarios values(default,'Mario','Rojas Vega', 'mariopoter@gmail.com','5510003097','Norte 120','CDMX','13000',2);
insert into usuarios values(default,'Rosendo','Capillo Noriega', 'abdel90@gmail.com','5510421011','Sur 90','Edo. Mex','18966',3);
insert into usuarios values(default,'Oscar','Trujillo Valero', 'osqui1977@gmail.com','5510423022','Milagros #30','Edo. Mex','19663',3);

create table horario_empleado(
id_hremp int auto_increment primary key not null,
usuario int,
hora int,
dia int,
FOREIGN KEY(usuario) REFERENCES usuarios(id_usuario),
FOREIGN KEY(hora) REFERENCES horario(id_hora),
FOREIGN KEY(dia) REFERENCES dias(id_dia)
);

insert into horario_empleado values(default,01,01,01);
insert into horario_empleado values(default,02,01,01);
insert into horario_empleado values(default,03,01,01);
insert into horario_empleado values(default,04,02,01);
insert into horario_empleado values(default,05,02,01);
insert into horario_empleado values(default,06,02,01);
insert into horario_empleado values(default,07,05,01);
insert into horario_empleado values(default,08,05,01);
insert into horario_empleado values(default,09,05,01);
insert into horario_empleado values(default,10,05,01);
insert into horario_empleado values(default,11,05,01);
insert into horario_empleado values(default,12,05,01);

insert into horario_empleado values(default,01,03,02);
insert into horario_empleado values(default,02,03,02);
insert into horario_empleado values(default,03,03,02);
insert into horario_empleado values(default,04,04,02);
insert into horario_empleado values(default,05,04,02);
insert into horario_empleado values(default,06,04,02);
insert into horario_empleado values(default,07,06,02);
insert into horario_empleado values(default,08,06,02);
insert into horario_empleado values(default,09,06,02);
insert into horario_empleado values(default,10,06,02);
insert into horario_empleado values(default,11,06,02);
insert into horario_empleado values(default,12,06,02);


select  usuario_externo.nombre,fechas.dia,Horario.inicial,Horario.final from fechas,Horario_Empleado,usuario_externo,Horario;
