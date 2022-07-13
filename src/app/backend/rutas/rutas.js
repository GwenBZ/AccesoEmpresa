const ruta = require('express').Router();
const consulta = require('../configuracion/conexionbd');

ruta.get('/reg', (req, res) => {
    res.send('Esta es la ruta dias');
});

//CONSULTAR HORARIO DE EMPLEADOS ----ESTA OK CON POSTMAN
ruta.get('/base', async (req, res) => {
    const {id} = req.params;
    let sql = "select horario_empleado.id_hremp, usuarios.nombre, usuarios.apellidos, dias.descripcion, horario.inicial, horario.final, horario.tipo, departamentos.depto from horario_empleado inner join usuarios on horario_empleado.usuario = usuarios.id_usuario inner join dias on horario_empleado.dia = dias.id_dia inner join horario on horario_empleado.hora = horario.id_hora inner join departamentos on usuarios.departamento = departamentos.id_depto order by departamentos.depto, usuarios.apellidos, dias.descripcion"
    //let sql = "select usuarios.nombre, usuarios.apellidos, dias.descripcion, horario.inicial, horario.final, horario.tipo, departamentos.descripcion from horario_empleado inner join usuarios on horario_empleado.usuario = usuarios.id_usuario inner join dias on horario_empleado.dia = dias.id_dia inner join horario on horario_empleado.hora = horario.id_hora inner join departamentos on usuarios.departamento = departamentos.id_depto where usuario = ? order by departamentos.descripcion, usuarios.apellidos, dias.descripcion"
    consulta.query(sql,[id], (err,rows)=>{
        if(!err)  {
        res.json(rows);}
        else 
        console.error(err);
    });
});

//BORRAR EN LA BASE ***NO FUNCIONO EN POSTMAN PERO EN ***WEB-URL SI??¿¿
ruta.get('/borrar/:id_hremp', async (req, res) => {
    const {id_hremp} = req.params;
    let sql = "delete from horario_empleado where id_hremp = ?"
    consulta.query(sql,[id_hremp], (err,rows)=>{
        if(!err)  {
        res.json('Horario Eliminado Exitosamente!!');}
        else 
        console.error(err);
    });
});

//INSERTAR EN LA BASE ----ESTA OK CON POSTMAN
ruta.post('/base/inser', async (req, res) => {
    const {id_hremp, usuario, hora, dia} = req.body;
    let sql = `insert into horario_empleado(id_hremp, usuario, hora, dia) values('${id_hremp}', '${usuario}','${hora}', '${dia}')`
    consulta.query(sql, (err, rows, fields)=>{
        if(!err)  {
        res.json('Horario Ingresado Exitosamente!!');}
        else 
        console.error(err);
    });
});


//ACTUALIZAR DATOS EN LA BASE ----ESTA OK CON POSTMAN
ruta.put('/base/:id_hremp', async (req, res) => {
    const {id_hremp} = req.params;
    const {usuario, hora, dia} = req.body;
    let sql =`update horario_empleado set usuario = ('${usuario}'), hora = ('${hora}'), dia = ('${dia}') where id_hremp = ?`
    consulta.query(sql,[id_hremp], (err,rows, fields)=>{
        if(!err)  {
        res.json('Horario actualizado Exitosamente!!');}
        else 
        console.error(err);
    });
});

module.exports = ruta;