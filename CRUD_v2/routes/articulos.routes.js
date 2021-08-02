const articulosServices = require('../services/articulos.services.js')

module.exports = (app) => {

    app.get('/articulos',async (req,res) => {
        try {
            let resultado = await articulosServices.listaProductos()
            res.json(resultado[0])
        } catch (error) {
            console.log(error.message)
        }
    })

    app.post('/articulos', async (req,res) => {
        let articulo = req.body
        try {
            let resultado = await articulosServices.nuevoArticulo(articulo)
            console.log(resultado)
            res.json(resultado)
        } catch (error) {
            console.log(error.message)
            res.status(500).json({error: error.message})
        }
    })
}