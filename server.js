const express = require("express");

// * CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
let app = express();

// * MIDDLEWARE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// * ROUTES
app.get('/', (req, res) => {
    res.send("This is the index route");
});

app.use('/breads', require('./controllers/breads_controller'));

app.get('*', (req, res) => {
    res.render('404');
});
// * ENDS HERE

app.listen(PORT, (req, res) => {
    console.log("Listening to PORT", PORT)    
})