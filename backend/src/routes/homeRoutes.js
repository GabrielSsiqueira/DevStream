const express = require('express')
const auth = require('../middleware/auth')
const homeController = require('../controllers/homeController')

const router = express.Router()

router.get('/home', auth, homeController.home)

module.exports = router