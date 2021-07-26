//Importamos los modulos requeridos
var express = require('express');
var app = express();
require('dotenv').config()
const sequelize = require('./db/conexion');
const articulosRoute = require('./routes/articulos.routes')
const categoriasRoutes = require('./routes/categorias.routes')

//Middlewares globales
app.use(express.json())

//iniciamos nuestro servidor
async function inicioServer() {
    try {
        await sequelize.authenticate();
        console.log('Conección estabilizada correctamente');
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en htt://${process.env.HOST}:${process.env.PORT}`);
        });
      } catch (error) {
        console.error('No se pudo conectar correctamebte con la Base de datos:', error);
      }
}

inicioServer();

//Routes
articulosRoute(app);
categoriasRoutes(app);