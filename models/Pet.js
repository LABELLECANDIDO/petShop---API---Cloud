const mongoose = require('mongoose');

// Criar schema para o objeto do array
const pet = new mongoose.Schema({
  nome: String,
  idade: Number,
  especie: String,
  cor: String,
  raca: String
});

// Criar schema principal com array de objetos
const cliente = new mongoose.Schema({
  nome: String,
  idade: Number,
  email: String,
  telefone: String,
  cpf: String,
  rua: String,
  bairro: String,
  pets: [pet] // Array de objetos do tipo userSchema
});

// Criar e exportar o modelo
const Cliente = mongoose.model('Cliente', cliente);

module.exports = Cliente;