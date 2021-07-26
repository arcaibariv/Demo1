
const Articulo = require('../models/articulos.model');

const agregarArticulo = async (nuevoArticulo) => {
  console.log('funcion agregarArticulo')
  let modelo = {
    titulo: nuevoArticulo.titulo ,
    ID: nuevoArticulo.ID,
    urlImagen: nuevoArticulo.urlImagen,
    categoriaID: nuevoArticulo.categoriaID ,
    precio: nuevoArticulo.precio,
    cantidadDisponible: nuevoArticulo.cantidadDisponible,
    
  }
  const articuloGuardado = await new Articulo(modelo).save();
  console.log('ArticuloGuardado->', articuloGuardado);
  return articuloGuardado;
}

const obtenerArticulo = async () => {
  let articulos = await Articulo.find({}).exec();
  return articulos;

}

const actualizarArticulo = async (ID,precio) => {
  let articulo = await Articulo.findOneAndUpdate(
    { ID },
    { precio: precio },
    { new: true }
  ).exec()
  return articulo
}
  

module.exports = { agregarArticulo, obtenerArticulo, actualizarArticulo }