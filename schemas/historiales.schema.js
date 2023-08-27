const Joi = require('joi');

const id = Joi.number().integer();
const cantidad = Joi.number().integer(11);
const id_bodega_origen = Joi.number().integer(11);
const id_bodega_destino = Joi.number().integer(11);
const id_inventario = Joi.number().integer(11);
const created_by = Joi.number().integer(11);
const updated_by = Joi.number().integer(11);
const created_at = Joi.date().timestamp();
const updated_at = Joi.date().timestamp();
const deleted_at = Joi.date().timestamp();

const createHistorialesSchema = Joi.object({
  id: id.required(),
  cantidad: cantidad.required(),
  id_bodega_origen: id_bodega_origen.required(),
  id_bodega_destino: id_bodega_destino.required(),
  id_inventario: id_inventario.required(),
  created_by: created_by.required(),
  updated_by: updated_by.required(),
  updated_at: updated_at.required(),
});

const updateHistorialesSchema = Joi.object({
  cantidad: cantidad,
  id_bodega_origen: id_bodega_origen,
  id_bodega_destino: id_bodega_destino,
  id_inventario: id_inventario,
  created_by: created_by,
  created_at: created_at,
  updated_by: updated_by,
  updated_at: updated_at,
  deleted_at: deleted_at,
});

const getHistorialesSchema = Joi.object({
  id: id.required(),
  id_bodega_origen: id_bodega_origen.required(),
  id_bodega_destino: id_bodega_destino.required(),
  id_inventario: id_inventario.required(),
});

module.exports = { createHistorialesSchema, updateHistorialesSchema, getHistorialesSchema }
