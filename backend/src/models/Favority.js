const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Favority = sequelize.define('Favority', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    }
},
{
    timestamps: true
})

module.exports = Favority