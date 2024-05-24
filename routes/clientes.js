const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");

// Rota para criar um novo cliente
router.post('/', clienteController.create);

// Rota para obter todos os clientes
router.get('/', clienteController.getAll);

// Rota para obter um cliente pelo ID
router.get('/:id', clienteController.getById);

// Rota para atualizar um cliente pelo ID
router.put('/:id', clienteController.update);

// Rota para deletar um cliente pelo ID
router.delete('/:id', clienteController.delete);

module.exports = router;
