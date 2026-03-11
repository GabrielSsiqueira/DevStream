const sequelize = require('../config/database')

const user = require('./User')
const profile = require('./Profile')
const movie = require('./Movie')
const category = require('./Category')
const favority = require('./Favority')
const watchHistory = require('./WatchHistory')

/* 
relacionamentos
*/

user.hasOne(profile)
profile.belongsTo(user)

category.hasMany(movie)
movie.belongsTo(category)

user.hasMany(favority)
favority.belongsTo(user)

movie.hasMany(favority)
favority.belongsTo(movie)

user.hasMany(watchHistory)
watchHistory.belongsTo(user)

movie.hasMany(watchHistory)
watchHistory.belongsTo(movie)

/* 
sicronizando banco
*/

sequelize.sync({
    alter: true
})
.then(() => {
    console.log('banco sincronizado')
})

module.exports = {
    sequelize,
    user,
    profile,
    category,
    movie,
    favority,
    watchHistory
}