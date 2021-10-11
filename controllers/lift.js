/* Dependencies */
const express = require('express')
const Lift = require('../models/lift')
const Movement = require('../models/movement')
const bcrypt = require('bcryptjs')
const moment = require('moment')
const { render } = require('ejs')

/* Create Movement Router */
const liftRouter = express.Router()

/* Help Functions */
const getMovementsForLift = (lift, callback) => {
    Movement.find( {lift_id: lift._id}, (err, movements) => {
        callback(movements)
    })
}

/* Define Routes */
liftRouter.get('/', (req,res) => {
    let date = req.query.date ? new Date(req.query.date) : new Date();
    Lift.findOne( {date}, (err,lift) => {
        if (lift) {
            getMovementsForLift(lift, movements => {
                res.render('lifts/index', {lift, movements, moment, date})
            })
        }
        else {
            res.render('lifts/index', {lift, moment, date})
        }
    })
})

liftRouter.post('/', (req,res) => {
    let date = new Date(req.query.date)
    Lift.create( {date}, (err,lift) => {
        // res.redirect(`/lifts?date=${date.toLocaleDateString("en-US")}`)
        res.render('movements/index', {liftId: lift._id})
    })
})

liftRouter.get('/:liftId', (req,res) => {
    Lift.findById( req.params.liftId, (err,lift) => {
        getMovementsForLift(lift, movements => {
            res.render('lifts/index', {lift, movements, moment, date: lift.date})
        })
    })
})

/* Export */
module.exports = liftRouter