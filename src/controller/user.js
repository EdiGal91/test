const userService = require('../service/user')

exports.getAllUsers = async function(req, res) {
    const users = await userService.getAllUsers()
    res.json(users)
}

exports.deleteAll = async function(req, res) {
    const result = await userService.deleteAll()
    res.json(result)
}
