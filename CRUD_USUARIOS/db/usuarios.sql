CREATE DATABASE usersdb
GO

USE usersdb
GO

CREATE TABLE usuarios (
  id INT NOT NULL IDENTITY (1,1),
  nombre CHAR(50) NOT NULL,
  apellido CHAR(50) NOT NULL,
  usuario CHAR(10) NOT NULL,
  correo char(50) not null,
  password CHAR(15) NOT NULL,

  PRIMARY KEY (id)
)


CREATE TABLE informacion_pagos (
  id INT NOT NULL,
  usuario_id INT NOT NULL,
  etiqueta INT NOT NULL identity(1,1),
  tarjeta  INT NOT NULL,
  calle CHAR(25) NOT NULL,
  colonia CHAR(30) NOT NULL,
  num_ext INT NOT NULL,
  num_int INT,
  cp INT NOT NULL
  PRIMARY KEY (id),
  FOREIGN KEY (usuario_id)
)

CREATE TABLE direcciones_envio (
  id INT NOT NULL,
  calle CHAR(25) NOT NULL,
  colonia CHAR(30) NOT NULL,
  num_ext INT NOT NULL,
  num_int INT,
  cp INT NOT NULL,
  referencias CHAR(200),
  etiqueta INT NOT NULL identity(1,1),
  usuario_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (usuario_id)
)