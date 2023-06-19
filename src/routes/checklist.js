//Organizando rotas
const express = require('express');
const Checklist = require('../models/checklist')
const router = express.Router(); //Ferramenta do express | Permite criar rotas entre arquivos

//Chamada GET
    /* Pesquisar todas as checklists */
router.get('/', async (req,res) => {
   try {
    const checklists = await Checklist.find({});
    res.status(200).json(checklists);
   } catch (error) {
    res.status(500).json(error)
   }
})

//Parametros nas rotas
    /* Pesquisar checklist por id */
router.get('/:id', async (req,res) => {
    try {
        const checklist = await Checklist.findById(req.params.id);
        res.status(200).json(checklist);
    } catch (error) {
        res.status(422).json(error);
    }
})

//Chamada POST
        /* Inserção de nova tarefa */
router.post('/',async (req,res) => {
    const {name} = req.body

    try {
        let checklist = await Checklist.create({name})
        res.status(200).json(checklist); //Mensagens numericas padrões Ex:404
    } catch (error) {
        res.status(422).json(error)
    }
})

//PUT
    /* Atualizar checklist */
router.put('/:id', async (req,res) => {
    try {
        const { name } = req.body;
        const checklist = await Checklist.findByIdAndUpdate(req.params.id, {name}, {new: true});
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error);
    }
})

//DELETE
    /* Deletar checlist pelo id */
router.delete('/:id', async (req,res) => {
    try {
        const checklist = await Checklist.findByIdAndRemove(req.params.id);
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router;