
const { Schema, model } = require('mongoose')

const ArticuloSchema = new Schema({
  titulo: {
    type: String,
    required: true
  },
  ID: String,
  urlImagen: String,
  categoriaID: String,
  precio: Number, 
  cantidadDisponible: Number,

})


module.exports = model('Articulo', ArticuloSchema);