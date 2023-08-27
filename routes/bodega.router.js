const express = require('express');
const conexion = require('../server/dbconfig');

const validatorHandler = require('../middlewares/validator.handler');
var { createBodegaSchema } = require('../schemas/bodega.schema');
var { createHistorialesSchema } = require('../schemas/historiales.schema');

const router = express.Router();

router.get('/', async (req, res) => {
  conexion.query(
    'SELECT * FROM bodegas ORDER BY name ASC',
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results);
    }
  );
});

//Modelo de insercion de datos
// {
//   "name" : "ABodega 6",
//   "id_responsable": 1,
//   "estado" : 1,
//   "created_by": 1,
//   "updated_by": 1,
//   "created_at": "",
//   "updated_at": "",
//   "deleted_at": ""
// }
router.post('/', async (req, res) => {
  validatorHandler(createBodegaSchema, 'body'), (createBodegaSchema = req.body);
  createBodegaSchema.created_at = new Date();
  createBodegaSchema.updated_at = new Date();
  createBodegaSchema.deleted_at = new Date();
  conexion.query(
    'INSERT INTO bodegas SET ?',
    createBodegaSchema,
    (error, results) => {
      if (error) {
        console.log('error: ', error);
        throw error;
      }
      res.status(201).json(results);
    }
  );
});

// Realizar un EndPoint que permita Trasladar un producto de una bodega a otra
// ● Se debe validar que la cantidad de unidades que se pretende
// sacar de una Bodega, sea posible, ya que si tengo 10 unidades
// en la Bodega A, no podré sacar de ella 20 unidades. Esta acción
// debe generar una alerta e impedir el registro.
// ● Para la afectación de las tablas se debe considerar que del
// Origen debo restar la cantidad, y al destino le debo sumar la
// cantidad. Por ejemplo: Bodega A = 10 unidades. Bodega B = 10
// unidades. Haré el traslado de 5 unidades desde la Bodega A para
// la Bodega B, Por lo cual el resultado será hacer Updated a los
// dos registros en Inventarios:
// Bodega A = 5 unidades. Bodega B = 15 unidades. Además hacer
// un Insert con toda la información en la tabla de Historiales
router.patch('/traslado', async (req, res) => {
  createHistorialesSchema = req.body;
  conexion.query(
    'SELECT * FROM inventarios WHERE id_producto = ? AND id_bodega = ?',
    [createHistorialesSchema.id_producto, createHistorialesSchema.id_bodega_origen],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (results[0].cantidad < createHistorialesSchema.cantidad) {
        res.status(200).json('No hay suficientes unidades en la bodega');
      } else {
        conexion.query(
          'UPDATE inventarios SET cantidad = cantidad - ? WHERE id_producto = ? AND id_bodega = ?',
          [createHistorialesSchema.cantidad, createHistorialesSchema.id_producto, createHistorialesSchema.id_bodega_origen],
          (error) => {
            if (error) {
              throw error;
            }
            conexion.query(
              'UPDATE inventarios SET cantidad = cantidad + ? WHERE id_producto = ? AND id_bodega = ?',
              [createHistorialesSchema.cantidad, createHistorialesSchema.id_producto, createHistorialesSchema.id_bodega_destino],
              (error) => {
                if (error) {
                  throw error;
                }
              }
            );
            createHistorialesSchema = req.body;
            createHistorialesSchema.updated_at = new Date();
            console.log("createHistorialesSchema: ", createHistorialesSchema);
            const { cantidad, id_bodega_origen, id_bodega_destino, id_inventario, created_by, updated_by, updated_at } = createHistorialesSchema;
            conexion.query(
              'INSERT INTO historiales (cantidad, id_bodega_origen, id_bodega_destino, id_inventario, created_by, updated_by, updated_at) ' +
              ' VALUES(?, ?, ?, ?, ?, ?, ?)', [cantidad, id_bodega_origen, id_bodega_destino, id_inventario, created_by, updated_by, updated_at],
              (error) => {
                if (error) {
                  throw error;
                }
              }
            );
            res.status(200).json(
              {
                "response": "Se realizo el traslado correctamente"
              }
            );
          }
        );

      }
    }
  );
});

module.exports = router;
