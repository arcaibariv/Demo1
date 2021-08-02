categorias_ML = [
    {
        "id": "MLM1747",
        "nombre": "Accesorios para Vehículos"
    },
    {
        "id": "MLM189530",
        "nombre": "Agro"
    },
    {
        "id": "MLM1403",
        "nombre": "Alimentos y Bebidas"
    },
    {
        "id": "MLM1071",
        "nombre": "Animales y Mascotas"
    },
    {
        "id": "MLM1367",
        "nombre": "Antigüedades y Colecciones"
    },
    {
        "id": "MLM1368",
        "nombre": "Arte, Papelería y Mercería"
    },
    {
        "id": "MLM1743",
        "nombre": "Autos, Motos y Otros"
    },
    {
        "id": "MLM1384",
        "nombre": "Bebés"
    },
    {
        "id": "MLM1246",
        "nombre": "Belleza y Cuidado Personal"
    },
    {
        "id": "MLM1039",
        "nombre": "Cámaras y Accesorios"
    },
    {
        "id": "MLM1051",
        "nombre": "Celulares y Telefonía"
    },
    {
        "id": "MLM1648",
        "nombre": "Computación"
    },
    {
        "id": "MLM1144",
        "nombre": "Consolas y Videojuegos"
    },
    {
        "id": "MLM1500",
        "nombre": "Construcción"
    },
    {
        "id": "MLM1276",
        "nombre": "Deportes y Fitness"
    },
    {
        "id": "MLM1575",
        "nombre": "Electrodomésticos"
    },
    {
        "id": "MLM1000",
        "nombre": "Electrónica, Audio y Video"
    },
    {
        "id": "MLM186863",
        "nombre": "Herramientas"
    },
    {
        "id": "MLM1574",
        "nombre": "Hogar, Muebles y Jardín"
    },
    {
        "id": "MLM1499",
        "nombre": "Industrias y Oficinas"
    },
    {
        "id": "MLM1459",
        "nombre": "Inmuebles"
    },
    {
        "id": "MLM1182",
        "nombre": "Instrumentos Musicales"
    },
    {
        "id": "MLM3937",
        "nombre": "Joyas y Relojes"
    },
    {
        "id": "MLM1132",
        "nombre": "Juegos y Juguetes"
    },
    {
        "id": "MLM3025",
        "nombre": "Libros, Revistas y Comics"
    },
    {
        "id": "MLM1168",
        "nombre": "Música, Películas y Series"
    },
    {
        "id": "MLM44011",
        "nombre": "Recuerdos, Cotillón y Fiestas"
    },
    {
        "id": "MLM1430",
        "nombre": "Ropa, Bolsas y Calzado"
    },
    {
        "id": "MLM187772",
        "nombre": "Salud y Equipamiento Médico"
    },
    {
        "id": "MLM1540",
        "nombre": "Servicios"
    },
    {
        "id": "MLM1953",
        "nombre": "Otras Categorías"
    }
]

categorias_ML.forEach(async (element) => {
    let newCat = [ element.id , element.nombre ];
    let resultado = await sequelize.query(`INSERT INTO categorias (id_cat, nom_cat) VALUES (?,?)`,
        {replacements: newCat, type: sequelize.QueryTypes.INSERT});
});