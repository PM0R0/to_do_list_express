const express = require('express'); //Importa o express

const app = express();

app.get('/',(req,res) => { //set das rotas
    res.send('<h1>Minha Lista de Tarefas</h1>')
})

app.listen(3000, () => { //Escuta porta 3000
    console.log('Servidor foi Iniciado');
})

/*
    Instalado nodemon -> Servidor de desenvolvimento que monitora os arquivos
        npm i nodemon --save-dev

        Executado via npx nodemon
*/