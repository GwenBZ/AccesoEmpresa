const ruta = require('express').Router();
const conecta = require('../config/conexion');


//ver depas
ruta.get('/Departamentos', (req, res) => {
    let sql = 'select * from departamento';
    conecta.query(sql, (err, rows) => {
        if (!err) res.json(rows);
        else {
            console.log('error');
        }
    })
});

// get un depa
ruta.get('/Departamentos/:id', (req, res) => {
    const { id } = req.params;
    let sql = `select * from departamento where id_Departamento= ?`;
    conecta.query(sql, [id], (err, rows) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
});
//agregar
ruta.post('/Departamentos', (req, res) => {
    const { descripcion } = req.body;
    let sql = `insert into departamento(descripcion) values ( '${descripcion}') `
    conecta.query(sql, (err, rows) => {
        if (err) throw err
        else {
            res.json({ status: 'Departamento agregado' })
        }
    })
});

//eliminar 
ruta.delete('/Departamentos/:id', (req, res) => {
    const { id } = req.params;
    let sql = `delete from departamento where id_Departamento = '${id}'`;
    conecta.query(sql, (err, rows) => {
        if (err) throw err
        else {
            res.json({ status: 'Departamento eliminado' })
        }
    })
});

// modificar
ruta.put('/Departamentos/:id', (req, res) => {
    const { id } = req.params;
    const { descripcion } = req.body;
    let sql = `update departamento set descripcion ='${descripcion}' where id_Departamento = '${id}'`;
    conecta.query(sql, (err, rows) => {
        if (err) throw err
        else {
            res.json({ status: 'Dep modificado' })
        }
    })
}
);


//usuario departamentos
ruta.get('/Departamento/usuarios', (req, res) => {
    let sql = 'select nombre, descripcion from usuario INNER JOIN departamento where usuario.id_Departamento= departamento.id_Departamento';
    conecta.query(sql, (err, rows) => {
        if (!err) res.json(rows);
        else {
            console.log('error');
        }
    })
});
// ruta.get('/Departamento/usuarios/:id', (req, res) => {
//     const { id } = req.params;
//     let sql = `select * from usuario_Departamento where id_userDep= ?`;
//     conecta.query(sql, [id], (err, rows) => {
//         if (err) throw err;
//         else {
//             res.json(rows)
//         }
//     })
// });



//empleados departamentos

ruta.get('/Departamento/Empleados', (req, res) => {
    let sql=` select nombre, ap_paterno, ap_materno, descripcion from empleado  INNER JOIN departamento where empleado.id_Departamento= departamento.id_Departamento`;
    conecta.query(sql, (err, rows) => {
        if (!err) res.json(rows);
        else {
            console.log('error');
        }
    })
});





//////////////////////////////////////Citas Alerno
ruta.get('/cita',(req,res)=>{

    let sql="select id_cita,cita.nombre,correo,usuario_externo.nombre as empleado,fechas.dia,tiempo_cita from cita,fechas,usuario_externo where fechas.id_fecha=cita.id_fechas and fechas.id_usuario=usuario_externo.id_usuario;"

    consulta.query(sql,(err,rows)=>{
        if (!err) res.json(rows)
        else
        console.error(err)
    })
})



ruta.post('/crear/cita',(req,res)=>{
    console.log(req.body);
    const {id_citav,nombrev,correov,id_fechasv,tiempo_citav}= req.body;  
    console.log(req.nombrev);
        
      let query="insert into cita (id_cita,nombre,correo,id_fechas,tiempo_cita) values('"+id_citav+"','"+nombrev+"','"+correov+"','"+id_fechasv+"','"+tiempo_citav+"');"

      consulta.query(query,(err,rows)=>{
          if (!err) res.json("insertado")
          else
          console.error(err)
      })
   
 })



 ruta.delete('/dltcita/:id',(req,res)=>{
    const {id}= req.params;
    let query="delete from cita where id_cita=?"

    consulta.query(query,[id],(err,rows)=>{
        if (!err) res.json("eliminado")
        else
        console.error(err)
    })
})


ruta.put('/upcita', async (req, res) => {//actualizar 
    
    const {id_citav,nombrev,correov,id_fechasv,tiempo_citav}= req.body;  
    console.log(req.body)
   
    let query = "update cita set nombre='"+nombrev+"',correo='"+correov+"',id_fechas='"+id_fechasv+"',tiempo_cita='"+tiempo_citav+"' where id_cita='"+id_citav+"';"
   
    consulta.query(query, (err,rows, fields)=>{
        if(!err)  {
        res.json('Registro actualizado');}
        else 
        console.error(err);
    });
});




module.exports = ruta;
