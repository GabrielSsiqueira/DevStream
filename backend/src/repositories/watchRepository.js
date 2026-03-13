const { watchHistory, movie } = require('../models')
    const { Op } = require('sequelize')

class WatchRepository{

    async find(userId, movieId){

        return await watchHistory.findOne({
            where:{ userId, movieId }
        })
    }

    async create(data){
        return await watchHistory.create(data)
    }

    async update(watch, progress){

        watch.progress = progress
        watch.watchedAt = new Date()

        await watch.save()

        return watch
    }

    async findByUser(userId){

        return await watchHistory.findAll({
            where:{ userId },
            include: {
                model: movie
            },
            order: [['watchedAt', 'DESC']]
        })
    }

    async continueWatching(userId){
        
        return await watchHistory.findAll({
            where:{
                userId,
                progress:{ [Op.gt]: 0 }
            },
            include: {
                model: movie
            },
            order:[['watchedAt', 'DESC']],
            limit: 10
        })
    }
}

module.exports = new WatchRepository()