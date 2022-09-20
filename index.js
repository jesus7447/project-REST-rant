require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.get('*', (req,res) => {
    res.status(404).send('<h4>404 Page</h4>')
});

app.listen(process.env.PORT)