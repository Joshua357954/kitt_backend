const { Sequelize, DataTypes } = require('sequelize')
const config = require('./config.js')

// Load Sequelize Config
const sequelize = new Sequelize(config)

const db = {}

db.sequelize = sequelize
db.DataTypes = DataTypes




module.exports = db 

require('./seed.js')