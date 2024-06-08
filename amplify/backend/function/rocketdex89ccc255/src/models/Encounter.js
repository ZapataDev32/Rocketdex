const mongoose = require('mongoose')
const {Schema} = mongoose

const EncounterSchema = new Schema({
    name: {type: String, required: true},
    rating: {type: Number}
}, {collection: 'Encounters'})

const Encounter = mongoose.model('Encounter', EncounterSchema)
module.exports = Encounter