const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/diego', (req,res) => {res.send("Hello Diego")});

app.listen(port, ()=>console.log("Listening"));