const movieRepository = require('../repositories/movieRepository')

class MovieService {

    async create(movieData) {

        return await movieRepository.create(movieData)
    }

    async listMovies() {

        return await movieRepository.findAll()
    }

    async getById(id) {
        const movie = await movieRepository.findById(id)

        if(!movie) {
            throw new Error('Movie não existe')
        }

        return movie
    }

    async update(id, data) {
        const movie = await movieRepository.update(id, data)

        if(!movie) {
            throw new Error('Movie não existe')
        }

        return movie
    }

    async delete(id) {
        const deleted = await movieRepository.delete(id)

        if(!deleted) {
            throw new Error('Movie não existe')
        }

        return { message: 'movie deletado' }
    }
}

module.exports = new MovieService()