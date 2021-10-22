/* Dependencies */
const express = require('express')
const Lift = require('../models/lift')
const Movement = require('../models/movement')
const loginCheck = require('../utils/loginCheck')
const moment = require('moment')

/* Create Movement Router */
const liftRouter = express.Router()

/* Verify User is Logged In */
// liftRouter.use(loginCheck)

/* Helper Functions */
const getMovementsForLift = (req, callback) => {
    Movement.find( {username: req.username, lift_id: req.lift._id}, (err, movements) => {
        callback(movements)
    })
}

/* Define Routes */
liftRouter.get('/', (req,res) => {
    // let date = req.query.date ? new Date(req.query.date) : new Date();
    if (req.query.month) {
        console.log(req.query.month)
        Lift.find({ 
                    "$expr": { "$eq": [{ "$month": "$date" }, 10] } 
                },
                (err,lifts) => {
                    res.send(lifts)
        })
    }
    else {
        console.log(req.query)
        let date = req.query.date ? new Date(req.query.date) : new Date();
        let username = req.session.username
        // if (!cache[date]) {
            // Lift.findOne( {username, date}, (err,lift) => {
            Lift.find( req.query, (err,lift) => {
                res.send(lift)
            // if (lift) {
            //         getMovementsForLift({username, lift}, movements => {
            //             // cache[date] = {lift, movements, date}
            //             // res.setHeader('lift-id', lift._id);
            //             res.render('lifts/show', {...cache[date], moment})
            //         })
            //     }
            //     else {
            //         // cache[date] = {lift: undefined, movements: undefined, date}
            //         res.render('lifts/show', {...cache[date], moment})
            //     }
            })
        // }
        // else {
            // res.render('lifts/show', {...cache[date], moment})
        // }
    }

})

liftRouter.post('/', (req,res) => {
    
    let date = new Date(req.query.date)
    let username = req.session.username
    
    Lift.create({username, date}, (err,lift) => {
        cache[date] = undefined
        res.render('movements/index', {movements: [], liftId: lift._id})
    })
})

/* Export */
module.exports = liftRouter