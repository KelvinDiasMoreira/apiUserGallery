const express = require('express')
const router = express.Router()
const namesController = require('./controllers/usersControllers')
const middleWares = require('./middleware/middlewares')

router.get('/users', namesController.getAll)

router.post('/user/register', middleWares.registerMiddleware ,namesController.registerUser)

router.post('/login', middleWares.loginMiddleware, namesController.loginUser)

module.exports = router