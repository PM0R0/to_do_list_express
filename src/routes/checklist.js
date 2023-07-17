//Organizando rotas
const express = require('express');
const Checklist = require('../models/checklist');
const router = express.Router(); //Ferramenta do express | Permite criar rotas entre arquivos

//Chamada GET
    /* Pesquisar todas as checklists */
router.get('/', async (req,res) => {
   try {
    let checklists = await Checklist.find({});
    res.status(200).render('checklists/index', {checklists: checklists})
   } catch (error) {
    res.status(500).render('pages/error', {error: 'erro ao exibir as Listas.'});
   }
})

router.get('/new', async(req,res) => {
    try{
        let checklist = new Checklist();
        res.status(200).render('checklists/new', {checklist: checklist});
    } catch(err) {
        res.status(500).render('pages/error', {errors: "Erro ao carregar o formulario"});
    }
})

router.get('/:id/edit', async(req,res) => {
    try {
        let checklist = await Checklist.findById(req.params.id);
        res.status(200).render('checklists/edit', { checklist: checklist })
    } catch (error) {
        res.status(500).render('pages/error', {errors: "Erro ao exibir a edição"});
    }
})

//Parametros nas rotas
    /* Pesquisar checklist por id */
router.get('/:id', async (req,res) => {
    try {
        let checklist = await Checklist.findById(req.params.id).populate('tasks');// aggregate
        res.status(200).render('checklists/show', {checklist: checklist})
    } catch (error) {
        res.status(422).render('pages/error', {error: 'Erro ao exibir as Listas'});
    }
})

//Chamada POST
        /* Inserção de nova tarefa */
router.post('/',async (req,res) => {
    let {name} = req.body.checklist;
    let checklist = new Checklist({name})

    try {
        await checklist.save();
        res.redirect('/checklists') //Mensagens numericas padrões Ex:404
    } catch (error) {
        res.status(422).render('checklists/new', {checklists: {...checklist, error}})
    }
})

//PUT
    /* Atualizar checklist */
router.put('/:id', async (req,res) => {
    let { name } = req.body.checklist;
    let checklist = await Checklist.findById(req.params.id);

    try {
        await checklist.updateOne({name});//Corrigido da Aula
        res.redirect('/checklists');
    } catch (error) {
        let errors = error.errors;
        res.status(422).render('checklists/edit', { checklist: { ...checklist,errors } });
    }
})

//DELETE
    /* Deletar checlist pelo id */
router.delete('/:id', async (req,res) => {
    try {
        const checklist = await Checklist.findByIdAndRemove(req.params.id);
        res.redirect('/checklists');
    } catch (error) {
        res.status(422).render('checklists/edit', { error: 'Erro ao deletar a Lista de tarefas' });
    }
})

module.exports = router;