const usersModel = require('../models/users')

const getAll = async (req, res) => {
    const  names  = await usersModel.getAllNames()
    console.log("alguem olhou os usuários")
    return res.status(200).json(names)
}

const registerUser = async (req, res) => {
    const registedUser = await usersModel.registerUser(req.body)
    if (registedUser === true) {
        return res.status(409).end()
    }
    console.log(registedUser)
    return res.status(201).json(registedUser)
}

const loginUser = async(req, res) => {
    const userLogged = await usersModel.loginUser(req.body)
    if(userLogged === false){
        return res.status(401).end()
    }
    console.log("alguem logou")
    return res.status(200).send(userLogged)
}

module.exports = {
    getAll,
    registerUser,
    loginUser,
}