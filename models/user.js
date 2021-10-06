/* Dependencies */
const mongoose = require('./connection')

/* Extract schema & model */
const { Schema, model } = mongoose;

/* Define User Model */
const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

/* Create User Model */
const User = model('User', userSchema)

/* Export */
module.exports = User