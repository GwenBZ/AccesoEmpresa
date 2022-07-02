//const {connect} = require('../Router/rutas');


const mysql=require("Mysql"); //crea una variable mysql que require de Mysqql

const conecta=mysql.createConnection({//crea  la conexion con la base de datos

host:'127.0.0.1',
user:'root',
password:'1234',
port:'3306',
database:'db'
/*
    host:'127.0.0.1',
    user:'root',
    password:'1234',
    port:'3306',
    database:'AccesoEmpresa'*/
});

conecta.connect();
module.exports=conecta //exporta el modula de conecta 




