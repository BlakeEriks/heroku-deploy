/* Dependencies */
const express = require('express')
const Lift = require('../models/lift')
const bcrypt = require('bcryptjs')
const moment = require('moment')

/* Create Movement Router */
const liftRouter = express.Router()

/* Define Routes */
liftRouter.get('/', (req,res) => {
    let date = req.query.date ? new Date(req.query.date) : new Date();
    Lift.findOne( {date}, (err,lift) => {
        console.log(lift)
        console.log(date)
        res.render('lifts/index', {lift: lift, date: moment(date).format('MMMM Do, YYYY')})
    })
})

liftRouter.post('/', (req,res) => {
    let date = req.query.date ? req.query.date : new Date();

})

/* Export */
module.exports = liftRouter