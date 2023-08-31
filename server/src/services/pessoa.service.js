const httpStatus = require('http-status');
const { Pessoa } = require('../models');
const ApiError = require('../utils/ApiError');

const createPessoa = async (userBody) => {
  const existePessoa = await Pessoa.findOne({ email:  userBody.email} );

  if(existePessoa){

    throw new ApiError(httpStatus.BAD_REQUEST, 'Email já existe');
  }
  return Pessoa.create(userBody);
};
const getPessoaById = async (id) => {
  return Pessoa.findById(id);
};

const updatePessoaById = async ( updateBody) => {
  const pessoa = await getPessoaById(updateBody.pessoaId);

  if (!pessoa) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Pessoa não encontrada');
  }

  Object.assign(pessoa, updateBody);
  await pessoa.save();
  return pessoa;
};

const deletePessoaById = async (userId) => {
  const user = await getPessoaById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Pessoa não encontrada');
  }
  await user.remove();
  return user;
};

module.exports = {
  createPessoa,
  getPessoaById,
  updatePessoaById,
  deletePessoaById
};
