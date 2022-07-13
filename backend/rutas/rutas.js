
const { Router, query } = require('express');
const ruta=require('express').Router();
const consulta=require('../Config/conexionbd');


ruta.get('/fechas',(req,res)=>{


    let sql="select fechas.id_fecha as Identificador,usuario_externo.nombre,fechas.dia,Horario.inicial,Horario.final from fechas,Horario_Empleado,usuario_externo,Horario where usuario_externo.id_usuario=fechas.id_usuario and fechas.id_horario=Horario_Empleado.id_hremp and  Horario_Empleado.id_hora=Horario.id_hora Order BY fechas.id_fecha"

    consulta.query(sql,(err,rows)=>{
        if (!err) res.json(rows)
        else
        console.error(err)
    })
})


ruta.get('/consulta/:id',(req,res)=>{///con id
    const {id}= req.params;
    let query="select *from user where user_id=?  "

    consulta.query(query,[id],(err,rows)=>{
        if (!err) res.json(rows)
        else
        console.error(err)
    })
})

ruta.delete('/delete/:id',(req,res)=>{
    const {id}= req.params;
    let query="delete from fechas where id_fecha=?"

    consulta.query(query,[id],(err,rows)=>{
        if (!err) res.json("eliminado")
        else
        console.error(err)
    })
})


ruta.post('/insertar/insert',(req,res)=>{
    const {id_fechav,id_usuariov,diav,id_horariov}= req.body;  
    console.log(req.body);
        
    let query="insert into fechas (id_fecha,id_usuario,dia,id_horario) values('"+id_fechav+"','"+id_usuariov+"','"+diav+"','"+id_horariov+"');"

    consulta.query(query,(err,rows)=>{
        if (!err) res.json("insertado")
        else
        console.error(err)
    })
   

})


ruta.put('/update', async (req, res) => {//actualizar 
    const {id_fecha} = req.params;
    const {id_fechav,id_usuariov,diav,id_horariov}= req.body;  
    console.log(req.body)
   
    let query = "update fechas set id_usuario='"+id_usuariov+"',dia='"+diav+"',id_horario='"+id_horariov+"' where id_fecha='"+id_fechav+"';"
   
    consulta.query(query, (err,rows, fields)=>{
        if(!err)  {
        res.json('Registro actualizado');}
        else 
        console.error(err);
    });
});




module.exports=ruta;