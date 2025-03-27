const express = require('express');
const conexion = require('../server/dbconfig');
const validatorHandler = require('../middlewares/validator.handler');
var {
  createInventariosSchema,
} = require('../schemas/inventarios.schema');

const router = express.Router();

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
