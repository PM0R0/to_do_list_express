const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //Configuração padrão

mongoose.connect('mongodb://localhost/todo-list', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Conectado ao MongoDb'))
.catch((err) => console.log(err));