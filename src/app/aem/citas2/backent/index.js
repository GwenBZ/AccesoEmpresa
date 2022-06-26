console.debug('servidor');
const express=require('express');
const app=express();
const port=process.env.port || 5000;

app.set('port',port);
app.listen(app.set('port'));
app.use('/login',require('./Router/rutas'));