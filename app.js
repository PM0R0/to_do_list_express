const express = require('express'); //Importa o express
const path = require('path');

//Rotas
const checkListRouter = require('./src/routes/checklist');
const taskRouter = require('./src/routes/task');

const rootRouter = require('./src/routes/index');
const methodOverride = require('method-override');

require('./config/database');

/* MIDDLEWARES */
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true})); //Middleware para requisições 'form'
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname,'src/views'));
app.set('view engine', 'ejs');

app.use('/', rootRouter)
app.use('/checklists', checkListRouter); //Utilizando o modulo como um middleware
app.use('/checklists', taskRouter.checklistDepedent);
app.use('/tasks', taskRouter.simple);

/*
        PRATICA COM EXPRESS 
//Middleware
app.use(express.json());

const log = (req,res,next) => {
    console.log(req.body); //
    console.log(`Data: ${Date.now()}`);
    next(); // Passa para o proximo middleware
}

app.use(log);

//Resposta
app.get('/',(req,res) => { //set das rotas
    res.send('<h1>Minha Lista de Tarefas</h1>')
})

//Devolvendo uma resposta em formato JSON
    //Na URL utilizar o /json para obter a resposta do servidor
app.get('/json', (req,res) => {
    console.log(req.body);
    res.json({title: 'Tarefa X', done: true});
})
*/
app.listen(3000, () => { //Escuta porta 3000
    console.log('Servidor foi Iniciado na porta 3000');
})

/*Para iniciar utilize npx nodemon 
    Instalado nodemon -> Servidor de desenvolvimento que monitora os arquivos
        npm i nodemon --save-dev

        Executado via npx nodemon
*/