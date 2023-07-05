require('dotenv').config()
const express = require('express')

const routes = require('./routes')
const cors = require('cors')
const app = express()
const path = require('path')
const swagger = require('swagger-ui-express')
const swaggerDoc = require('./helper/swaggerDoc.json')

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(express.urlencoded({extended: true}))
app.use('/files', express.static(path.resolve(__dirname, 'public', 'images')))

app.use('/api', swagger.serve, swagger.setup(swaggerDoc));


app.listen(process.env.PORT, () => {
    console.log(`Server running in port : ${process.env.PORT}`)
})

module.exports = app
