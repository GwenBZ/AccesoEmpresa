
const { Router, query } = require('express');
const ruta=require('express').Router();
const consulta=require('../Config/conexionbd');

ruta.get("/reg",(require,res)=>{res.send("Ruta login");
});


ruta.get('/bd',(req,res)=>{
   
    let sql="select id_fecha,diasmes.dia_mes,dia.id_dia from fecha,diasmes,dia where diasmes.id_diames=fecha.id_diasmes and fecha.id_dia=dia.id_dia order by dia.id_dia;"

    consulta.query(sql,(err,rows)=>{
        if (!err) res.json(rows)
        else
        console.error(err)
    })
})


ruta.get('/roles',(req,res)=>{
    let sql="select *from roles"
   
    consulta.query(sql,(err,rows)=>{
        if (!err) res.json(rows)
        else
        console.error(err)
    })
})


ruta.get('/consulta/:id',(req,res)=>{///con id
    const {id}= req.params;
    let query="select id_fecha,diasmes.dia_mes,dia.id_dia from fecha,diasmes,dia where id_fecha=? and diasmes.id_diames=fecha.id_diasmes and fecha.id_dia=dia.id_dia order by dia.id_dia;"

    consulta.query(query,[id],(err,rows)=>{
        if (!err) res.json(rows)
        else
        console.error(err)
    })
})

ruta.delete('/delete/:id',(req,res)=>{
    const {id}= req.params;
    let query="delete from fecha where id_fecha=?  "

    consulta.query(query,[id],(err,rows)=>{
        if (!err) res.json("eliminado")
        else
        console.error(err)
    })
})


ruta.post('/insertar/insert',(req,res)=>{
    const {id_fecha,id_diasmes,id_dia}= req.body;

    console.log(req.body);
        

    let query="insert into fecha (id_fecha,id_diasmes,id_dia) values('"+id_fecha+"','"+id_diasmes+"','"+id_dia+"')";

    consulta.query(query,(err,rows)=>{
        if (!err) res.json("insertado")
        else
        console.error(err)
    })
   

});


ruta.put('/update/:id_fecha', async (req, res) => {//actualizar 
    const {id_fecha} = req.params;
    const {id_diasmes} = req.body;
   
    let sql ="update fecha set id_diasmes = ('"+id_diasmes+"') where id_fecha = ?";
    consulta.query(sql,[id_fecha], (err,rows, fields)=>{
        if(!err)  {
        res.json('Registro actualizado');}
        else 
        console.error(err);
    });
});


module.exports=ruta;