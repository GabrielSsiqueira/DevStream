const express = require('express')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
const CategoryController = require('../controllers/categoryController')
const router = express.Router()

router.get('/home', CategoryController.home)
router.post('/create', CategoryController.create)
router.get('/list', CategoryController.list)
router.get('/view/:id', CategoryController.getById)
router.put('/update/id',auth , admin ,CategoryController.update)
router.post('/delete/:id', auth, admin, CategoryController.delete)

module.exports = router