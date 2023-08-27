const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const description = Joi.string().min(3).max(300);
const estado = Joi.number().integer();
const created_by = Joi.number().integer(11);
const updated_by = Joi.number().integer(11);
const created_at = Joi.date().timestamp();
const updated_at = Joi.date().timestamp();
const deleted_at = Joi.date().timestamp();

const createProductSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  estado: estado.required(),
  created_by: created_by.required(),
  created_at: created_at.required(),
  updated_by: updated_by.required(),
  updated_at: updated_at.required(),
  deleted_at: deleted_at.required(),
});

const updateProductSchema = Joi.object({
  id : id.required(),
  name: name,
  description: description,
  estado: estado,
  created_by: created_by,
  created_at: created_at,
  updated_by: updated_by,
  updated_at: updated_at,
  deleted_at: deleted_at,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
