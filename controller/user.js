const userService = require('../service/user')

async function getAllUsers(req, res) {
    const users = await userService.getAllUsers()
    res.json(users)
}

module.exports.getAllUsers = getAllUsers
