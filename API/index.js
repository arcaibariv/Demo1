const express = require('express');
const app = express();

require('dotenv').config();


///MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
const { middleware, validacionCategoria, validacionEsxistencia } = require('./middlewares/index.js')

/// SERVICES
const {agregarCategoria,obtenCategorias, buscarCategoria} = require('./services/categories.service.js')

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el http://${process.env.HOST}:${process.env.PORT}`)
})

app.get('/',(req,res) => {
    res.send(req.body.message);
})

app.post('/categorias', validacionCategoria, validacionEsxistencia, (req,res) => {
    const data = agregarCategoria(req.body)
    return res.status(200).json(data)
});

app.get('/categorias', (req,res) => {
    if (!req.body.id) {
        const data = obtenCategorias()
        res.send(data)
    } else{
        const existeCaregoria = buscarCategoria(req.body.id)
        if (existeCaregoria) {
            const data = obtenCategorias()
            const cat = data.filter(elemento => {
                console.log(elemento.id)
                console.log(req.body.id)
                return (elemento.id == req.body.id)
            })
            //console.log(data)
            res.send(cat)
        } else {
            res.send("No existe la categoria")
        }
    }
})