const { buscarCategoria } = require('../services/categories.service.js')


const validacionCategoria = (req,res,next) => {
    const {nombre, id} = req.body;

    if(!nombre || !id) {
        return res.status(400).json('Datos incompletos')
    }
    next();
}

const validacionEsxistencia = (req,res,next) => {
    const {id} = req.body
    const result = buscarCategoria(id);
    if (result) {
        return res.status(400).json('La categoria ya existe')
    }
    next()
}


module.exports = {
    validacionCategoria,
    validacionEsxistencia
}