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

//Modulo login -- Accesar

routes.get('log/bd',(require,res)=> {
  let sql = "Select * from usuarios"

  //Registro Usuarios

  consulta.query(sql, (err, rows) => {
    if (!err) res.json(rows)
    else
      console.error(err,"ERROR-FAVOR DE VERIFICAR CODIGO");

  });
});

// obtener dato especifico login
routes.get('/:id',(req, res)=>  {
  const {id} = req.params
  let sql = "Select * from usuarios where id_usuario = ?"

  consulta.query(sql,[id], (err, rows) => {
    if (!err) res.json(rows)
    else
      console.error(err,"ERROR-FAVOR DE VERIFICAR CODIGO");

  });
});

//Tabla Rol

routes.get('/bd',(require,res)=> {
  let sql = "Select * from rol"
  consulta.query(sql, (err, rows) => {
    if (!err) res.json(rows)
    else
      console.error(err,"ERROR-FAVOR DE VERIFICAR CODIGO");
  });
});


// obtener dato especifico Tabla rol
routes.get('/:id',(req, res)=>  {
  const {id} = req.params
  let sql = "Select * from rol where id_rol = ?"

  consulta.query(sql,[id], (err, rows) => {
    if (!err) res.json(rows)
    else
      console.error(err,"ERROR-FAVOR DE VERIFICAR CODIGO");

  });
});


//eliminar un dato de la Tabla rol
routes.delete('/bd/:id',(req,res)=>{
  const{id}=req.params
  let sql =`delete from rol where id_rol = '${id}'`
  consulta.query(sql, (err, rows)=> {
    if (!err) res.json(rows)
    else{
      res.json({status: 'dato eliminado'})
    }

  });
});

//AGREGAR DATOS a tabla rol
routes.post('/',(req, res)=>{
  const{id_rol,descripcion}= req.body
  let sql = `insert into rol(id_rol,descripcion) values('${id_rol}','${descripcion}')`
  consulta.query(sql, (err, rows)=> {
    if (!err) res.json(rows)
    else{
      res.json({status: 'dato agregado'})
    }
  });
});

