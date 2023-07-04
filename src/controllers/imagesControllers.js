const imageModel = require('../models/images')


const registerImage = async (req, res) =>{
    const imageRegistered = await imageModel.registerImage(req.body, req.file)
    if (imageRegistered === true) {
        return res.status(409).end()
    }
    console.log("alguem mandou uma imagem")
    return res.status(201).json(imageRegistered)
}


module.exports={
    registerImage,
}