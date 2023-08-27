const Joi = require('joi');

const id = Joi.number().integer();
const id_bodega = Joi.number().integer(11);
const id_producto = Joi.number().integer(11);
const cantidad = Joi.number().integer(11);
const created_by = Joi.number().integer(11);
const updated_by = Joi.number().integer(11);
const created_at = Joi.date().timestamp();
const updated_at = Joi.date().timestamp();
const deleted_at = Joi.date().timestamp();

const createInventariosSchema = Joi.object({
  id_bodega: id_bodega.required(),
  id_producto: id_producto.required(),
  cantidad: cantidad.required(),
});

const updateInventariosSchema = Joi.object({
  id : id.required(),
  id_bodega: id_bodega,
  id_producto: id_producto,
  cantidad: cantidad,
  created_by: created_by,
  created_at: created_at,
  updated_by: updated_by,
  updated_at: updated_at,
  deleted_at: deleted_at,
});

const getInventariosSchema = Joi.object({
  id: id.required(),
  id_bodega: id_bodega.required(),
  id_producto: id_producto.required(),
});

module.exports = { createInventariosSchema, updateInventariosSchema, getInventariosSchema }
