const mysql = require('mysql');
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'contrasenafalsa123',
  port:3306,
  database: 'AccesoEmpresa'
})
conexion.connect();

module.exports = conexion;
