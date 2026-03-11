const favoriryRepository = require('../repositories/favorityRepository')

class FavorityService{

    async create(userId, movieId){

        const favority = await favoriryRepository.find(userId, movieId)

        if(!favority){
            throw new Error('favority não existe')
        }

        return await favoriryRepository.create(userId, movieId)
    }

    async list(userId){
        return await favoriryRepository.findByUser(userId)
    }

    async remove(userId, movieId){
        await favoriryRepository.delete(userId, movieId)

        return { message: 'removido dos seus favoritos' }
    }
}

module.exports = new FavorityService()