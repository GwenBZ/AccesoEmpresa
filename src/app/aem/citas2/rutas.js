const ruta = require('express').Router();
const conecta = require('../config/conexion');


//ver depas
ruta.get('/Citass', (req, res) => {
  let sql = ' select * from citas';
  conecta.query(sql, (err, rows) => {
    if (!err) res.json(rows);
    else {
      console.log('error');
    }
  })
});
