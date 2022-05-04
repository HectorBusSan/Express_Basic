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

// inicializar
app.listen(port,()=>{
    console.log('Server Listo!!!')
});