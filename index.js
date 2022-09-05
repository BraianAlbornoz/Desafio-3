const express = require ('express');
const productos = require ('./Productos.json')
const PORT = process.env.PORT || 8080;
const app = express ();


app.get('/productos', (req,res)=>{
    res.send( `Los Productos que hay son :  ${JSON.stringify(productos)}`);

});
app.get('/random', (req,res)=>{
    let random = Math.floor(Math.random()*productos.length);
    let elementArray = productos.filter((item)=> item.id == random + 1 )
    let randonParse = JSON.stringify(elementArray)
    res.send(`El producto random es: ${randonParse} `);
});

app.get('*',(req,res)=>{
    const responseStatus = 404;
    res.status(responseStatus).send(`<h1 style='color:red'> La pagina que buscar NO EXISTE (${responseStatus}) </h1>`)
});

const connectedServer = app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT} http:`);
});

connectedServer.on('error',(error) =>{
  console.log(error.message);
});

