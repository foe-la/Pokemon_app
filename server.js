const express = require('express');
const app = express();
const port = 3000;
const jsxEngine = require('jsx-view-engine');


// data
const pokemon = require("./models/pokemon");

// adding view templates
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

// near the top, around other app.use() calls
app.use(express.urlencoded ({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.get('/', function (req, res) {
    res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', function (req, res) {
    res.render('Index', {pokemon: pokemon});
});

app.get('/Index', function (req, res) {
    res.redirect('Index');
});

// New - get the form to add a new pokemon
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

// Create pokemon
app.post('/pokemon/New', (req, res) => {
    pokemon.push(req.body);
    console.log(pokemon);
    res.redirect('/pokemon');
});

app.get('/pokemon/:id', function(req, res){
    res.render('Show', {
        pokemon: pokemon[req.params.id],
    });
});       

app.listen(3000, () => {
    console.log('listening');
});