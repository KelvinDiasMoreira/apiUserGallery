const express = require('express')
const routes = require('./routes')
var cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)



app.listen(3333, () => {
    console.log("server rodando na porta 3333")
})

module.exports = app
