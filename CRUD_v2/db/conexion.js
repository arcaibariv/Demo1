const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB,process.env.DB_USER,process.env.DB_PASS,{
    dialect: process.env.DB_DIALECT,
    server: process.env.DB_HOST,
    port: process.env.DB_PORT
})

module.exports = sequelize ;