/* Dependencies */
const express = require('express')
const Lift = require('../models/lift')
const Movement = require('../models/movement')
const loginCheck = require('../utils/loginCheck')
const moment = require('moment')

let cache = {}

/* Create Movement Router */
const liftRouter = express.Router()

/* Verify User is Logged In */
liftRouter.use(loginCheck)

/* Helper Functions */
const getMovementsForLift = (lift, callback) => {
    Movement.find( {lift_id: lift._id}, (err, movements) => {
        callback(movements)
    })
}

/* Define Routes */
liftRouter.get('/', (req,res) => {
    let date = req.query.date ? new Date(req.query.date) : new Date();
    if (!cache[date]) {
        Lift.findOne( {date}, (err,lift) => {
            if (lift) {
                getMovementsForLift(lift, movements => {
                    cache[date] = {lift, movements, date}
                    res.setHeader('lift-id', lift._id);
                    res.render('lifts/show', {...cache[date], moment})
                })
            }
            else {
                cache[date] = {lift: undefined, movements: undefined, date}
                res.render('lifts/show', {...cache[date], moment})
            }
        })
    }
    else {
        res.render('lifts/show', {...cache[date], moment})
    }
})

liftRouter.post('/', (req,res) => {
    let date = new Date(req.query.date)
    Lift.create( {date}, (err,lift) => {
        cache[date] = undefined
        res.render('movements/index', {movements: [], liftId: lift._id})
    })
})

/* Export */
module.exports = liftRouter