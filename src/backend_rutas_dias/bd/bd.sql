create database ruta_horas
use ruta_horas
create table horas(
        id_hora int auto_increment not null,
        hora_inicial varchar(10) not null,
        hora_final varchar(10) not null,
		tipo varchar(40) not null,
		primary key(id_hora)
);

insert into horas values('9:00', '18:00', 'Horario Oficina');
insert into horas values('9:00', '15:00', 'Horario Jefe');
insert into horas values('7:00', '14:00', 'Horario Matutino');
insert into horas values('14:00', '22:00', 'Horario Vespertino');
insert into horas values('7:00', '12:00', 'Horario sabatino Matutino');
insert into horas values('12:00', '17:00', 'Horario sabatino Vespertino');
insert into horas values('12:00', '17:00', 'Horario festivo');


select * from horas
select id_hora from horas
select hora_inicial from horas
select hora_final from horas
select tipo from horas

delete from horas where id_hora = 7

insert into horas(hora_inicial, hora_final, tipo) value('9:00', '15:00', 'Horario Festivo')

update horas set hora_inicial, hora_final, tipo = ('9:00', '13:00', 'Aniversario de la empresa') where id_hora = 8