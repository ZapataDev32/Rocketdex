const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    name: String,
    type: String,
    encounters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Encounter'
    }]
})

const Location = mongoose.model('Location', locationSchema)
module.exports = Location