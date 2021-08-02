const sequelize = require('../db/conexion.js')

module.exports.nuevoArticulo = async (articulo) => {
    //let id = await sequelize.query('SELECT count(id_item) FROM articulos')

    let newProd = [ `${articulo.cat}-${articulo.numero}`, articulo.descripcion, articulo.cat, articulo.disponibilidad, articulo.pecio ]

    try {
        let resultado = await sequelize.query(`INSERT INTO articulos (id_item, descripcion, cat, disponibilidad, precio) VALUES (?,?,?,?,?)`,
        {replacements: newProd, type: sequelize.QueryTypes.INSERT});
        return 'Nuevo producto agregado'
    } catch (error) {
        console.log('El error fue: ')
        console.log(error)
        throw new Error ('Ocurrió un error en el post.')
    }
}

module.exports.listaProductos = async () => {
    try {
        let resultado = await sequelize.query('SELECT * FROM productos')
        return resultado
    } catch (error) {
        console.log(error)
        throw new Error ('Ocurrio error en la consulta.')
    }
}