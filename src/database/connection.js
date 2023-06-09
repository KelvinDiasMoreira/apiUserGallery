require('dotenv').config()
const mysql = require('mysql2/promise')


const connection = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    
})

module.exports = connection

