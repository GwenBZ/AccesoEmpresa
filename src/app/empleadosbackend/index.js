const express = require('express');
const port = (process.env.port || 3000);
const app = express();
//admitir
app.use(express.json())
const cors = require('cors');
app.use(cors());
app.set('port', port);
app.listen(app.set('port'));
console.log("Hola Antonio actualizado");

app.use('/empleados', require('./routes/Rutas'));
