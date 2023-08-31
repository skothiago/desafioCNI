const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { pessoaService } = require('../services');

const register = catchAsync(async (req, res) => {
  const user = await pessoaService.createPessoa(req.body)
  res.status(httpStatus.CREATED).send(user);
});

const getPessoa = catchAsync(async (req, res) => {
  const user = await pessoaService.getPessoaById(req.body.pessoaId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updatePessoa = catchAsync(async (req, res) => {
  console.log(req.body)
  const user = await pessoaService.updatePessoaById( req.body);
  console.log(user)
  res.send(user);
});

const deletePessoa = catchAsync(async (req, res) => {
  await pessoaService.deletePessoaById(req.body.pessoaId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  register,
  getPessoa,
  updatePessoa,
  deletePessoa
};
