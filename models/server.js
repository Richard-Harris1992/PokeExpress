const express = require('express');
const pokemon = require('./pokemon');
const app = express();
const port = 3000;

//Index
//New
//Delete
//Update
//Create
//Edit
//Show

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
    res.send(pokemon);
});

app.listen(port, () => console.log('3000'))