const express = require('express');
const validate = require('../../middlewares/validate');
const pessoaValidation = require('../../validations/pessoa.validation');
const { pessoaController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(validate(pessoaValidation.register), pessoaController.register)
  .get( pessoaController.getPessoa);

router
  .route('/:pessoaId')
  .put(validate(pessoaValidation.updatePessoa), pessoaController.updatePessoa)
  .delete(validate(pessoaValidation.deletePessoa), pessoaController.deletePessoa);

module.exports = router;
