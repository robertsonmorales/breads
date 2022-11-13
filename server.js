const express = require("express");

// * CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
let app = express();

app.get('/', (req, res) => {
    res.send("This is the index route");
});

app.use('/breads', require('./controllers/breads_controller'));

// * MIDDLEWARE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.listen(PORT, (req, res) => {
    console.log("Listening to PORT", PORT)    
})