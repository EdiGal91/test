const express = require('express')
const userRoutes = require('./user')
const postRoutes = require('./post')
const authRoutes = require('./auth')

const router = express.Router()

router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/posts', postRoutes)

module.exports = router