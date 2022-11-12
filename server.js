const express = require("express");

// * configuration
require("dotenv").config();
const PORT = process.env.PORT;
let app = express();

app.get('/', (req, res) => {
    res.send("This is the index route");
});

app.use('/breads', require('./controllers/breads_controller'));

app.listen(PORT, (req, res) => {
    console.log("Listening to PORT", PORT)    
})