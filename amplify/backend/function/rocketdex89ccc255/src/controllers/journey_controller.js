//DEPENDENCIES
const router = require('express').Router();
const Location = require('../models/Location.js')

//Find all
router.get('/', async (req, res) => {
    try {
      
        const locationType = req.query.type;

        const query = locationType ? {type: locationType} : {};
        
        const foundLocations = await Location.find(query)
        console.log('Found locations:', foundLocations)

        res.status(200).json(foundLocations)

    } catch (error) {
        console.log('Error fetching locations:', error)
        res.status(500).json({error: 'Failed to fetch locations'})
    }
})

//Get show
router.get('/:id', async (req, res) => {
    try {
        const location = await Location.findById(req.params.id);

        if (!location) {
            res.status(404).json({ error: 'Location not found' });
        }

        res.setHeader('Content-Type', 'application/json'); // Set response Content-Type to JSON
        res.status(200).json(location);
   
    } catch (error) {
        console.error('Error finding location by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//Post create route
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
})

//Put update route
router.put('/:id', async (req, res) => {
    const newData = req.body 

    try {
        let exisitingData = await Location.findByIdAndUpdate(req.params.id, newData, {new: true})

        if (!exisitingData) {
            return res.status(404).json({message: 'Location not found'})
        }
       res.status(200).json({ message: 'Location updated successfully', Location: exisitingData})
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
    res.status(200).json({ message: 'Location deleted succesfully'})

   } catch (error) {   
    console.error(error);
       
    }
})
module.exports = router