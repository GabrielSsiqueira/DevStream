const express = require('express')
const validate = require('../middleware/validate')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')

const { movieSchema } = require('../validations/movieValidation')
const movieController = require('../controllers/movieController')
const router = express.Router()

router.post('/create', auth, admin, validate(movieSchema), movieController.create)
router.get('/search', auth, movieController.search)
router.get('/list', auth, admin, movieController.list)
router.get('/view/:id', movieController.getById)
router.put('/update/:id', auth, admin, validate(movieSchema), movieController.update)
router.post('/delete/:id', auth, admin, movieController.delete)


module.exports = router