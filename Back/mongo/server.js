const express = require('express');
const app = express();
require('dotenv').config();
const { dbConnection } = require('./db/index');
//Middlewares globales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { agregarArticulo, obtenerArticulo, actualizarArticulo } = require ('./services/articulos.services')

async function bootstrap() {
  dbConnection()
    .then(() => {
      app.listen(process.env.PORT, () => {
            console.log("Servidor Iniciado en el puerto " + process.env.PORT)
        })
    })
    .catch((err) => {
      console.log("NO Pude conectar a la base de datos")
    })
}

bootstrap();

//MANEJO DE ERRORES GENERALES
app.use((err, req, res, next) => {
    if (err) {
        console.log(err)
        if (!res.headersSent) {
            res.status(500).send("Error en el servidor: " + err.message)
        }
    }
    next();
})


app.post ('/articulos', async (req, res) => {
  try {

    const articulo = await agregarArticulo(req.body)
    return res.status(200).json(articulo);
  } catch (error) {
    return res.status(400).json(error);
  }
})

app.get('/articulos', async (req, res) => {
  try {
    console.log('entré a get')
    const articulos = await obtenerArticulo()
    return res.status(200).json(articulos);
  } catch (error) {
    return res.status(400).json(error);
  }
})

app.put('/articulos', async (req, res) => {
  try {
    console.log('entré a put')
    const libro = await actualizarArticulo(req.query.ID, req.query.precio)
    return res.status(200).json(articulo);
  } catch (error) {
    return res.status(400).json(error);
  }
})

