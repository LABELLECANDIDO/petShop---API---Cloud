const mongoose = require("mongoose");
const uri =
"mongodb+srv://dilermandobrito:z3LasUIEi1afuC6h@clusterpetshop.cbih1jk.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPetShop";

mongoose.connect(uri, {})
    .then(() => {
        console.log('Conectado ao MongoDB');
    })
    .catch(err => {
        console.error('Erro ao conectar ao MongoDB', err);
    });

module.exports = mongoose;
