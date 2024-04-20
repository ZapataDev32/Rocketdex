//DEPENDENCIES
const router = require('express').Router();
const Location = require('../models/Location.js')

router.get('/', async (req, res) => {
    console.log("Hello there")
    try {
        const foundLocations = await Location.find()
        

        res.status(200).json(foundLocations)

    } catch (error) {
        
        res.status(500).json({error: 'Failed to fetch locations'})
    }
})

module.exports = router