const express = require('express')
const namesController = require('./controllers/usersControllers')
const router = express.Router()

router.get('/names', namesController.getAll)

router.post('/register', namesController.registerUser)

module.exports = router