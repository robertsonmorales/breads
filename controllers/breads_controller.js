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
    res.send(Bread[req.params.arrayIndex]);
});

module.exports = breads;