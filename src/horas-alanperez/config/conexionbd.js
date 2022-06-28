const mysql = require("mysql");
const conecta = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '201710167',
    port: '3306',
    database: 'acces'
});
conecta.connect();
module.exports = conecta;