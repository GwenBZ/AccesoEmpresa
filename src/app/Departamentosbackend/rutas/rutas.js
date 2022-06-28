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


module.exports = ruta;
