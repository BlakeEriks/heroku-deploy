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
                res.render('lifts/show', {lift, movements, moment, date})
            })
        }
        else {
            res.render('lifts/show', {lift: undefined, movements: undefined, moment, date})
        }
    })
})

// liftRouter.get('/:date', (req,res) => {
//     let date = req.params.date ? new Date(req.params.date) : new Date();
//     Lift.findOne( {date}, (err,lift) => {
//         if (lift) {
//             getMovementsForLift(lift, movements => {
//                 res.render('lifts/show', {lift, movements, moment, date})
//             })
//         }
//         else {
//             res.render('lifts/show', {moment, date})
//         }
//     })
// })

liftRouter.post('/', (req,res) => {
    let date = new Date(req.query.date)
    Lift.create( {date}, (err,lift) => {
        res.render('movements/index', {movements: [], liftId: lift._id})
    })
})

/* Export */
module.exports = liftRouter