/* Dependencies */
const mongoose = require('mongoose')

/* Mongo Connection Variables */
const DB_URL = process.env.MONGODB_URI
const DB_CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

/* Connect to MongoDB Cloud */
mongoose.connect(DB_URL, DB_CONFIG)

/* Connection logic */
mongoose.connection
    .on('open', () => console.log('Connected to MongoDB Cloud'))
    .on('close', () => console.log('Disconnected from MongoDB Cloud'))
    .on('error', error => console.log(error))

module.exports = mongoose