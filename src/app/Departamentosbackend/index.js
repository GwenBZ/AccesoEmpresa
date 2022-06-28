const express = require('express');
const app = express();
const port = (process.env.port || 3000);
//admitir
app.use(express.json())

app.set('port', port);
//inicializar express

app.listen(app.get('port'),(error)=>{
    if(error)
    {console.log('error al iniciar el servidor: '+error)}
    else{
        console.log('servidor iniciado en el prueto: '+port)
    }
})
//rutas
app.use('/Dep', require('./rutas/rutas'));
