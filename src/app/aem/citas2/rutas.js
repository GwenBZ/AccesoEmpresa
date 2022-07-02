const ruta = require('express').Router();
const conecta = require('../config/conexion');

//ver
ruta.get('/Citas', (req, res) => {
  let sql = '  select * from citas;';
  conecta.query(sql, (err, rows) => {
    if (!err) res.json(rows);
    else {
      console.log('error');
    }
  })
});

// get acomodar o encotrar
ruta.get('/Citas/:id', (req, res) => {
  const { id } = req.params;
  let sql = `select * from citas where id_cita= ?`;
  conecta.query(sql, [id], (err, rows) => {
    if (err) throw err;
    else {
      res.json(rows)
    }
  })
});
//agregar
ruta.post('/Citas/Agregar', (req, res) => {
  const { id_empleado, id_Usuario, id_horario} = req.body
  let sql = `insert into citas( id_empleado, id_Usuario, id_horario) values ( '${id_empleado}','${id_Usuario}','${id_horario}')`;
  conecta.query(sql, (err, rows) => {
    if (err) throw err
    else {
      res.json({ status: ' agregado' })
    }
  })
});

//eliminar Delete
ruta.delete('/Citas/:id', (req, res) => {
  const { id } = req.params;
  let sql = `delete from citas where id_cita = '${id}'`;
  conecta.query(sql, (err, rows) => {
    if (err) throw err
    else {
      res.json({ status: ' eliminado' })
    }
  })
});
// modificar
ruta.put('/Citas/:id', (req, res) => {
  const { id } = req.params;
  const { id_empleado, id_Usuario, id_horario } = req.body;
  let sql =  `UPDATE citas SET id_empleado='${id_empleado}',id_Usuario='${id_Usuario}', id_horario='${id_horario}' WHERE id_cita='${id}'`;
  conecta.query(sql, (err, rows) => {
    if (err) throw err
    else {
      res.json({ status: ' modificado' })
    }
  })
});


module.exports = ruta;
