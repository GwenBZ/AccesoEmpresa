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

module.exports = ruta;
