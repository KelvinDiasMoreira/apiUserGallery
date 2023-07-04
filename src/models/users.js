const connection = require('../database/connection')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const hashPassword = require('../scripts/hashPassword')

const getAllNames = async () => {
    const [names] = await connection.execute('SELECT * FROM Users');
    const arrayUsers = names.map(names => ({ userId: names.id, userName: names.name }))
    return Object({
        Users: arrayUsers,

    })
}
const registerUser = async (user) => {
    const { login, name, password } = user

    try {
        const hash = await hashPassword(password)
        const dateNow = new Date(Date.now())

        const query = 'INSERT INTO Users(login, name, password, created_at, updated_at) VALUES (?, ? ,?, ?, ?)'
        const [userRegisted] = await connection.execute(query, [login, name, hash, dateNow, dateNow])

        return { userId: userRegisted.insertId, response: "Usuário registrado com sucesso" }

    } catch (error) {
        return true
    }
}

const loginUser = async (user) => {
    const { login, password } = user

    const [result] = await connection.execute(`SELECT * FROM Users WHERE login = '${login}'`)

    if (result.length > 0) {
        const isCorrect = await bcrypt.compare(password, result[0].password).then((value) => { return value })
        if (isCorrect && login === result[0].login) {
            var secret = result[0].name
            const token = jwt.sign({ userId: result[0].id }, secret, { expiresIn: 500 })
            return {
                userId: result[0].id,
                userName: result[0].name,
                token: token,
                auth: true
            }
        }
        else return false
    }
    else return false
}


module.exports = {
    getAllNames,
    registerUser,
    loginUser,
}

