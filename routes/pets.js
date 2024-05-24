const express = require("express");
const router = express.Router();
const PetController = require("../controllers/petController");

// Rota para criar um novo pet
router.post('/', PetController.createPet);

// Rota para obter todos os pets
router.get('/', PetController.getAllPets);

// Rota para obter um pet pelo ID
router.get('/:id', PetController.getPetById);

// Rota para atualizar um pet pelo ID
router.put('/:id', PetController.updatePet);

// Rota para deletar um pet pelo ID
router.delete('/:id', PetController.deletePet);

module.exports = router;



