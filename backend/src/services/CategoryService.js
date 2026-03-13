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
}

module.exports = new CategoryRepository()