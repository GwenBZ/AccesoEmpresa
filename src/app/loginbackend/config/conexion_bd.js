const mysqle=require("mysql");
const conecta = mysqle.createConnection({
  host:'localhost',
  user:'root',
  password:'55Cartel',
  port:3306,
  database:'Base',
})
