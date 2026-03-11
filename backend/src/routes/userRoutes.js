const express = require('express')
const auth = require('../middleware/auth')
const validate = require('../middleware/validate')
const { registerSchema } = require('../validations/userValidation')
const { loginSchema } = require('../validations/authValidation')
const userController = require('../controllers/userController')
const router = express.Router()

router.post('/register', validate(registerSchema), userController.register)
router.get('/list', userController.list)
router.post('/login', auth, validate(loginSchema), userController.login)
router.get('/view/:id', userController.getById)
router.put('/update/:id', userController.update)
router.post('/delete/:id', userController.delete)

module.exports = router