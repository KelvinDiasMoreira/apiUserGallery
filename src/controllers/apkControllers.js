const apksModel = require('../models/apks')


const getAllApks = async (req, res) => {
    const allApks = await apksModel.getAllApks()
    console.log("alguem pegou apks");
    return res.status(200).json(allApks)
}

const registerApk = async (req, res) => {
    const apkRegistered = await apksModel.registerApk(req.file)
    if(apkRegistered === true)  {
        return res.status(400).end()
    }
    return res.status(201).json(apkRegistered)
}

const deleteApk = async (req, res) => {
    const deleteImage = await apksModel.deleteApk(req.params)
    return res.status(200).json(deleteImage)
}


module.exports = {
    getAllApks,
    registerApk,
    deleteApk,
}