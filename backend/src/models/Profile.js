const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Profile = sequelize.define('Profile', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    avatar: {
        type: DataTypes.STRING
    },
    bio: {
        type: DataTypes.TEXT
    }
},
{
    timestamps: true
})

module.exports = Profile