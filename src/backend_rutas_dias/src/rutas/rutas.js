const ruta = require('express').Router();
const { Router } = require('express');
const { route } = require('express/lib/router');
const consulta = require('../config/conexionbd');

ruta.get('/reg', (req, res) => {
    res.send('Esta es la ruta dias');
});

//CONSULTAR EN LA BASE
ruta.get('/base/:id', async (req, res) => {
    const {id} = req.params;
    let sql = "select * from horas where id_hora = ?"
    consulta.query(sql,[id], (err,rows)=>{
        if(!err)  {
        res.json(rows);}
        else 
        console.error(err);
    });
});

//BORRAR EN LA BASE 
ruta.delete('/base/:id', async (req, res) => {
    const {id} = req.params;
    let sql = "delete from horas where id_hora = ?"
    consulta.query(sql,[id], (err,rows)=>{
        if(!err)  {
        res.json('Horario Eliminado Exitosamente!!');}
        else 
        console.error(err);
    });
});

//INSERTAR EN LA BASE 
ruta.post('/base/inser', async (req, res) => {
    const {id_hora, hora_inicial, hora_final, tipo} = req.body;
    let sql = `insert into horas(id_hora, hora_inicial, hora_final, tipo) values('${id_hora}', '${hora_inicial}','${hora_final}', '${tipo}')`
    consulta.query(sql, (err, rows, fields)=>{
        if(!err)  {
        res.json('Horario Ingresado Exitosamente!!');}
        else 
        console.error(err);
    });
});


//ACTUALIZAR DATOS EN LA BASE 
ruta.put('/base/:id_hora', async (req, res) => {
    const {id_hora} = req.params;
    const {hora_inicial, hora_final, tipo} = req.body;
    let sql =`update horas set hora_inicial = ('${hora_inicial}'), hora_final = ('${hora_final}'), tipo = ('${tipo}') where id_hora = ?`
    consulta.query(sql,[id_hora], (err,rows, fields)=>{
        if(!err)  {
        res.json('Horario actualizado Exitosamente!!');}
        else 
        console.error(err);
    });
});

module.exports = ruta;