const mysqle=require("mysql");
const conecta = mysqle.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  port:3306,
  database:'Base',
})
conecta.connect()
module.exports=conecta;
