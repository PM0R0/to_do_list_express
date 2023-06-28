Mongoose -> Software que conecta o Node com o Mongo atraves do express

    Instalação:
        npm install mongoose --save

Necessario criar pasta config para configuração e arquivo database.js

config utilizada
    const mongoose = require('mongoose');
    mongoose.Promise = global.Promise; //Configuração padrão

    mongoose.connect('mongodb://localhost/todo-list', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Conectado ao MongoDb'))
    .catch((err) => console.log(err));

No arquivo js principal importar a config 
    require('./config/database');


USO DO MONGOOSE

    Criado pasta models em src, e adicionado as collections checklist.js e task.js
    

INSTALAÇÃO DO EJS
    npm i ejs