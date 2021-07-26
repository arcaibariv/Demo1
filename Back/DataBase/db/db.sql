USE TIENDA_ONLINE
GO

CREATE TABLE Categorias (
    id char(20) NOT NULL,
    categoria char(30) NOT NULL,
    PRIMARY KEY (id)
)
GO

CREATE TABLE articulo (
    id int NOT NULL IDENTITY (1,1),
    titulo char (200) NOT NULL,
    ID_articulo char (20) NULL,
    categoriaID char(30) NOT NULL,
    precio int NOT NULL,
    cantidadDisponible int not null,

    PRIMARY KEY (id)
)
GO

