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

app.listen(3000, () => { //Escuta porta 3000
    console.log('Servidor foi Iniciado na porta 3000');
})
