/* Dependencies */
const express = require('express')
const Movement = require('../models/movement')
const bcrypt = require('bcryptjs')

/* Create Movement Router */
const movementRouter = express.Router()

/* Define Routes */
movementRouter.get('/new', (req,res) => {
    res.render('movements/new', {liftId: req.query.liftId})
})

movementRouter.delete('/:id', (req,res) => {
    Movement.findByIdAndDelete(req.params.id, (err, movement) => {
        res.redirect(`/movements?liftId=${req.query.liftId}`)
    })
})

movementRouter.get('/', (req,res) => {
    Movement.find({lift_id: req.query.liftId}, (err, movements) => {
        res.render('movements/index', {movements, liftId: req.query.liftId})
    })
})

movementRouter.post('/', (req,res) => {
    let movement = {sets: []}
    movement.type = req.body.type
    req.body.weight.forEach( (weight, index) => movement.sets.push({weight: weight, reps: req.body.reps[index]}))
    movement.date = new Date(req.query.date)
    movement.lift_id = req.query.liftId
    Movement.create(movement, (err, movement) => {
        res.redirect(`/movements?liftId=${req.query.liftId}`)
    })
})

movementRouter.get('/:id', (req,res) => {
    Movement.findById(req.params.id, (err,movement) => {
        res.render('movements/show', {movement})
    })
})

/* Export */
module.exports = movementRouter