/* Dependencies */
const express = require('express')
const Lift = require('../models/lift')
const bcrypt = require('bcryptjs')
const moment = require('moment')
const { render } = require('ejs')

/* Create Movement Router */
const liftRouter = express.Router()

/* Define Routes */
liftRouter.get('/', (req,res) => {
    let date = req.query.date ? new Date(req.query.date) : new Date();
    Lift.findOne( {date}, (err,lift) => {
        res.render('lifts/index', {lift, moment, date})
    })
})

liftRouter.post('/', (req,res) => {
    let date = new Date(req.query.date)
    Lift.create( {date}, (err,lift) => {
        res.redirect(`/lifts?date=${date.toLocaleDateString("en-US")}`)
    })
})

/* Export */
module.exports = liftRouter