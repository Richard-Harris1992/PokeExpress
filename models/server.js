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

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
    res.render('Index', {poke : pokemon});
});

app.listen(port, () => console.log('3000'))