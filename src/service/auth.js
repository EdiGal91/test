const userService = require('./user')


exports.login = async function(email, password) {
    const user = await userService.getUserByEmail(email)
    if(!user) return null;
    
    const isValidPassword = user.validatePassword(password)
    if(!isValidPassword) return false
    
    const token = await user.generateAuthToken()
    return {user, token}
}