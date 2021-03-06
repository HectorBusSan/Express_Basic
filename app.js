// declaramos express
const express = require('express');
const app= express();
// vamos a declarar el puerto localhost:3000
const port = 3000

// url
// vamos poner diagonal para por default localhost
// te pide un request and response
app.get('/',(req,res)=>{
    res.send('Vamos con Tokio Héctor!!!!!!!!!');
});
// para ver los nuevos resultaods paras el server y lo vuelves a correr

// ahorale agregamos a la diagonal
app.get('/launchX',(req,res)=>{
    res.send("Bienvenidos a LaunchX")
})

// interesante: regresa objetos
app.get('/node',(req,res)=>{
    const explorer1= {id:1,name:"Explorer1"};
    const explorer2= {id:2,name:"Explorer2"};
    const explorer3= {id:3,name:"Explorer3"};
    res.send([explorer1,explorer2,explorer3]);
})

// webpads
// la url me envia un parametro
// se guarda en el request
// y se guarda en params
// ya nos regresa un objeto con el nombre del explorer
// http://localhost:3000/explorers/Hector
app.get('/explorers/:explorer',(req,res)=>{
    console.log(req.params);
    res.send(req.params);
    // {"explorer":"Hector"}
})

// inicializar
app.listen(port,()=>{
    console.log('Server Listo!!!')
});