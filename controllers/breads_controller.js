const React = require('react');
const express = require("express");
const breads = express.Router();

const Bread = require('../models/bread');
const BreadSeeder = require('../models/bread_seeder');
const Baker = require('../models/baker');

// * Index
// Index:
breads.get('/', (req, res) => {
    Baker.find()
      .then(foundBakers => {
        Bread.find()
        .then(foundBreads => {
            res.render('index', {
                breads: foundBreads,
                bakers: foundBakers,
                title: 'Index Page'
            })
        })
      })
})  

// * New
breads.get('/new', (req, res) => {
    Baker.find()
        .then(foundBaker => {
            res.render('new', {
                bakers: foundBaker
            });
        })
        .catch(err => {
            console.log(err);
        });
});

// * Show
breads.get('/:id', async (req, res) => {
    await Bread.findById(req.params.id)
        .populate('baker')
        .then(foundBread => {
            res.render('show', {
                bread: foundBread
            });
        }).catch(err => {
            res.render('404');
        });
});

// * EDIT
breads.get('/:id/edit', (req, res) => {
    Baker.find()
        .then(foundBakers => {
            Bread.findById(req.params.id)
                .then(foundBread => {
                    res.render('edit', {
                        bread: foundBread,
                        bakers: foundBakers
                    });
                })
                .catch(err => {
                    console.log(err);
                    res.render('404')
                })
        })
        .catch(err => {
            console.log(err);
        });
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