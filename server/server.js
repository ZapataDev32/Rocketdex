//DEPENDENCIES
const express = require('express')
const path = require('path')
const app = express()

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//HOME ROUTE
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the backend server!'})
})

//LOCATIONS ROUTE
const locationsController = require('./controllers/locations_controller.js')
app.use('/api/locations', locationsController)

//ENCOUNTERS ROUTE
const encountersController = require('./controllers/encounters_controller.js')
app.use('/api/encounters', encountersController)

//SERVES CLIENT SIDE REACT
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'dist', 'index.html')));

app.listen(5555, () => {
    console.log('Server is running! :D')
})

// `Server is running at http://localhost:${process.env.PORT}`