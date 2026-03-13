const favorityRepository = require('../repositories/favorityRepository')

class FavorityService{

    async create(userId, movieId){

        const favority = await favorityRepository.find(userId, movieId)

        if(!favority){
            throw new Error('favority não existe')
        }

        return await favorityRepository.create(userId, movieId)
    }

    async list(userId){
        return await favorityRepository.findByUser(userId)
    }

    async remove(userId, movieId){
        await favorityRepository.delete(userId, movieId)

        return { message: 'removido dos seus favoritos' }
    }
}

module.exports = new FavorityService()