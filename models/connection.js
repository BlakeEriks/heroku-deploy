/* Dependencies */
const mongoose = require('mongoose')

const DB_URL = process.env.DATABASE_URL
const DB_CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(DB_URL, DB_CONFIG)

mongoose.connection
    .on('open', () => console.log('Connected to MongoDB Cloud'))
    .on('close', () => console.log('Disconnected from MongoDB Cloud'))
    .on('error', error => console.log(error))

module.exports = mongoose