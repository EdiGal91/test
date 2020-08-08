const express = require('express')
const authController = require('../controller/auth')
const authValidation = require('../middleware/auth')
const router = express.Router()

router.get('/login', authController.getlogin)
router.post('/login', authValidation.validateLogin ,authController.login)
router.post('/signup', authValidation.createUserValidation, authController.signup)

module.exports = router
