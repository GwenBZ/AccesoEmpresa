const mysql=require("Mysql"); 

const conecta=mysql.createConnection({

host:'localhost',
user:'root',
password:'',
port:'',
database:'database'
});

conecta.connect();
module.exports=conecta 