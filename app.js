const express = require('express'); //Importa o express
const checkListRouter = require('./src/routes/checklist');


const app = express();
app.use(express.json());

app.use('/checklist', checkListRouter); //Utilizando o modulo como um middleware

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
    console.log('Servidor foi Iniciado');
})

/*
    Instalado nodemon -> Servidor de desenvolvimento que monitora os arquivos
        npm i nodemon --save-dev

        Executado via npx nodemon
*/