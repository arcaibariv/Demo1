let Carrito = {}

class carritoCompras {
  constructor(titulo,id,precio) {
    this.titulo = titulo;
    this.id = id;
    this.precio = precio;
    this.cantidad = cantidadArticulo
  }
}

const respuesta = {
  codigo: 200,
  error: false,
  mensaje: ''
}


let cantidadArticulo = {
  cantidad:0
}
const buscaArticulo = (id) => {
  if ( Carrito.hasOwnProperty(id)) {
    return true;
  } else {
    return false;
  }
}

const nuevoArticulo = (titulo,id,precio) => {
  Carrito[id] = new carritoCompras(titulo,id,precio)
  cantidadArticulo.cantidad++;
}



const borrarArticulo = id => {
  delete Carrito[id];
}

module.exports = {
  Carrito,
  respuesta,
  nuevoArticulo,
  buscaArticulo,
  borrarArticulo
}