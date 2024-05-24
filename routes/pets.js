const express = require("express");
const router = express.Router();

const PetController = require("../controllers/petController");

router.post("/animal",PetController.store);

// routes.get("/animal",ComidaController.getAll);

//Mudar pra cliente depois

module.exports = router;
