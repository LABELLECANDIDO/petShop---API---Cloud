const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("./database");

const petRoutes = require("./routes/pets");
const clienteRoutes = require("./routes/clientes");

const app = express();

// Middleware para parsing de JSON
app.use(bodyParser.json());


app.use('/pets', petRoutes);


app.use('/clientes', clienteRoutes);

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        res.status(400).json(err);
    } else {
        res.status(500).json(err);
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});




