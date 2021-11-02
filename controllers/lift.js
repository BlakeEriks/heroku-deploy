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
        Lift.find({"$expr": { "$eq": [{ "$month": "$date" }, Number(req.query.month)] }},
                (err,lifts) => res.send(lifts))
    }
    else {
        // let username = req.session.username
        Lift.findOne( req.query, (err,lift) => {
            res.send(lift)
        })
    }

})

liftRouter.post('/', (req,res) => {
    // let date = new Date(req.query.date)
    let date = new Date(req.body.date).toLocaleDateString()
    // let username = req.session.username
    Lift.create({date}, (err,lift) => {
        res.send(lift)
    })
})

/* Export */
module.exports = liftRouter