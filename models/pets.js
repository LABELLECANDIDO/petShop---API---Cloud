const mongoose = require('mongoose');

// Criar schema para o objeto do array
const pet = new mongoose.Schema({
  name: String,
  age: Number,
});

// Criar schema principal com array de objetos
const cliente = new mongoose.Schema({
  name: String,
  pets: [pet], // Array de objetos do tipo userSchema
});

// Criar e exportar o modelo
const Cliente = mongoose.model('Cliente', cliente);
