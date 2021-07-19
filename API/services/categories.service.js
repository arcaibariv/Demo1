let categorias = [];

const buscarCategoria = (id) => {
    if (categorias.length > 0) {
        const categoriaExiste = categorias.some((categorias) => {
            return categorias.id === id
        })
        return categoriaExiste
    }
    return false
}

const agregarCategoria = (data) => {
    categorias.push(data);
    return categorias
}

const obtenCategorias = () => {
    return categorias
}

module.exports = {
    buscarCategoria,
    agregarCategoria,
    obtenCategorias
}