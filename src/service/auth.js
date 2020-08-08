const userService = require('./user')


exports.login = async function(email, password) {
    const user = await userService.getUserByEmail(email)
    if(!user) return null;

    const isValidPassword = user.validatePassword(password)
    return isValidPassword
}