require('dotenv').config()

const Sequelize = require("sequelize")
const database = new Sequelize(process.env.DATABASE, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
    dialect: 'mariadb',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
})

module.exports = database;

