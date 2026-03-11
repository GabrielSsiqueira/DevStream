const watchService = require('../services/watchService')

class WatchController{

    async watch(req,res){
        try{
            const userId = req.req.userId
            const { movieId, progress } = req.body

            const result = await watchService.watch(
                userId,
                movieId,
                progress
            )

            return res.status(201).json(result)
        }catch(error){
            return res.status(404).json({
                error: error.message
            })
        }
        
    }

    async history(req,res){
        try{
            const userId = req.req.userId

            const history = await watchService.history(
                userId,
            )

            return res.status(201).json(history)
        }catch(error){
            return res.status(404).json({
                error: error.message
            })
        }
    }
}

module.exports = new WatchController()