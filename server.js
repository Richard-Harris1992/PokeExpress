require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT||3000;
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon');
const MONGO_URI = process.env.MONGO_URI;

const db = mongoose.connection;
// Set up Express Middleware
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
db.once('open', ()=> {
    console.log('Connected to MongoDB')
})
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})
mongoose.set('strictQuery', true);

// Connection Error/Success -- Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: "))
db.on("close", () => console.log("mongo disconnected"))

app.use(express.urlencoded({extended: false}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!' );
});

app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (err, pokemonItems) => {
    res.render('Index', { pokemon : pokemonItems});
    });
});

app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.render('Show', {pokemon: foundPokemon});
    });
});

app.post('/pokemon/', (req, res) => { 
    Pokemon.create(req.body, (err, createdPokemon) => {
      res.redirect('/pokemon');  
    })
    
});

app.listen(port, () => console.log('3000'))