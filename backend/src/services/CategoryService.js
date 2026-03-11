const categoryRepository = require('../repositories/categoryRepository')

class CategoryRepository {

    async create({ name }){
        return await categoryRepository.create(name)
    }

    async list(){
        return await categoryRepository.findAll()
    }

    async getById(id) {

        const category = categoryRepository.findById(id)

        if(!category){
            throw new Error('categoria não existe')
        }

        return category
    }

    async update(id, data) {

        const category = await categoryRepository.update(id, data)

        if(!category){
            throw new Error('categoria não existe')
        }

        return category
    }

    async delete(id) {

        const deleted = await categoryRepository.delete(id)

        if(!deleted){
            throw new Error('categoria não existe')
        }

        return {message: 'Categoria deletada'}
    }

    async home() {

        const categories = await categoryRepository.findWithMovies()

        return categories.filter(category => 
            category.Movies.length > 0).map(category => ({
                category: category.name,
                movies: category.Movies
            })
        )
    }
}

module.exports = new CategoryRepository()