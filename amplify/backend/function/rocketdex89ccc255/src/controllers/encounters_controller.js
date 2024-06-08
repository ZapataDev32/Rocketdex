//DEPENDENCIES
const router = require('express').Router()
const Encounter = require('../models/Encounter.js')

router.get('/', async (req, res) => {
    console.log('Encounters!!!!')
    try {
        const foundEncounters = await Encounter.find()

        res.status(200).json(foundEncounters)

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router