const axios = require('axios')

async function getAllPosts() {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return posts
}

module.exports.getAllPosts = getAllPosts
