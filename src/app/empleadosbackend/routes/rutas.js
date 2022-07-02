const ruta = require('express').Router();
const conexion = require('../config/conexionDB');


//--------Rutas para Empleados--------
// get un rol
ruta.get('/roles',(req,res)=>{
  let sql = 'select * from Roles';
  conexion.query(sql,(err,rows, fields)=>{
    if(!err) res.json(rows);
    else{
      console.error(err);
    }
  })
});

// get departamento
ruta.get('/departamento',(req,res)=>{
  let sql = 'select * from Departamento';
  conexion.query(sql,(err,rows, fields)=>{
    if(!err) res.json(rows);
    else{
      console.error(err);
    }
  })
});

//obtener empleados
ruta.get('/read/',(req, res)=>{
  let sql ='select * from empleado'
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
  let sql ='select * from empleado where id_empleado = ?'
  conexion.query(sql,[id],(err, rows, fields)=>{
    if(err) throw err;
    else{
      res.json(rows)
    }
  })
})

//agregar empleado
ruta.post('/create/',( req, res)=>{
  const{id_empleado, nombre, ap_paterno, ap_materno, sexo, fecha_nacimiento, telefono, correo, colonia, calle, cp, id_rol, id_departamento} = req.body

  let sql = `insert into empleado(nombre, ap_paterno, ap_materno, sexo, fecha_nacimiento, telefono, correo, colonia, calle, cp, id_rol, id_departamento)
values('${nombre}', '${ap_paterno}','${ap_materno}','${sexo}','${fecha_nacimiento}','${telefono}', '${correo}','${colonia}','${calle}','${cp}','${id_rol}','${id_departamento}')`
  conexion.query(sql, (err, rows, fields)=>{
    if(err) throw err
    else{
      res.json({status: 'empleado agregado'})
    }
  })
})

//eliminar empleado
ruta.delete('/delete/:id',(req, res)=>{
  const{id} = req.params

  let sql =`delete from empleado where id_empleado = '${id}'`
  conexion.query(sql, (err, rows, fields)=>{
    if(err) throw err
    else{
      res.json({status: 'empleado eliminado'})
    }
  })
});


//modificar empleado
ruta.put('/update/:id',(req, res)=>{
  const{id}=req.params
  const{nombre, ap_paterno, ap_materno, sexo, fecha_nacimiento, telefono, correo, colonia, calle, cp, id_rol, id_departamento} = req.body

  let sql = `update empleado set
nombre='${nombre}',
ap_paterno='${ap_paterno}',
ap_materno='${ap_materno}',
sexo='${sexo}',
fecha_nacimiento='${fecha_nacimiento}',
telefono='${telefono}',
correo='${correo}',
colonia='${colonia}',
calle='${calle}',
cp='${cp}',
id_rol='${id_rol}',
id_departamento='${id_departamento}'
 where id_empleado = '${id}'`

  conexion.query(sql, (err, rows, fields)=>{
    if(err) throw err
    else{
      res.json({status: 'empleado modificado'})
    }
  })

})
//----------------------------------
module.exports = ruta;
