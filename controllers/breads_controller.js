const React = require('react');
const express = require("express");
const breads = express.Router();

const Bread = require('../models/bread');
const BreadSeeder = require('../models/bread_seeder');

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
            console.log(foundBread.getBakedBy());
            
            res.render('show', {
                bread: foundBread,
                index: req.params.id
            });
        }).catch(err => {
            res.render('404');
        });
});

// * EDIT
breads.get('/:id/edit', (req, res) => {
    Bread.findById(req.params.id)
        .then(foundBread => {
            res.render('edit', {
                bread: foundBread
            });
        })
        .catch(err => {
            console.log(err);
            res.render('404')
        })
});

// * UPDATE
breads.put('/:id', (req, res) => {
    if(req.body.hasGluten === 'on'){
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }

    Bread.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
      .then(updatedBread => {
        res.redirect(`/breads/${req.params.id}`) 
      })
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

// * DELETE
breads.delete('/:id', (req, res) => {
    Bread.findByIdAndDelete(req.params.id)
        .then(bread => {
            res.redirect(303, '/breads');
        })
        .catch(err => {
            console.log(err)
            res.render('404')
        });    
});

breads.get('/data/seed', (req, res) => {
    Bread.insertMany(BreadSeeder)
        .then(createdBreads => {
            res.redirect(200, '/breads');
        })
        .catch(err => {
            console.log(err);
            res.render('404');
        })
});

module.exports = breads;