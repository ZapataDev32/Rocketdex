//DEPENDENCIES
const router = require('express').Router();
const Location = require('../models/Location.js')

router.get('/api/locations', async (req, res) => {
    try {
        const foundLocations = await Location.find({})
        res.status(200).json(foundLocations)

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router