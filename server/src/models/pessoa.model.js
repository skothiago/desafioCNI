const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const pessoaSchema = mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email invalido');
        }
      },
    },
    sexo: {
      type: String,
      required: true,
    },
    dtNasc: {
      type: Date,
      required: true,
    },
    fone: {
      type: String,
      required: true,
    },
    fraseMotiv: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
pessoaSchema.plugin(toJSON);
pessoaSchema.plugin(paginate);

/**
 * @typedef User
 */
const Pessoa = mongoose.model('Pessoa', pessoaSchema);

module.exports = Pessoa;
