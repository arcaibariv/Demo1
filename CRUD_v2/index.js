// Importacion de módulos 
const express= require('express');
const app = express();
require('dotenv').config();
const sequelize = require('./db/conexion');
// Importación rutas
const categoriasRoute = require('./routes/categorias.routes')

//Middlewares globales
app.use(express.json());
app.use(express.urlencoded({ extended : true}));


//inico de servidor
async function inicioServidor() {
    try {
        await sequelize.authenticate();
        console.log('Conección estabilizada correctamente.');
        app.listen(process.env.PORT , function() {
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`)
        })
    } catch (error) {
        console.error('No se pudo conectar correctamente con la base o con el servidor: ', error);
    }
}

inicioServidor();

// Llamada de rutas
categoriasRoute(app);