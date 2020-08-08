const User = require('../model/User')

exports.getAllUsers = async function () {
    const users = await User.find()
    return users
}

exports.createUser = async function (username, email, password) {
    const user = new User({ username, email })
    user.setPassword(password)
    await user.save()
    return user
}

exports.deleteAll = async function () {
    const result = await User.deleteMany()
    return result
}

exports.getUserByEmail = async function (email) {
    const user = await User.findOne({email})
    return user
}
