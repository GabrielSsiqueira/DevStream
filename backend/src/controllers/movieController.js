const movieService = require('../services/movieService')

class MovieController {

    async create(req, res) {
        try{
            const movie = await movieService.create(req.body)

            return res.status(201).json(movie)
        }catch(error){
            return res.status(404).json({ error: error.message })
        }
        
    }

    async search(req, res){
        try{
            const { q } = req.query

            const movies = await movieService.search(q)

            return res.json(movies)
        }catch(error){
            return res.status(404).json({ error: error.message })
        }
    }

    async list(req, res) {
        try{
            const movies = await movieService.listMovies()

            return res.json(movies)
        }catch(error){
            return res.status(404).json({ error: error.message })
        }
        
    }

    async getById(req, res) {
        try{
            const movie = await movieService.getById(req.params.id)

            return res.json(movie)
        }catch(error){
            return res.status(404).json({ error: error.message })
        }
    }

    async update(req, res) {
        try{
            const movie = await movieService.update(
                req.params.id,
                req.body
            )

            return res.json(movie)
        }catch(error){
            return res.status(404).json({ error: error.message })
        }
    }

    async delete(req, res) {
        try{
            const result = await movieService.delete(req.params.id)

            return res.json(result)
        }catch(error){
            return res.status(404).json({ error: error.message })
        }
    }


}

module.exports = new MovieController()