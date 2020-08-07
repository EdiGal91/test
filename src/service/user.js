const axios = require('axios')

async function getAllUsers() {
    const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users')
    return users
}

module.exports.getAllUsers = getAllUsers
