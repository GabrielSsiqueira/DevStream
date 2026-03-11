const { user } = require('../models')

class UserRepository{

    async create(data){
        return await user.create(data)
    }

    async findByEmail(email){
        return await user.findOne(email)
    }

    async findById(id){
        return await user.findByPk(id)
    }

    async update(id, data) {

        const user = await user.findByPk(id)

        if(!user) return null

        await user.update(data)

        return user
    }

    async delete(id){

        const user = await user.findByPk(id)

        if(!user) return null

        await user.destroy()

        return true
    }

    async findAll() {
        return await user.findAll()
    }
}

module.exports = new UserRepository()