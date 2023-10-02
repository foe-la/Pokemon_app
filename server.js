const express = require('express');
const app = express();
const port = 3000;
const jsxEngine = require('jsx-view-engine');
const mongoose = require("mongoose");
require("dotenv").config();

// method-override
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

//connect to db
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

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

// index route
app.get("/pokemon/", async function (req, res) {
    try {
      const pokemon = await pokemon.find();
      res.render("Index", { pokemon: pokemon });
    } catch (error) {
      console.error(error);
    }
  });

// delete
app.delete("/pokemon/:id", async function (req, res) {
    try {
      await pokemon.findByIdAndRemove(req.params.id);
      res.redirect("/pokemon"); 
    } catch (error) {
      console.log(error);
    }
  });

// New - get the form to add a new pokemon
app.get('/pokemon/new', function (req, res) {
    res.render('New');
});

// Create pokemon
app.post('/pokemon/New', async  function (req, res) {
    try {
    await pokemon.create(req.body);
    res.redirect('/pokemon');
    } catch(error) {
     console.log(pokemon);   
    }
    
});
// show
app.get('/pokemon/:id', async function (req, res){
    try{
        const pokemon = await Pokemon.findById(req.params.id);
    res.render('Show', { pokemon: pokemon });
    } catch (error) {
        console.log(error);
    }
});       

app.listen(3001, () => {
    console.log('listening');
});