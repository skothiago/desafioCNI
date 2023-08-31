const Joi = require('joi');
const { objectId } = require('./custom.validation');

const register = {
  body: Joi.object().keys({
    nome: Joi.string().required(),
    email: Joi.string().required().email(),
    sexo: Joi.string().required(),
    dtNasc: Joi.date().required(),
    fone: Joi.string().required(),
    fraseMotiv: Joi.string().required()
  }),
};
const getPessoa = {
  body: Joi.object().keys({
    pessoaId: Joi.string().custom(objectId),
  }),
};

const updatePessoa = {
  body: Joi.object()
  .keys({
    pessoaId: Joi.string().custom(objectId),
    nome: Joi.string().optional(),
    email: Joi.string().optional().email(),
    sexo: Joi.string().optional(),
    dtNasc: Joi.date().optional(),
    fone: Joi.string().optional(),
    fraseMotiv: Joi.string().optional()
    })
    .min(1),
};

const deletePessoa = {
  body: Joi.object().keys({
    pessoaId: Joi.string().custom(objectId),
  }),
};
module.exports = {
  register,
  getPessoa,
  updatePessoa,
  deletePessoa
};
