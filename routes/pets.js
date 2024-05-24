const express = require("express");
const router = express.Router();
const petController = require("../controllers/petController");

// Rota para criar um novo pet
router.post('/', petController.store);

// Rota para obter todos os pets
router.get('/', petController.getAll);

// Rota para obter um pet pelo ID
router.get('/:id', petController.getById);

// Rota para atualizar um pet pelo ID
router.put('/:id', petController.update);

// Rota para deletar um pet pelo ID
router.delete('/:id', petController.delete);

module.exports = router;


