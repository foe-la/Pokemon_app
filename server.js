const express = require('express');
const app = express();
const port = 3000;
const jsxEngine = require('jsx-view-engine');

// data
const pokemon = require("./models/pokemon");

// adding view templates
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

app.get('/pokemon', function (req, res) {
    res.send('Welcome to the Pokemon App!');
});

app.listen(3000, () => {
    console.log('listening');
});