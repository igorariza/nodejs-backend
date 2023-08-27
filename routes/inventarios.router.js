const express = require('express');
const conexion = require('../server/dbconfig');
const validatorHandler = require('../middlewares/validator.handler');
var {
  createInventariosSchema,
} = require('../schemas/inventarios.schema');

const router = express.Router();

// Realizar un EndPoint que permita insertar registros en la tabla
// de Inventarios, los parámetros de entrada deben ser
// (id_producto, id_bodega, cantidad).
// ● La tabla no puede repetir la combinación de Bodega /
// Producto Por lo tanto será necesario validar si el ingreso
// que se está realizado ya existe o es una combinación
// totalmente nueva.
// ● Si es una combinación totalmente nueva, se debe hacer
// un Insert, considerando los datos ingresados.
// ● Si es una combinación existente, entonces se debe
// hacer un Update a este registro, considerando la suma
// de la cantidad existente con la cantidad nueva.
router.post('/', async (req, res) => {
  validatorHandler(createInventariosSchema, 'body'),
    (createInventariosSchema = req.body);
  createInventariosSchema.created_at = new Date();
  createInventariosSchema.updated_at = new Date();
  createInventariosSchema.deleted_at = new Date();
  conexion.query(
    'SELECT COUNT(*) FROM admin.inventarios WHERE id_producto = ? AND id_bodega = ?',
    [createInventariosSchema.id_producto, createInventariosSchema.id_bodega],
    (error, results) => {
      if (error) {
        console.log('error: ', error);
        throw error;
      }
      if (results[0]['COUNT(*)'] > 0) {
        conexion.query(
          'UPDATE admin.inventarios SET cantidad = cantidad + ? WHERE id_producto = ? ' +
            'AND id_bodega = ?',
          [
            createInventariosSchema.cantidad,
            createInventariosSchema.id_producto,
            createInventariosSchema.id_bodega,
          ],
          (error) => {
            if (error) {
              console.log('error: ', error);
              throw error;
            }
          }
        );
        res.status(200).json('Actualizado con Exito');
      } else {
        conexion.query(
          'INSERT INTO admin.inventarios SET ?',
          createInventariosSchema,
          (error) => {
            if (error) {
              console.log('error: ', error);
              throw error;
            }
          }

        );
        console.log('Insertado con Exito'),
        res.status(200).json('Insertado con Exito');
      }
    }
  );
});


module.exports = router;
