const postService = require('../src/service/post')

async function getAllPosts(req, res) {
    const posts = await postService.getAllPosts()
    res.json(posts)
}

module.exports.getAllPosts = getAllPosts
