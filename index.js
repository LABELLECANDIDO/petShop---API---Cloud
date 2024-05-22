
const express = require('express');
const app = express();
const fs = require('fs'); 

const port = 3001;

app.set('view engine', 'ejs');

// Define o diretório de visualizações
app.set('views', './views');

// Rota para renderizar a página de cadastro de animais
app.get('/cadastro', (req, res) => {
    res.render('cadastroAnimais');
});


// Função para ler o conteúdo do arquivo JSON
const lerArquivoJSON = (caminhoArquivo) => {
    try {
        // Lê o conteúdo do arquivo
        const animal = fs.readFileSync(caminhoArquivo, 'utf8');
        // Converte o conteúdo para um objeto JavaScript
        return JSON.parse(animal);
    } catch (error) {
        console.error('Erro ao ler o arquivo JSON:', error);
        return null;
    }
};

// Caminho para o arquivo animais.json
const caminhoArquivo = './animais.json';

// Importa a matriz de animais do arquivo JSON
const animais = lerArquivoJSON(caminhoArquivo);

// Rota para '/animais' (GET)
app.get('/animais');

// Inicia o servidor para ouvir na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

