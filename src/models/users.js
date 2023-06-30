const connection = require('../database/connection')
const bcrypt = require('bcrypt');
const saltRounds = 10;



const getAllNames = async () => {
    const names = await connection.execute('SELECT * FROM names');
    return names
}

const registerUser = async (user) => {
    const { login, name, password } = user

    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(password, salt)

    const query = "INSERT INTO names(login, name, password) VALUES (?, ? ,?)"

    const [ userRegisted ] = await connection.execute(query, [login, name, hash])
    return {userId: userRegisted.insertId, response: "Usuário registrado com sucesso"}

}

module.exports= {
    getAllNames,
    registerUser
}

