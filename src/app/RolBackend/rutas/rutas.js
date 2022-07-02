const rutas = require('express').Router();
const consulta=require('../configuracion/conexion_db');

rutas.get('/login',(req,res)=>{
  res.send('ruta login');
});

//Tabla Rol

rutas.get('/rol',(require,res)=> {
  let sql = "Select * from rol"
  consulta.query(sql, (err, rows) => {
    if (!err) res.json(rows)
    else
      console.error(err,"Verifique sus datos");
  });
});


// obtener dato de la tabla rol
rutas.get('/:id',(req, res)=>  {
  const {id} = req.params
  let sql = "Select * from rol where id_rol = ?"

  consulta.query(sql,[id], (err, rows) => {
    if (!err) res.json(rows)
    else
      console.error(err,"Verifique sus datos");

  });
});


//Eliminar un dato de la Tabla rol
rutas.delete('/rol/:id',(req,res)=>{
  const{id}=req.params
  let sql =`delete from rol where id_rol = '${id}'`
  consulta.query(sql, (err, rows)=> {
    if (!err) res.json(rows)
    else{
      res.json({status: 'Este elemento se ha eliminado'})
    }

  });
});

//Agregar un dato a la tabla rol
routes.post('/',(req, res)=>{
  const{id_rol,descripcion}= req.body
  let sql = `insert into rol(id_rol,descripcion) values('${id_rol}','${descripcion}')`
  consulta.query(sql, (err, rows)=> {
    if (!err) res.json(rows)
    else{
      res.json({status: 'El elemento se  ha agregado'})
    }
  });
});

module.exports = rutas;
