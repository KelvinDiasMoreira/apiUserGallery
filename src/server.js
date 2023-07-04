require('dotenv').config()
const express = require('express')

const routes = require('./routes')
var cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)



app.listen(process.env.PORT, () => {
    console.log(`Server running in port : ${process.env.PORT}`)
})

module.exports = app
