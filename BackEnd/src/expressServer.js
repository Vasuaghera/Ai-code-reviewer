const express = require('express');
const codeReviewRoutes = require('./routes/codeReviewRoutes')
const cors = require('cors')

const app = express()

app.use(cors())


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Haan Redy')
})

app.use('/ai', codeReviewRoutes)

module.exports = app
