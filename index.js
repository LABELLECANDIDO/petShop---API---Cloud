var url = '/animais/';

const express = require('express');
const app = express();
const fs = require('fs'); // Importa o módulo 'fs' para lidar com o sistema de arquivos

const port = 3001;

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

// Verifica se a importação foi bem-sucedida
if (!animais) {
    console.log('Falha ao importar a matriz de animais.');
    process.exit(1); // Sai do programa se a importação falhar
}

// Rota para '/animais' (GET)
app.get('/animais', (req, res) => {
    console.log('bati no animal');
    res.json(animais); // Retorna a lista de animais em formato JSON
});

// Inicia o servidor para ouvir na porta especificada
app.listen(port, () => {
    console.log('Server is up on port', port);
});

