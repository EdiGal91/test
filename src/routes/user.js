const express = require('express')
const userController = require('../controller/user')
const router = express.Router()
const { auth } = require('../middleware/auth')

router.get('/', userController.getAllUsers)
router.delete('/', userController.deleteAll)
router.get('/me', auth, (req, res) => {
    res.send(req.user)
})
module.exports = router
