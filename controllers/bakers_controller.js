const express = require('express');
const baker = express.Router();
const Baker = require('../models/baker');
const BakerSeeder = require('../models/baker_seed');

// INDEX
baker.get('/', (req, res) => {
    Baker.find()
        .populate('breads')
        .then(foundBakers => {
            res.send(foundBakers);
        })
        .catch(err => {
            console.log(err);
        });
});

baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate('breads')
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            });
        })
        .catch(err => {
            console.log(err);
        });
});

// SEEDER
baker.get('/data/seed', (req, res) => {
    Baker.insertMany(BakerSeeder)
        .then(bakerSeederData => {
            res.redirect(200, '/breads');
        })
        .catch(err => {
            console.log(err);
            res.render('404')
        });
});

module.exports = baker