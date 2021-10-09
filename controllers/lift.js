/* Dependencies */
const express = require('express')
const Lift = require('../models/lift')
const bcrypt = require('bcryptjs')

/* Create Movement Router */
const liftRouter = express.Router()

/* Define Routes */
liftRouter.get('/', (req,res) => {
    let date = req.query.date ? req.query.date : new Date();
    Lift.findOne( {date}, (err,lift) => {
        console.log(lift);
        res.render('lifts/index', {lift})
    })
})

liftRouter.post('/', (req,res) => {
    let date = req.query.date ? req.query.date : new Date();

    
})

/* Export */
module.exports = liftRouter