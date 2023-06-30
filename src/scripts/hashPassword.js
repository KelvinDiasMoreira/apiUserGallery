const bcrypt = require('bcrypt');

const hashPassword = async(password) =>{
    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync(password, salt)

    return hash
}


module.exports = hashPassword