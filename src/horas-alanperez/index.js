const express = require('express');
const app = express();

app.set('port', process.env.PORT || 4000);
app.listen(app.set('port'));
app.use('/login', require('./rutas/rutas'));
console.log('Hola soy un servidor');
