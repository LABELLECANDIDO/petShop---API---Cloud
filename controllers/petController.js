const Pet = require('../models/pets');

class PetController {
    async store(req, res){
        const data = await Pet.create(req.body);

        return res.status(200).json(data);
    }

    // async getAll(req, res){
    //     const data = await Comida.find({nome:"xerem"});

    //     return res.status(200).json(data);

    // }

    // async delete(req, res) {
    //     const id = req.params.id;
    //     const DeletarComida = await Comida.findByIdAndDelete(id);
    //     return res.status(200).json(DeletarComida);
    // }

    // async update(req, res) {
    //     const id = req.params.id;
    //     const AtualizarComida = await Comida.findByIdAndUpdate(id);
    //     return res.status(200).json(AtualizarComida);
    // }

}

module.exports = new PetController();