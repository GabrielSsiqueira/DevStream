const { movie, category } = require('../models')
const { Op } = require('sequelize')

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

    async search(query){

        return await movie.findAll({
            where:{
                title:{
                    [Op.like]: `%${query}%`
                }
            },
            attributes:[
                'id',
                'title',
                'coverImage',
                'videoUrl'
            ]
        })
    }
}

module.exports = new MovieRepository()