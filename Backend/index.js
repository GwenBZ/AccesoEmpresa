const express = require('express');
const port = (process.env.port || 3000);
const app = express();
app.set('port', port);

app.use(express.json())
const cors=require('cors');
app.use(cors());

app.listen(app.get('port'),(error)=>{
    if(error)
    {console.log('error al iniciar el servidor: '+error)}
    else{
        console.log('servidor iniciado en el prueto: '+port)
    }
})
//rutas
app.use('/Dep', require('./rutas/rutas'));
