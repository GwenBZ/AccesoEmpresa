const express = require('express');
const port = (process.env.port || 6500);
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(cors)

app.set('port',port);
app.listen(app.set('port'));
console.log('Conexión exitosa');

app.use('/login', require('./rutas/rutas'));
