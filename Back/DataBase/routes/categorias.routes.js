
const librosServices = require('../services/categorias.services')

module.exports = (app) => {

    app.get('/categorias', async (req,res) => {
        try {
            let resultado = await categoriasServices.listarCategorias();
            res.json(resultado)
        }catch (err){
            console.log(err.message)
            res.status(500).json({error : err.message})
        }
    })

    app.post('/Categorias', async (req,res) => {
        let categoria = req.body
        console.log(categoria)
        try {
            let resultado = await categoriasServices.nuevaCategoria(libro)
            console.log(resultado)
            res.json(resultado)
        }catch (err){
            console.log(err.message)
            res.status(500).json({error : err.message})
        }
    })

}