const express = require("express");
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;
const connectionString = process.env.MONGO_URI;
// * MONGODB
mongoose.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err) => {
    if(err){
        console.log('error in connection')
    }else {
        console.log('connected to ' + process.env.MONGO_URI)
    }
});

// * MIDDLEWARE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


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