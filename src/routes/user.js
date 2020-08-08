const express = require('express')
const userController = require('../controller/user')
const router = express.Router()

router.get('/', userController.getAllUsers)
router.delete('/', userController.deleteAll)

module.exports = router
