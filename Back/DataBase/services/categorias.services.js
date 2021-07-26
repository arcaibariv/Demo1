const sequelize = require('../db/conexion')

module.exports.listarCategorias = async ()=> {
    try {
        let resultado = await sequelize.query('SELECT * FROM Categorias');
        console.log(resultado)
        return resultado;
    }catch (error) {
        console.log(error)
        throw new Error ("Ocurrio un error en la consulta");
    }
};

module.exports.nuevaCategoria = async (Categoria)=> {
    let categoriaNueva = [
        Categoria.id,
        Categoria.categoria
    ]
    console.log(categoriaNueva)
    try {
        let resultado = await sequelize.query(`INSERT INTO Categoria (id, categoria) VALUES (?,?)`,
        {replacements: categoriaNueva, type: sequelize.QueryTypes.SELECT});
        console.log(resultado)
        return 'alta de categoria correctamente'
    }catch (error) {
        console.log(error)
        throw new Error ("Ocurrio un error al crear el nuevo libro");
    }
}


