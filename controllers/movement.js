/* Dependencies */
const express = require('express')
const Movement = require('../models/movement')
const bcrypt = require('bcryptjs')

/* Create Movement Router */
const movementRouter = express.Router()

/* Define Routes */
movementRouter.get('/:liftId/new', (req,res) => {
    res.render('movements/new', {liftId: req.params.liftId})
})

movementRouter.get('/', (req,res) => {
    res.render('movements/new')
})

movementRouter.post('/:liftId', (req,res) => {
    let movement = {sets: []}
    movement.type = req.body.type
    req.body.weight.forEach( (weight, index) => movement.sets.push({weight: weight, reps: req.body.reps[index]}))
    movement.date = new Date(req.query.date)
    movement.lift_id = req.params.liftId
    Movement.create(movement, (err, movement) => {
        res.redirect(`/lifts/${req.params.liftId}`)
    })
})

/* Export */
module.exports = movementRouter