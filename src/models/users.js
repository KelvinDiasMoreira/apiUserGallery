const Sequelize = require('sequelize');;
const database = require('../database/connection'); 

const Users = database.define('Users', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = Users;


