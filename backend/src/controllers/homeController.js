const homeService = require('../services/homeService')

class HomeController{

    async home(req,res) {
        try{
            const userId = req.userId

            const data = await homeService.getHome(userId)

            return res.json(data)
        }catch(error){
            return res.status(404).json({
                error: error.message
            })
        }
    }
}

module.exports = new HomeController()