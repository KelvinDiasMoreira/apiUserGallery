const usersModel = require('../models/users')

const getAll = async (req, res) => {
    const { names } = await usersModel.getAllNames()
    return res.status(200).json(names)
}

const registerUser = async (req, res) => {
    const registedUser = await usersModel.registerUser(req.body)
    if (registedUser) {

        return res.status(200).json("teste")
    }
    return res.status(200).json(registedUser)
}

module.exports = {
    getAll,
    registerUser
}