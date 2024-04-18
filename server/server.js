//DEPENDENCIES
const express = require('express')
const path = require('path')
const app = express()


require('dotenv').config()
const PORT = process.env.PORT

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

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
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'dist', 'index.html')));

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} :D`)
})