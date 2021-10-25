/* Dependencies */
const express = require('express')
const Movement = require('../models/movement')
const loginCheck = require('../utils/loginCheck')

/* Create Movement Router */
const movementRouter = express.Router()

/* Verify User is Logged In */
// movementRouter.use(loginCheck)

/* Define Routes */
movementRouter.get('/new', (req,res) => {
    res.render('movements/new', {liftId: req.query.liftId})
})

movementRouter.delete('/:id', (req,res) => {
    Movement.findByIdAndDelete(req.params.id, (err, movement) => {
        res.redirect(`/movements?liftId=${movement.lift_id}`)
    })
})

movementRouter.get('/', (req,res) => {
    // let username = req.session.username
    Movement.find({lift_id: req.query.liftId}, (err, movements) => {
        res.send(movements)
    })
})

movementRouter.post('/', (req,res) => {
    let movement = getMovementFromBody(req.body)
    movement.lift_id = req.query.liftId
    movement.username = req.session.username
    Movement.create(movement, (err, movement) => {
        res.redirect(`/movements?liftId=${req.query.liftId}`)
    })
})

movementRouter.put('/:id', (req,res) => {
    let movement = getMovementFromBody(req.body)
    Movement.findByIdAndUpdate(req.params.id, movement, (err,movement) => {
        res.redirect(303, `/movements/${req.params.id}`)
    })
})

movementRouter.get('/:id/edit', (req,res) => {
    Movement.findById(req.params.id, (err,movement) => {
        res.render('movements/edit', {movement})
    })
})

movementRouter.get('/:id', (req,res) => {
    Movement.findById(req.params.id, (err,movement) => {
        res.render('movements/show', {movement})
    })
})

/* Utils */
const getMovementFromBody = body => {
    let movement = {sets: []}
    movement.type = body.type
    body.weight.forEach( (weight, index) => movement.sets.push({weight: weight, reps: body.reps[index]}))
    return movement
}

/* Export */
module.exports = movementRouter