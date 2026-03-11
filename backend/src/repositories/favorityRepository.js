const { favority, movie } = require('../models')

class FavoriryRepository{

    async create(userId, movieId) {

        return await favority.create({
            userId,
            movieId
        })
    }

    async find(userId, movieId){
        return await favority.findOne({
            where: { userId, movieId }
        })
    }

    async findByUser(userId){
        return await favority.findAll({
            where:{ userId },
            include: {
                model: movie
            }
        })
    }

    async delete(userId, movieId){
        return await favority.destroy({
            where:{ userId, movieId }
        })
    }
}

module.exports = new FavoriryRepository()