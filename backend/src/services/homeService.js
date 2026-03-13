const watchRepository = require('../repositories/watchRepository')
const favorityRepository = require('../repositories/favorityRepository')
const categoryRepository = require('../repositories/categoryRepository')

class HomeService{

    async getHome(userId){

        const continueWatching = await watchRepository.continueWatching(userId)

        const favorites = await favorityRepository.findByUser(userId)

        const categories = await categoryRepository.findWithMovies()

        return {
            continueWatching,
            favorites,
            categories
        }
    }
}

module.exports = new HomeService()