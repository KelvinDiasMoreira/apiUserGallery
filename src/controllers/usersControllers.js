const usersModel = require('../models/users')

const getAll = async(req, res) =>{
    const { names } = await usersModel.getAllNames()
    return res.status(200).json(names)
}

const registerUser = async (req, res) => {
    const registedUser = await usersModel.registerUser(req.body)
    return res.status(201).json(registedUser)
}

module.exports= {
    getAll,
    registerUser
}