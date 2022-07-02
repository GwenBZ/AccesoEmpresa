const ruta = require('express').Router();
const { Router } = require('express');
const { route } = require('express/lib/router');
const consulta = require('../config/conexionbd');




ruta.get('/horas', (req, res) => {
    //let sql ="select * from horas"
    //let sql = "select id_hora from horas"
    //let sql = "select hora_inicial from horas"
    let sql= "select hora_final from horas"
consulta.query(sql,(err,rows)=>{
        if(!err)  {
        res.json(rows);}
        else 
        console.error(err);
    });
});

module.exports = ruta;