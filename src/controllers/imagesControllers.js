const imageModel = require('../models/images')


const registerImage = async (req, res) =>{
    const imageRegistered = await imageModel.registerImage(req.file)
    if (imageRegistered === true) {
        return res.status(409).end()
    }
    return res.status(201).json(imageRegistered)
}

const getAllImages = async (req, res) => {
    const allImages = await imageModel.getAllImages()
    return res.status(200).json(allImages)
}

const deleteImage = async (req , res) => {
    const deleteImage = await imageModel.deleteImage(req.params)
    return res.status(200).json(deleteImage)
}

module.exports={
    registerImage,
    getAllImages,
    deleteImage,
}