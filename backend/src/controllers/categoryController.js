const categoryService = require('../services/CategoryService')

class CategoryController {

    async create(req, res){
        try{

            const category = await categoryService.create(req.body)

            return res.status(201).json(category)
        }catch(error){
            return res.status(400).json({error: error.message})
        }
    }

    async list(req, res){
        try{

            const categories = await categoryService.list()

            return res.status(201).json(categories)
        }catch(error){
            return res.status(400).json({error: error.message})
        }
    }

    async getById(req, res) {

        try{

            const category = await categoryService.getById(req.params.id)

            return res.json(category)
        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    }

    async update(req, res){
        try{

            const category = await categoryService.update(
                req.params.id,
                req.body
            )

            return res.json(category)
        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    }

    async delete(req, res) {

        try{

            const result = await categoryService.delete(req.params.id)

            return res.json(result)
        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    }

}

module.exports = new CategoryController()