const React = require('react');
const express = require("express");
const breads = express.Router();

const Bread = require('../models/bread');

// * Index
breads.get('/', (req, res) => {
    res.render("index", {
        breads: Bread,
        title: 'Index page'
    });
});

// * New
breads.get('/new', (req, res) => {
    res.render('new');
});

// * Show
breads.get('/:arrayIndex', (req, res) => {
    if(Bread[req.params.arrayIndex]){
        res.render('show', {
            bread: Bread[req.params.arrayIndex],
            index: req.params.arrayIndex
        });
    }else{
        res.render('404');
    }
});

// * Create
breads.post('/', (req, res) => {
    console.log(req.body);

    if(req.body.hasGluten === 'on'){
        req.body.hasGluten = true;
    } else {
        req.body.hasGluten = false;
    }

    Bread.push(req.body);
    res.redirect('/breads');
});

breads.delete('/:indexArray', (req, res) => {
    Bread.splice(req.params.indexArray, 1);
    res.redirect(303, '/breads');
})

module.exports = breads;