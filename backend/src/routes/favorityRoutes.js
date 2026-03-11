const express = require('express')
const favorityController = require('../controllers/favorityController')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/create', auth, favorityController.create)
router.get('/list', auth, favorityController.list)
router.delete('/delete/:movieId', auth, favorityController.delete)

module.exports = router