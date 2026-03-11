const bcrypt = require('bcryptjs')
const userRepository = require('../repositories/userRepository')
const { generateToken } = require('../utils/jwt')

class UserService {

    async getUser(id){

        const user = await userRepository.findById(id)

        if(!user){
            throw new Error('usuario não existe')
        }

        return user
    }

    async updateUser(id, data){

        if(data.password) {
            data.password = await bcrypt.hash(data.password, 10)
        }

        const user = await userRepository.update(id, data)

        if(!user){
            throw new Error('Usuario não existe')
        }

        return user
    }

    async register({ name, email, password }){
        const userExists = await userRepository.findByEmail(email)

        if(userExists){
            throw new Error('Usuario não existe')
        }

        const passwordHash = await bcrypt.hash(password, 10)

        const user = await userRepository.create({
            name,
            email,
            password: passwordHash
        })

        return user
    }

    async login({ email, password }) {

        const user = await userRepository.findByEmail(email)

        if(!user){
            throw new Error('user não existe')
        }

        const token = generateToken(user)

        return {
            user,
            token
        }
    }

    async listUsers(){
        return await userRepository.findAll()
    }

    async delete(id){

        const deleted = await userRepository.delete(id)

        if(!deleted){
            throw new Error('usuario não existe')
        }

        return { message: 'Usuario excluido' }
    }
}

module.exports = new UserService()