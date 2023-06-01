//Organizando rotas
const express = require('express');

const router = express.Router(); //Ferramenta do express | Permite criar rotas entre arquivos

//Chamada GET
router.get('/', (req,res) => {
    console.log('Olá');
    res.send();
})

//Parametros nas rotas
router.get('/:id', (req,res) => {
    console.log(req.params.id);
    res.send(`ID: ${req.params.id}`);
})

//Chamada POST
router.post('/', (req,res) => {
    console.log(req.body); //Retorna oque o usuario digitou
    res.status(200).json(req.body); //Mensagens numericas padrões Ex:404
})

//PUT
router.put('/:id', (req,res) => {
    console.log(req.params.id);
    res.send(`PUT ID: ${req.params.id}`);
})

//DELETE
router.delete('/:id', (req,res) => {
    console.log(req.params.id);
    res.send(`DELETE ID: ${req.params.id}`);
})

module.exports = router;