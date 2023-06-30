const express = require('express')
const namesController = require('./controllers/usersControllers')
const router = express.Router()

router.get('/users', namesController.getAll)

router.post('/register', namesController.registerUser)

module.exports = router