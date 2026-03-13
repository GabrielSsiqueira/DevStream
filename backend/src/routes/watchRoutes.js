const express = require('express')
const watchController = require('../controllers/watchController')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/create', auth, watchController.watch)
router.get('/history', auth, watchController.history)
router.get('/continue-watching', auth, watchController.continueWatching)

module.exports = router