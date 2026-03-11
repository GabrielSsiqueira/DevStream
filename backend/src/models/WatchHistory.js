const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const WatchHistory = sequelize.define('WatchHistory', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    progress: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    WatchedAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
},
{
    timestamps: true
})

module.exports = WatchHistory