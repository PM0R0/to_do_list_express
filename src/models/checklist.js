const mongoose = require('mongoose');

/* Schema() ->  Estrutura da collection*/

const checklistSchema = mongoose.Schema({
    name: {type: String, required: true},
    tasks: [{
        type: mongoose.Schema.Types.ObjectId, /* Relaciona a tasks com o model Task criado em task.js */
        ref:'Task'
    }]
})

/* model(Nome do model, nome do Schema) */
module.exports = mongoose.model('Checklist', checklistSchema);