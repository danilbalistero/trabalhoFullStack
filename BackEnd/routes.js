const express = require('express');
const pessoaController = require('./controllers/PessoaController');

const router = express.Router();

router.post('/pessoa', pessoaController.createPessoa);
router.get('/pessoa', pessoaController.getAllPessoas);
router.get('/pessoa/:id', pessoaController.getPessoaById);
router.put('/pessoa/:id', pessoaController.updatePessoa);
router.delete('/pessoa/:id', pessoaController.deletePessoa);

module.exports = router;