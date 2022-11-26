const bodyParser = require('body-parser')
const express = require('express')
const { getPitches, createPitch, createInvestment, getInvestment } = require('./queries')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/getpitch', getPitches)
app.post('/createpitch', createPitch)
app.get('/getinvestment',getInvestment)
app.post('/createinvestment', createInvestment)
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })