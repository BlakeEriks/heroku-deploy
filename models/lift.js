/* Dependencies */
const mongoose = require('./connection')
const {Schema, model} = mongoose;

/* Define Lift Schema */
const liftSchema = new Schema({
    date: {type: Date, required: true}
})

/* Create Lift Model */
const Lift = model('Lift', liftSchema)

/* Export */
module.exports = Lift