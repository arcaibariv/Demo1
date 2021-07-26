const sequelize = require('../db/conexion')

module.exports.nuevoArticulo = async (articulo) => {
    let nuevoArticulo = [
        articulo.titulo,
        articulo.articuloID,
        articulo.categoriaID,
        articulo.precio,
        articulo.cantidadDisponible
    ]
    try {
        let resultado = await sequelize.query(`INSERT INTO articulo (titulo , articuloID, categoriaID, precio, cantidadDisponible) VALUES (?,?,?,?,?)`,
        {replacements: nuevoArticulo, type: sequelize.QueryTypes.SELECT});
        console.log(resultado)
        return 'Alta de articulo correctamente'
    }catch (error) {
        console.log(error)
        throw new Error ("Ocurrio un error en la consulta");
    }
}

module.exports.listarArticulo = async () => {
    try {
        let resultado = await sequelize.query('SELECT * FROM articulo')
        return resultado
    }catch (error){
        console.log(error)
        throw new Error ("Ocurrio un error en la consulta");
    }
}
