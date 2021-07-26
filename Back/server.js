const express = require('express');
const app = express();
require('dotenv').config();
const { corsOption, limiter } = require('./middlewares/index')
const db = require('./db/db');
///CORS
const cors = require('cors');

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(limiter)


//levantamos nuestro servidor
app.listen(process.env.PORT, ()=> {
    console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
})

app.get('/', cors(corsOption), (req, res) => {
  res.send(db.Carrito)
})

app.post('/nuevo',cors(corsOption), (req,res) => {
  try {
    db.nuevoArticulo(req.body.titulo, req.body.id, req.body.precio);
    console.log(req.body)
    console.log('dentro del post')
    db.respuesta = {
      codigo: 200,
      error:false,
      mensaje:'Articulo añadido con éxito',
      respuesta: db.Carrito
    }
    res.send(db.respuesta)
  }

  catch(e){
    console.log(`Error: post add, ${e}`);
  }
})
