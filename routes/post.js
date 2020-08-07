const express = require('express')
const postController = require('../controller/post')
const router = express.Router()

router.get('/', postController.getAllPosts)

module.exports = router
