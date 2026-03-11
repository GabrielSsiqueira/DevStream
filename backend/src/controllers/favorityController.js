const favorityService = require('../services/favorityService')

class FavorityController{

    async create(req, res) {
        try{
            const userId = req.userId
            const { movieId } = req.body

            const favority = await favorityService.create(
                userId,
                movieId
            )

            return res.status(201).json(favority)
        }catch(error){
            return res.status(404).json({ error: error.message })
        }
        
    }

    async list(req, res){
        try{
            const userId = req.userId

            const favorities = await favorityService.list(userId) 

            return res.status(201).json(favorities)
        }catch(error){
            return res.status(404).json({ error: error.message })
        }
        
    }

    async delete(req, res){
        try{
            const userId = req.userId
            const { movieId } = req.params

            const result = await favorityService.remove(
                userId,
                movieId
            )

            return res.status(201).json(result)

        }catch(error){
            return res.status(404).json({ error: error.message })
        }
       
    }
}

module.exports = new FavorityController()