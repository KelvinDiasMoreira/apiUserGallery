const connection = require('../database/connection')

const verifyLogin = async(name) => {
    const querySearch = 'SELECT * FROM `Users` WHERE `login` = ?'
    const [isTrue] = await connection.execute(querySearch, name)
    return isTrue
}

module.exports = verifyLogin