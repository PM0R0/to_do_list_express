const mongoose = require('mongoose');

/* Schema() ->  Estrutura da collection*/

const taskSchema = mongoose.Schema({
    name: {type: String, required: true},
    done: {type: Boolean, default: false},
    checklist: { //Referencia
        type: mongoose.Schema.Types.ObjectId,
        ref: "Checklist",
        required: true
    }
})

/* model(Nome do model, nome do Schema) */
module.exports = mongoose.model('Task', taskSchema);