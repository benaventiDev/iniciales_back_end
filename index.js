
import express from 'express'
//npm install cors --save 
import cors from 'cors'
import bodyParser from 'body-parser'


import {test, estudiantes} from './students.js'



const app = express();
app.use(cors({
    origin:'*'
}));
app.use(bodyParser.json());


app.listen(5000, ()=>{
    
});


app.post('/', (req, res)=>{
    estudiantes.push(req.body);
    res.json(estudiantes);
    res.end();
})

app.get('/', (req, res)=>{
    res.send('Hola');
    res.end();
});


app.get('/about', (req, res)=>{
    res.send('about');
    res.end();
});



app.get('/estudiantes', (req, res)=>{
    //test();
    res.json(estudiantes);
    res.end();
});



app.all('*', (req, res)=>{
    res.status(404).send('<h1>Pagina no encontrada</h1>');
})


/*
import http from 'http'
const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end("<h1>Hello from NodeJS</h1>");
    }
    if(req.url ==='/about'){
        res.end("<h1>About</h1>");
    }
});

server.listen(5000, ()=>{
    console.log('Listening on port 5000')
});
*/




