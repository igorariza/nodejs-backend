const conexion = require('./dbconfig');

const seedUsers = async () => {
  try {
    await conexion.query('DROP TABLE IF EXISTS users');
    await conexion.query(
      `CREATE TABLE users (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(45) NOT NULL,
        foto VARCHAR(300) NULL,
        estado INT NULL,
        created_by INT NULL,
        updated_by INT NULL,
        created_at TIMESTAMP NULL,
        updated_at TIMESTAMP NULL,
        deleted_at TIMESTAMP NULL,
        email VARCHAR(45) NOT NULL,
        password VARCHAR(45) NOT NULL,
        role VARCHAR(45) NOT NULL,
        PRIMARY KEY (id))`
    );
    await conexion.query(
      `INSERT INTO users (name, foto, estado, created_by, updated_by, created_at, updated_at, deleted_at, email, password, role)
      VALUES('Jhon Doe', 'https://www.google.com', 1, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null, 'jhondoe@email.com', '123', 'admin')`
    );
    await conexion.query(
      `INSERT INTO users (name, foto, estado, created_by, updated_by, created_at, updated_at, deleted_at, email, password, role)
      VALUES('Jane Doe', 'https://www.google.com', 1, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null, 'jane@doe', '123', 'user')`
    );
    await conexion.query(
      `INSERT INTO users (name, foto, estado, created_by, updated_by, created_at, updated_at, deleted_at, email, password, role)
      VALUES('John Doe', 'https://www.google.com', 1, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null, 'john@doe', '123', 'user')`
    );
    await conexion.query(
      `INSERT INTO users (name, foto, estado, created_by, updated_by, created_at, updated_at, deleted_at, email, password, role)
      VALUES('Jhon Smith', 'https://www.google.com', 1, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null, 'jhonsmith@doe', '123', 'user')`
    );
    console.log('Database users seeded successfully');
  } catch (error) {
    console.log(error);
  }
};

const seedBodegas = async () => {
  try {
    await conexion.query('DROP TABLE IF EXISTS bodegas');
    await conexion.query(
      `CREATE TABLE bodegas (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(45) NOT NULL,
        id_responsable INT NOT NULL,
        estado INT NULL,
        created_by INT NULL,
        updated_by INT NULL,
        created_at TIMESTAMP NULL,
        updated_at TIMESTAMP NULL,
        deleted_at TIMESTAMP NULL,
        PRIMARY KEY (id))`
    );
    await conexion.query(
      `INSERT INTO bodegas (name, id_responsable, estado, created_by, updated_by, created_at, updated_at, deleted_at)
      VALUES('Bodega 1', 1, 1, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null)`
    );
    await conexion.query(
      `INSERT INTO bodegas (name, id_responsable, estado, created_by, updated_by, created_at, updated_at, deleted_at)
      VALUES('Bodega 2', 2, 1, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null)`
    );
    await conexion.query(
      `INSERT INTO bodegas (name, id_responsable, estado, created_by, updated_by, created_at, updated_at, deleted_at)
      VALUES('Bodega 3', 3, 1, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null)`
    );
    await conexion.query(
      `INSERT INTO bodegas (name, id_responsable, estado, created_by, updated_by, created_at, updated_at, deleted_at)
      VALUES('Bodega 4', 4, 1, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null)`
    );
    await conexion.query(
      `INSERT INTO bodegas (name, id_responsable, estado, created_by, updated_by, created_at, updated_at, deleted_at)
      VALUES('Bodega 5', 5, 1, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null)`
    );
    console.log('Database Bodegas seeded successfully');
  } catch (error) {
    console.log(error);
  }
};

const seedProductos = async () => {
  try {
    await conexion.query('DROP TABLE IF EXISTS productos');
    await conexion.query(
      `CREATE TABLE productos (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(45) NOT NULL,
        description VARCHAR(300) NULL,
        estado INT NULL,
        created_by INT NULL,
        updated_by INT NULL,
        created_at TIMESTAMP NULL,
        updated_at TIMESTAMP NULL,
        deleted_at TIMESTAMP NULL,
        PRIMARY KEY (id))`
      );
    await conexion.query(
      `INSERT INTO productos (name, description, estado, created_by, updated_by, created_at, updated_at, deleted_at)
      VALUES('Producto 1', 'Descripcion del producto 1', 1, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null)`
    );
    await conexion.query(
      `INSERT INTO productos (name, description, estado, created_by, updated_by, created_at, updated_at, deleted_at)
      VALUES('Producto 2', 'Descripcion del producto 2', 1, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null)`
    );
    await conexion.query(
      `INSERT INTO productos (name, description, estado, created_by, updated_by, created_at, updated_at, deleted_at)
      VALUES('Producto 3', 'Descripcion del producto 3', 1, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null)`
    );
    await conexion.query(
      `INSERT INTO productos (name, description, estado, created_by, updated_by, created_at, updated_at, deleted_at)
      VALUES('Producto 4', 'Descripcion del producto 4', 1, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null)`
    );
    await conexion.query(
      `INSERT INTO productos (name, description, estado, created_by, updated_by, created_at, updated_at, deleted_at)
      VALUES('Producto 5', 'Descripcion del producto 5', 1, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null)`
    );
    console.log('Database Productos seeded successfully');
  } catch (error) {
    console.log(error);
  }
};

const seedHistoriales = async () => {
  try {
    await conexion.query('DROP TABLE IF EXISTS historiales');
    await conexion.query(
      `CREATE TABLE historiales (
        id INT NOT NULL AUTO_INCREMENT,
        cantidad INT NOT NULL,
        id_bodega_origen INT NOT NULL,
        id_bodega_destino INT NOT NULL,
        id_inventario INT NOT NULL,
        created_by INT NULL,
        updated_by INT NULL,
        created_at TIMESTAMP NULL,
        updated_at TIMESTAMP NULL,
        deleted_at TIMESTAMP NULL,
        PRIMARY KEY (id))`
    );
    await conexion.query(
      `INSERT INTO historiales (cantidad, id_bodega_origen, id_bodega_destino, id_inventario, created_by, updated_by, created_at, updated_at, deleted_at)
      VALUES(10, 1, 2, 1, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null)`
    );
    await conexion.query(
      `INSERT INTO historiales (cantidad, id_bodega_origen, id_bodega_destino, id_inventario, created_by, updated_by, created_at, updated_at, deleted_at)
      VALUES(10, 1, 2, 2, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null)`
    );
    await conexion.query(
      `INSERT INTO historiales (cantidad, id_bodega_origen, id_bodega_destino, id_inventario, created_by, updated_by, created_at, updated_at, deleted_at)
      VALUES(10, 1, 2, 3, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null)`
    );
    await conexion.query(
      `INSERT INTO historiales (cantidad, id_bodega_origen, id_bodega_destino, id_inventario, created_by, updated_by, created_at, updated_at, deleted_at)
      VALUES(10, 1, 2, 4, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null)`
    );
    await conexion.query(
      `INSERT INTO historiales (cantidad, id_bodega_origen, id_bodega_destino, id_inventario, created_by, updated_by, created_at, updated_at, deleted_at)
      VALUES(10, 1, 2, 5, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null)`
    );

    console.log('Database Historiales seeded successfully');
  } catch (error) {
    console.log(error);
  }
};

const seedInventarios = async () => {
  try {
    await conexion.query('DROP TABLE IF EXISTS inventarios');
    await conexion.query(
      `CREATE TABLE inventarios (
        id INT NOT NULL AUTO_INCREMENT,
        id_bodega INT NOT NULL,
        id_producto INT NOT NULL,
        cantidad INT NOT NULL,
        created_by INT NULL,
        updated_by INT NULL,
        created_at TIMESTAMP NULL,
        updated_at TIMESTAMP NULL,
        deleted_at TIMESTAMP NULL,
        PRIMARY KEY (id))`
    );
    await conexion.query(
      `INSERT INTO inventarios (id_bodega, id_producto, cantidad, created_by, updated_by, created_at, updated_at, deleted_at)
      VALUES(1, 1, 10, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null)`
    );
    await conexion.query(
      `INSERT INTO inventarios (id_bodega, id_producto, cantidad, created_by, updated_by, created_at, updated_at, deleted_at)
      VALUES(2, 2, 10, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null)`
    );
    await conexion.query(
      `INSERT INTO inventarios (id_bodega, id_producto, cantidad, created_by, updated_by, created_at, updated_at, deleted_at)
      VALUES(3, 3, 10, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null)`
    );
    await conexion.query(
      `INSERT INTO inventarios (id_bodega, id_producto, cantidad, created_by, updated_by, created_at, updated_at, deleted_at)
      VALUES(4, 4, 10, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null)`
    );
    await conexion.query(
      `INSERT INTO inventarios (id_bodega, id_producto, cantidad, created_by, updated_by, created_at, updated_at, deleted_at)
      VALUES(1, 5, 10, 1, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00', null)`
    );
    console.log('Database Inventarios seeded successfully');
  } catch (error) {
    console.log(error);
  }
};

module.exports = [seedUsers, seedBodegas, seedProductos, seedHistoriales, seedInventarios];
