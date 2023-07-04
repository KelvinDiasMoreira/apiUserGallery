const imagesModel = require('../models/images')


const registerImage = async (req, res) => {
    const imageRegistered = await imagesModel.registerImage(req.file)
    if (imageRegistered === true) {
        return res.status(409).end()
    }
    return res.status(201).json(imageRegistered)
}

const getAllImages = async (req, res) => {
    const allImages = await imagesModel.getAllImages()
    return res.status(200).json(allImages)
}

const deleteImage = async (req, res) => {
    const deleteImage = await imagesModel.deleteImage(req.params)
    return res.status(200).json(deleteImage)
}

module.exports = {
    registerImage,
    getAllImages,
    deleteImage,
}