const mysql=require("Mysql"); 

const conecta=mysql.createConnection({

host:'',
user:'',
password:'',
port:'',
database:''
});

conecta.connect();
module.exports=conecta 