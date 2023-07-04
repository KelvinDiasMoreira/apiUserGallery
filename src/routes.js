const express = require('express')
const router = express.Router()

const namesController = require('./controllers/usersControllers')
const middleWares = require('./middleware/middlewares')
const upload = require('./config/multer')

router.get('/users', namesController.getAll)

router.post('/user/register', middleWares.registerMiddleware ,namesController.registerUser)

router.post('/login', middleWares.loginMiddleware, namesController.loginUser)

router.post('/register/image', upload.single('file'), namesController.registerImage )

module.exports = router