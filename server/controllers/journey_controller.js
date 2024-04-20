//DEPENDENCIES
const router = require('express').Router();
const Location = require('../models/Location.js')

router.get('/', async (req, res) => {
    try {
        const foundLocations = await Location.find()
        console.log('Found locations:', foundLocations)

        res.status(200).json(foundLocations)

    } catch (error) {
        console.log('Error fetching locations:', error)
        res.status(500).json({error: 'Failed to fetch locations'})
    }
})

router.post('/', async (req, res) => {
    // console.log(req)
    console.log(req.body)
    console.log(JSON.stringify(req.body))
    try {
        Location.create(req.body)
        res.status(201).json({mssg: 'Created'})
    } catch (error){
        console.log(error)
        res.send(error)
    }

    //stretch goal, 
    // res.redirect('/api/journey')
})

router.put('/:id', async (req, res) => {
    const newData = req.body 

    try {
        let exisitingData = await Location.findByIdAndUpdate(req.params.id, newData, {new: true})

        if (!exisitingData) {
            return res.status(404).json({message: 'Location not found'})
        }
       res.status(200).json({ message: 'Location updated successfully', Location: exisitingData}).redirect('/api/journey')
    } catch (error) {
        console.error(error);
    }

    
})
//Delete delete route
router.delete('/:id', async (req, res) => {
    try {
    const deletedLocation = await Location.findByIdAndDelete(req.params.id);

    if (!deletedLocation) {
        res.status(404).json({ message: 'Location not found'})
    }
    res.status(303).redirect('/api/journey')
    res.status(200).json({ message: 'Location deleted succesfully'})

   } catch (error) {   
    console.error(error);
       
    }
})


module.exports = router