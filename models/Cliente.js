const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const clienteSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    email: String,
    endereco: {
        rua: String,
        bairro: String,
        cidade: String
    },
    telefone: String,
    // Adicionando uma relação com os animais de estimação
    pets: [{
        type: Schema.Types.ObjectId,
        ref: 'Pet'
    }]
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;

