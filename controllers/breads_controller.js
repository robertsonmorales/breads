const React = require('react');
const express = require("express");
const breads = express.Router();

const Bread = require('../models/bread');

breads.get('/', (req, res) => {
    res.render("index", {
        breads: Bread,
        title: 'Index page'
    });
});

breads.get('/:arrayIndex', (req, res) => {
    if(Bread[req.params.arrayIndex]){
        res.render('show', {
            bread: Bread[req.params.arrayIndex]
        });
    }else{
        res.send('404');
    }
});

module.exports = breads;