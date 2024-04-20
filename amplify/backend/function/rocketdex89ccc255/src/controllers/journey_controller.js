//DEPENDENCIES
const router = require('express').Router();
const Location = require('../models/Location.js')

//Find all
router.get('/', async (req, res) => {
    console.log("Hello there")
    try {
        const foundLocations = await Location.find()

        res.status(200).json(foundLocations)

    } catch (error) {
        
        res.status(500).json({error: 'Failed to fetch locations'})
    }
})

//Get show
// router.get('/:id', async (req, res) => {
//     try {
//         const location = await Location.findById(req.params.id)


//     } catch (error) {
//         res.status(500).json({error: 'Failed to find location'})
//     }
// })

//Post create route
router.post('/', async (req, res) => {
    Location.create(req.body)
})

//Put update route
router.put('/:id', async (req, res) => {
    // const newData = req.body 

    // if ()
    
})
//Delete delete route
router.delete('/:id', async (req, res) => {
    // if () {

    //     delete ;
    //     res.status(200).send('Data deleted succesfully')
    // } else {

    //     res.status(404).send('Data not found');
    // }
})
module.exports = router