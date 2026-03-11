const { movie, category } = require('../models')

class MovieRepository {

    async create(data) {
         
        return await movie.create(data)
    }

    async findAll() {

        return await movie.findAll({
            include:{ 
                model: category,
                attributes: ['id', 'name']
            }
        })
    }

    async findById(id){

        return await movie.findByPk(id, {
            include: {
                model: category,
                attributes: ['id', 'name']
            }
        })
    }

    async update(id, data) {

        const movie = await movie.findById(id)

        if(!movie) return null

        await movie.update(data)

        return movie
    }

    async delete(id){

        const movie = await movie.findByPk(id)

        if(!movie) return null

        await movie.destroy()

        return true
    }

    async findByCategory(categoryId) {

        return await movie.findAll({
            where:{ categoryId }
        })
    }
}

module.exports = new MovieRepository()