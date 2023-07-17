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

UTILIZADO REPOSITORIO PARA O FRONTEND
    https://gitlab.com/escoladejavascript.com/todo-list-html/?_gl=1%2a19eyv22%2a_ga%2aMTE1MzA0MC4xNjYzMTg5NDAy%2a_ga_37GXT4VGQK%2aMTY4Nzk4NDU0Mi4xOTcuMS4xNjg3OTg0NTc0LjAuMC4w

UTILIZAR ARQUIVOS ESTATICOS
    app.use(express.static(path.join(__dirname, 'public')));

    Criado pasta 'public' > 'stylesheets'

PARTIALS
    Partial -> Ferramenta do EJS que permmite 'fracionar' partes do conteudo
    
    Foi fracionado o conteudo do index.ejs
        Utilizando <%- ('pathTarget') %>

PACOTE MethodOverride
    Pacote que lê atributo na requisição e transforma a Chamada

    > npm i method-override --save