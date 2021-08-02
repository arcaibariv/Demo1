const sequelize = require('../db/conexion.js')

module.exports.nuevaCategoria = async (categoria) => {
    let newCat = [ categoria.id , categoria.nombre ]

    try {
        let resultado = await sequelize.query(`INSERT INTO categorias (id_cat, nom_cat) VALUES (?,?)`,
        {replacements: newCat, type: sequelize.QueryTypes.INSERT});
        return 'Nueva categoría agregada'
    } catch (error) {
        console.log('El error fue: ')
        console.log(error)
        throw new Error ('Ocurrió un error en el post.')
    }
}

module.exports.listaCategorias = async () => {
    try {
        let resultado = await sequelize.query('SELECT * FROM categorias')
        return resultado
    } catch (error) {
        console.log(error)
        throw new Error ('Ocurrio error en la consulta.')
    }
}