const express = require('express');
const conexion = require('../server/dbconfig');
const validatorHandler = require('./../middlewares/validator.handler');
var {
  createProductSchema,
} = require('./../schemas/product.schema');

const router = express.Router();

router.get('/listallproduct', async (req, res) => {
  conexion.query(
    'SELECT c.id_bodega, r.name, c.id_producto, f.name, SUM(c.cantidad) total ' +
      'FROM admin.inventarios c INNER JOIN admin.productos f ON c.id_producto = f.id ' +
      'INNER JOIN admin.bodegas r ON c.id_bodega = r.id GROUP BY c.id_bodega ' +
      'ORDER BY total DESC;',
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results);
    }
  );
});

router.post('/', async (req, res) => {
  validatorHandler(createProductSchema, 'body'),
    (createProductSchema = req.body);
  createProductSchema.created_at = new Date();
  createProductSchema.updated_at = new Date();
  createProductSchema.deleted_at = new Date();
  conexion.query(
    'INSERT INTO productos SET ?',
    createProductSchema,
    (error, results) => {
      if (error) {
        console.log('error: ', error);
        throw error;
      }
      let insertId = results.insertId;
      let inventario = {
        id_bodega: 1,
        id_producto: insertId,
        cantidad: 100,
        created_by: 1,
        updated_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
      };
      conexion.query(
        'INSERT INTO inventarios SET ?',
        inventario,
        (error, results) => {
          if (error) {
            console.log('error: ', error);
            throw error;
          }
          console.log('Inventario creado', results);
        }
      );

      res.status(200).json(results);
    }
  );
});



module.exports = router;
