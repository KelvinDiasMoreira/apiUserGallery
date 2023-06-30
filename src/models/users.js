const hashPassword = require('../scripts/hashPassword')
const verifyLogin = require('../scripts/verifyLogin')
const connection = require('../database/connection')

const getAllNames = async () => {
    const names = await connection.execute('SELECT * FROM Users');
    return names
}



const registerUser = async (user) => {
    const { login, name, password } = user
    
    const hash = await hashPassword(password)
    const existInBD = await verifyLogin(name)
    console.log("🚀 ~ file: users.js:17 ~ registerUser ~ existInBD:", existInBD)
    
    if(existInBD) return true
    
    const dateNow = new Date(Date.now())

    const query = "INSERT INTO Users(login, name, password, created_at, updated_at) VALUES (?, ? ,?, ?, ?)"
    const [userRegisted] = await connection.execute(query, [login, name, hash, dateNow, dateNow])
    
    return { userId: userRegisted.insertId, response: "Usuário registrado com sucesso" }
}

module.exports = {
    getAllNames,
    registerUser
}

