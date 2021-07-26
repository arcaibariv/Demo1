
const autorServices = require('../services/articulos.services')

module.exports = (app) => {

    app.get('/articulos', async (req, res) => {
        try {
            let resultado = await articulosServices.listarArticulo()
            res.json(resultado)
        }catch (err){
            console.log(err.message)
            res.status(500).json({error : err.message}) 
        }
    })

    app.post('/articulo', async (req,res) => {
        let articulo = req.body
        try {
            let resultado = await articuloServices.nuevoArticulo(autor)
            console.log(resultado)
            res.json(resultado)
        }catch (err){
            console.log(err.message)
            res.status(500).json({error : err.message})
        }
    })

}
