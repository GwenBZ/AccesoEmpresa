const ruta = require('express').Router();
const conexion = require('../config/conexionDB');

//--------Rutas para Empleados--------
// get un rol
ruta.get('/rol',(req,res)=>{
  let sql = 'select * from Roles';
  conexion.query(sql,(err,rows, fields)=>{
    if(!err) res.json(rows);
    else{
      console.error(err);
    }
  })
});
// get departamento
ruta.get('/departamentos',(req,res)=>{
  let sql = 'select * from Departamento';
  conexion.query(sql,(err,rows, fields)=>{
    if(!err) res.json(rows);
    else{
      console.error(err);
    }
  })
});

//obtener empleados
ruta.get('/',(req, res)=>{
  let sql ='select * from datos_personales'
  conexion.query(sql,(err, rows, fields)=>{
    if(err) throw err;
    else{
      res.json(rows)
    }
  })

})

// get un empleado
ruta.get('/:id',(req, res)=>{
  const {id} = req.params
  let sql ='select * from datos_personales where id_usuario = ?'
  conexion.query(sql,[id],(err, rows, fields)=>{
    if(err) throw err;
    else{
      res.json(rows)
    }
  })
})


module.exports = ruta;
