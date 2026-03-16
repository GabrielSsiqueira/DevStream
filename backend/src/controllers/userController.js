const userService = require('../services/userServices')
const jwt = require('../utils/jwt')

class UserController {

    async register(req, res){
        try{

            const user = await userService.register(req.body)

            return res.status(201).json(user)
        }catch(error){
            return res.status(400).json({error: error.message})
        }
    }

    async profile(req,res){
        const userInfo = await jwt.verify(req)
        res.json(userInfo)
    }

    async login(req, res){

        try{

            const data = await userService.login(req.body)

            return res.json(data)
        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    }

    async list(req, res){
        try{

            const users = await userService.listUsers()

            return res.status(201).json(users)
        }catch(error){
            return res.status(400).json({error: error.message})
        }
    }

    async getById(req, res){

        try{
            const user = await userService.getUser(req.params.id)

            return res.json(user)
        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    }

    async update(req, res) {
        try{

            const user = await userService.updateUser(
                req.params.id,
                req.body
            )

            return res.json(user)
        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    } 

    async delete(req, res) {
        try{

            const result = await userService.delete(
                req.params.id,
            )

            return res.json(result)
        }catch(error){
            return res.status(400).json({ error: error.message })
        }
    }
}

module.exports = new UserController()