const React = require('react');
const express = require("express");
const breads = express.Router();

const Bread = require('../models/bread');

// * Index
breads.get('/', (req, res) => {
    Bread.find()
        .then(foundBreads => {
            res.render("index", {
                breads: foundBreads,
                title: 'Index page'
            });
        });

});

// * New
breads.get('/new', (req, res) => {
    res.render('new');
});

// * Show
breads.get('/:id', async (req, res) => {
    await Bread.findById(req.params.id)
        .then(foundBread => {
            res.render('show', {
                bread: foundBread,
                index: req.params.id
            });
        }).catch(err => {
            res.render('404');
        });
});

// * Create
breads.post('/', (req, res) => {
    if(req.body.hasGluten === 'on'){
        req.body.hasGluten = true;
    } else {
        req.body.hasGluten = false;
    }

    Bread.create(req.body);
    res.redirect('/breads');
});

breads.delete('/:indexArray', (req, res) => {
    Bread.splice(req.params.indexArray, 1);
    res.redirect(303, '/breads');
})

module.exports = breads;