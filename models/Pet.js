const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Definindo Schema a partir do mongoose

const petSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    especie: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    cor: {
        type: String,
        required: true
    },
    // Adicionando uma referência ao cliente
    dono: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    }
}, {
    versionKey: false // Define a opção versionKey como false para remover o campo __v
});
const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
