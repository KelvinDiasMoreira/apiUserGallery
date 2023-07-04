const express = require('express')
const router = express.Router()

const namesController = require('./controllers/usersControllers')
const imagesController = require('./controllers/imagesControllers')
const middleWares = require('./middleware/middlewares')
const upload = require('./config/multer')

router.get('/users', namesController.getAll)

router.get('/images', imagesController.getAllImages)

router.post('/user/register', middleWares.registerMiddleware ,namesController.registerUser)

router.post('/login', middleWares.loginMiddleware, namesController.loginUser)

router.post('/register/image', upload.single('file'), imagesController.registerImage )

router.delete('/image/delete/:id', imagesController.deleteImage)

module.exports = router