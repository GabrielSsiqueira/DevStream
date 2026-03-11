const { category, movie } = require('../models')

class CategoryRepository{

    async create(data){
        return await category.create(data)
    }

    async findById(id){
        return await category.findByPk(id)
    }

    async findAll() {
        return await category.findAll()
    }

    async update(id, data) {

        const Category = await category.findByPk(id)

        if(!Category) return null

        await category.update(data)

        return Category
    }

    async delete(id) {

        const Category = await category.findByPk(id)

        if(!Category) return null

        await category.destroy()

        return true
    }

    async findWithMovies(){

        return await category.findAll({
            include:[
                {
                    model: movie
                }
            ]
        })
    }
}

module.exports = new CategoryRepository()