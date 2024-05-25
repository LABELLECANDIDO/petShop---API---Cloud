require('dotenv').config();
const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {})
    .then(() => {
        console.log('Conectado ao MongoDB');
    })
    .catch(err => {
        console.error('Erro ao conectar ao MongoDB', err);
    });

module.exports = mongoose;
