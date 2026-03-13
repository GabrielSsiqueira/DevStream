const watchRepository = require('../repositories/watchRepository')

class WatchService{

    async watch(userId, movieId, progress){
        let watch = await watchRepository.find(userId,movieId)

        if(!watch){
            watch = await watchRepository.create({
                userId,
                movieId,
                progress
            })

            return watch
        }

        return await watchRepository.update(watch, progress)
    }

    async history(userId){
        return watchRepository.findByUser(userId)
    }

    async continueWatching(userId){

        return await watchRepository.continueWatching(userId)
    }
}

module.exports = new WatchService()