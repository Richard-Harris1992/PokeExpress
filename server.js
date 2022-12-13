require('dotenv').config();
const override = require('method-override')
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon');


app.use(override("_method"));
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})
mongoose.set('strictQuery', true);



app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

//Index
app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (err, pokemonItems) => {
    res.render('Index', { pokemon : pokemonItems});
    });
});

//New
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

//Delete
app.delete('/pokemon/:id', (req, res) => {
    Pokemon.findByIdAndRemove(req.params.id, (err, pokemonToDelete) => {
        res.redirect("/pokemon");
    });
});

//Update
app.put('/pokemon/:id', (req, res) => {
    Pokemon.findByIdAndUpdate(req.params.id, req.body, (err, changes) => {
        res.redirect(`/pokemon/${req.params.id}`);
    });
});

//Create
app.post('/pokemon/', (req, res) => { 
    Pokemon.create(req.body, (err, createdPokemon) => {
      res.redirect('/pokemon');  
    })
});

//Edit
app.get('/pokemon/:id/edit', (req, res) => {
    Pokemon.findById(req.params.id, (err, editPokemon) => {
        res.render("Edit", {pokemon: editPokemon})
    });
});

//Show
app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.render('Show', {pokemon: foundPokemon});
    });
});
app.listen(port, () => console.log('3000'))