/* Dependencies */
const mongoose = require('./connection')
const { Schema, model } = mongoose;

/* Define User Schema */
const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

/* Create User Model */
const User = model('User', userSchema)

/* Export */
module.exports = User