const express = require('express');
const router = express.Router();

router.get('/cadastro', (req, res) => {
    console.log('to no cadastro')
    res.render('cadastroAnimais'); 
});

router.post('/cadastro', (req, res) => {
 
});


module.exports = router;