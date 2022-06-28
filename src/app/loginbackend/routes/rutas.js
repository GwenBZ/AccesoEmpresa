const routes = require('express').Router();
const consulta=require('../configuracion/conexion_db');

routes.get('/reg',(req,res)=>{
  res.send('ruta login');
});
