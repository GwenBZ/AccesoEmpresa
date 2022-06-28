const routes = require('express').Router();
const consulta=require('../configuracion/conexion_db');

routes.get('/reg',(req,res)=>{
  res.send('ruta login');
});

//Componente Registro a Usuarios

routes.get('/bd',(require,res)=> {
  let sql = "Select * from registrar"
  consulta.query(sql, (err, rows) => {
    if (!err) res.json(rows)
    else
      console.error(err,"ERROR-FAVOR DE VERIFICAR CODIGO");

  });
});

// obtener dato especifico Registro usuarios
routes.get('/:id',(req, res)=>  {
  const {id} = req.params
  let sql = "Select * from usuarios where id_usuario = ?"

  consulta.query(sql,[id], (err, rows) => {
    if (!err) res.json(rows)
    else
      console.error(err,"ERROR-FAVOR DE VERIFICAR CODIGO");

  });
});
