//DEPENDENCIES
const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()
const PORT = process.env.PORT
const ATLAS_URI = process.env.ATLAS_URI

//db connection
mongoose.connect(ATLAS_URI).then(() => {
    console.log(`Connected to mongo: ` + ATLAS_URI)
})
.catch((err) => {
    console.log(`Error connecting to mongo: ` + err)
})

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({origin: 'https://main.d337q9eogq0fbv.amplifyapp.com/'}))



//HOME ROUTE
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the backend server!'})
})

//LOCATIONS ROUTE
const locationsController = require('./controllers/journey_controller.js')
app.use('/api/journey', locationsController)

//ENCOUNTERS ROUTE
const encountersController = require('./controllers/encounters_controller.js')
app.use('/api/encounters', encountersController)

//SERVES CLIENT SIDE REACT
app.use(express.static(path.join('dist')));
app.get('*', (req, res) => res.sendFile(path.resolve('dist', 'index.html')));

app.listen(PORT || 3000, () => {
    console.log(`Server is running on ${PORT} :O`)
})