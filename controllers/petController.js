const Pet = require('../models/Pet');

class PetController {
    // Método para criar um novo 
    async store(req, res) {
        try {
            const data = await Pet.create(req.body);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    // Método para obter todos os pets
    async getAll(req, res) {
        try {
            const data = await Pet.find();
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Método para obter um pet pelo ID
    async getById(req, res) {
        try {
            const data = await Pet.findById(req.params.id);
            if (!data) {
                return res.status(404).json({ error: 'Pet não encontrado' });
            }
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Método para atualizar um pet pelo ID
    async update(req, res) {
        try {
            const data = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!data) {
                return res.status(404).json({ error: 'Pet não encontrado' });
            }
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    // Método para deletar um pet pelo ID
    async delete(req, res) {
        try {
            const data = await Pet.findByIdAndDelete(req.params.id);
            if (!data) {
                return res.status(404).json({ error: 'Pet não encontrado' });
            }
            return res.status(200).json({ message: 'Pet deletado com sucesso' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new PetController();


