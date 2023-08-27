const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const id_responsable = Joi.number().integer();
const estado = Joi.number().integer();
const created_by = Joi.number().integer();
const updated_by = Joi.number().integer();
const created_at = Joi.date().timestamp();
const updated_at = Joi.date().timestamp();
const deleted_at = Joi.date().timestamp();

const createBodegaSchema = Joi.object({
  name: name.required(),
  id_responsable: id_responsable.required(),
  estado: estado.required(),
});

const updateBodegaSchema = Joi.object({
  name: name,
  id_responsable: id_responsable,
  estado: estado,
  created_by: created_by,
  created_at: created_at,
  updated_by: updated_by,
  updated_at: updated_at,
  deleted_at: deleted_at,
});

const getBodegaSchema = Joi.object({
  id: id.required(),
});

module.exports = { createBodegaSchema, updateBodegaSchema, getBodegaSchema }
