const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { pessoaService } = require('../services');

const register = catchAsync(async (req, res) => {
  const user = await pessoaService.createPessoa(req.body)
  res.status(httpStatus.CREATED).send(user);
});

const getPessoa = catchAsync(async (req, res) => {
  const pessoas = await pessoaService.getAll();
  res.send(pessoas);
});

const updatePessoa = catchAsync(async (req, res) => {
  const user = await pessoaService.updatePessoaById( req.body);
  res.send(user);
});

const deletePessoa = catchAsync(async (req, res) => {
  await pessoaService.deletePessoaById(req.params.pessoaId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  register,
  getPessoa,
  updatePessoa,
  deletePessoa
};
